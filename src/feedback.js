(function() {

    "use strict";

    var template = window.dw.templates.feedback({}),
        state = $.ab.state;


    var gradeItemHtml = "<li data-role='list-item' data-name='{name}'>" +
        "<div>" +
        "<a data-action='edit-feedback' >{name} {default} {score} <span class='glyphicon glyphicon-trash' data-action='delete-grade' aria-hidden='true'></span></a>" +
        "<p>{feedback}</p>" +
        "</div>" +
        "</li>";

    var grade = { name: "Untitled", isDefault: true, score: 0, feedback: "Your default message" };


    $.widget("dw.feedback", $.dw.assessmentbuilderbase, {

        _options: {


        },

        currentGrade: null,

        datasource: {},

        _create: function() {

            this._bind();

            var that = this;

            this.element.html(template);

            this.datasource = state.feedback;

            this.datasource.grade = this.datasource.grade || [];

            if (this.datasource.grade.length === 0) {
                this.datasource.grade.push($.extend({}, grade, { isDefault: true }));
            }

            $(this.datasource.grade).each(function(i, e) {
                that._addGradeToUI(e);
            });

        },

        _getNewObject: function() {

            var obj = $.extend({}, grade);
            return obj;
        },

        _getGradeItemHtml: function(grade) {

            var defaultText = grade.isDefault === true ? "(default)" : "";
            var score = grade.isDefault === true ? "" : " >= " + grade.score;

            return gradeItemHtml.replace(/\{name\}/g, grade.name).replace(/\{score\}/g, score).replace(/\{feedback\}/g, grade.feedback).replace(/\{default\}/g, defaultText);

        },

        _bind: function() {

            this._on(this.element, {

                "click [data-action='add-feedback']": this._onAddFeedbackClicked,

                "click [data-action='edit-feedback']": this._onEditClicked,

                "click [data-action='clear-form']": this._clearForm

            });

        },

        _clearForm: function(event) {
            event.preventDefault();

            this._clear();

        },

        _onEditClicked: function(event) {
            event.preventDefault();

            var name = $(event.target).closest("[data-role='list-item']").attr("data-name");

            var obj = _.find(this.datasource.grade, { name: name });

            this._fillForm(obj);
        },

        _fillForm: function(obj) {

            this.currentGrade = obj;

            this.element.find("[data-name='score']").prop("disabled", obj.isDefault);

            this.element.find("[data-name='grade-name']").val(obj.name);

            this.element.find("[data-name='score']").val(obj.score);

            this.element.find("[data-name='feedback']").val(obj.feedback);

            this.element.find("[data-action='add-feedback']").text("Save");

        },

        /* "name" if passed, it will find the element and replace it with new object */
        _addGradeToUI: function(obj, name) {

            var list = this.element.find("[data-name='grade-list']");

            var selector = "[data-name='{name}']".replace(/\{name\}/, name || obj.name);

            var element = this.element.find(selector);

            var newElement = $(this._getGradeItemHtml(obj));

            if (element.length > 0) {
                //var isDefault = _.find(this.datasource.grade, { name: obj.name }).isDefault;
                element.replaceWith(newElement);

            } else {
                list.append(newElement);
            }

        },

        _onAddFeedbackClicked: function(event) {
            event.preventDefault();

            var text = $(event.target).text();

            this._addFeedback();

        },

        _addFeedback: function() {

            var name = this.element.find("[data-name='grade-name']").val();

            var _grade = {
                name: name,
                score: parseInt(this.element.find("[data-name='score']").val()),
                feedback: this.element.find("[data-name='feedback']").val(),
                isDefault: false
            };

            // isDefault property must not be changed
            var isDefault = false;

            // If it is an edit, we need to find the actual name of the grade which is being edited.
            // because the user might have edited the name of the grade also.
            name = this.currentGrade ? this.currentGrade.name : name;

            var matchFound = _.find(this.datasource.grade, { name: name });
            if (matchFound) _grade.isDefault = isDefault = matchFound.isDefault;

            if (isDefault) delete _grade.score;

            this._updateDataSource(_grade);
        },

        _updateFeedback: function() {

            var _grade = $.extend({}, this.currentGrade, {
                name: this.element.find("[data-name='grade-name']").val(),
                score: parseInt(this.element.find("[data-name='score']").val()),
                feedback: this.element.find("[data-name='feedback']").val()
            });

        },


        _updateDataSource: function(_grade) {

            var errors = this._validate(_grade), index, matchFound;

            if (errors.length > 0) return;

            if (this.currentGrade) {
                index = _.findIndex(this.datasource.grade, _.find(this.datasource.grade, { name: this.currentGrade.name }));
                if (index > -1) {
                    this.datasource.grade[index] = _grade;
                    this._addGradeToUI(_grade, this.currentGrade.name);
                }
            } else {
                // though, it is not edit, which means this.currentGrade is null, chances for performing an edit is possible.
                //  because, he may try to add a new grade with an exisiting name. 
                //  in this case we are not throwing any error message, but we are updating the exisiting grade with the new score and feedback
                matchFound = _.find(this.datasource.grade, { name: _grade.name });
                index = matchFound ? _.findIndex(this.datasource.grade, matchFound): -1;
                if (index > -1) {
                    this.datasource.grade[index] = _grade;
                    this._addGradeToUI(_grade, _grade.name);
                } else{
                    this.datasource.grade.push(_grade);
                    this._addGradeToUI(_grade);    
                }
                
            }

            this._clear();
        },

        _clear: function() {
            this.currentGrade = null;
            this.element.find("[data-action='add-feedback']").text("Add");
            this.element.find("[data-name='grade-name']").val("");
            this.element.find("[data-name='score']").val("");
            this.element.find("[data-name='feedback']").val("");
            this.element.find("[data-name='score']").prop("disabled", false);
        },



        _validate: function(grade) {
            var errors = [];

            if (grade.isDefault === false && isNaN(grade.score)) errors.push("Score is invalid");

            if (!grade.feedback) errors.push("feedback must not be empty");


            return errors;

        }


    });

})();
