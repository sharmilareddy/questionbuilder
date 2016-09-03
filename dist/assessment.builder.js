(function() {
    if (typeof define === "function" && define.amd) {
        define(["handlebars"], function(Handlebars) {
            this["dw"] = this["dw"] || {};
            this["dw"]["templates"] = this["dw"]["templates"] || {};

            this["dw"]["templates"]["checkboxes"] = Handlebars.template({
                "1": function(container, depth0, helpers, partials, data) {
                    var helper;

                    return "\r\n        <label>Score</label>\r\n        <input type=\"number\" data-name=\"score\" placeholder=\"Enter the score\" value=\"" +
                        container.escapeExpression(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : helpers.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {}, {
                            "name": "score",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" class=\"form-control\" /> ";
                },
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1, helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<div data-role=\"choice-item\" class=\"ui-state-default\">\r\n    <div class=\"pull-left\"><a href=\"#\"><i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i></a></div>\r\n    <div class=\"form-group form-inline\">\r\n        <input type=\"hidden\" data-name=\"uniqueid\" value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" />\r\n        <input type=\"checkbox\" title=\"'Check' to mark this choice as correct\" name=\"question" +
                        alias4(((helper = (helper = helpers.unique_id || (depth0 != null ? depth0.unique_id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "unique_id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" />\r\n        <textarea data-name=\"choice\" placeholder=\"Type your choice here\" rows=\"1\" class=\"form-control\">" +
                        alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "</textarea> " +
                        ((stack1 = helpers["if"].call(alias1, (depth0 != null ? depth0.enable_scoring : depth0), {
                            "name": "if",
                            "hash": {},
                            "fn": container.program(1, data, 0),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        "\r\n        <div class=\"pull-right\"><a data-role=\"delete-choice\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a></div>\r\n    </div>\r\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["multiline"] = Handlebars.template({
                "1": function(container, depth0, helpers, partials, data) {
                    var alias1 = container.lambda,
                        alias2 = container.escapeExpression;

                    return "\r\n            <option value=\"" +
                        alias2(alias1((depth0 != null ? depth0.value : depth0), depth0)) +
                        "\">" +
                        alias2(alias1((depth0 != null ? depth0.title : depth0), depth0)) +
                        "</option> ";
                },
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1;

                    return "<div>\r\n    <div class=\"form-group form-inline\">\r\n        <label>Choose the format of response:</label>\r\n        <select class=\"form-control\" data-name=\"field-format\"> " +
                        ((stack1 = helpers.each.call(depth0 != null ? depth0 : {}, (depth0 != null ? depth0.supported_formats : depth0), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(1, data, 0),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        " </select>\r\n    </div>\r\n    <div class=\"form-group form-inline\" data-section=\"max-len\">\r\n        <label>Maximum Length:</label>\r\n        <input class=\"form-control\" data-name='max-len' type=\"text\" /> </div>\r\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["play_checkboxes"] = Handlebars.template({
                "1": function(container, depth0, helpers, partials, data) {
                    var helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "\n        <div class=\"checkbox\" data-choice-item data-value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\n            <label>\n                <input type=\"checkbox\" class=\"clickable\" value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\"> " +
                        alias4(container.lambda((depth0 != null ? depth0.title : depth0), depth0)) +
                        " </label>\n        </div> ";
                },
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1, helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<div data-name=\"play-question\" data-qid=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\n    <div>\n        <p>" +
                        ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) != null ? stack1 : "") +
                        "</p>\n    </div>\n    <div data-choice-type=\"" +
                        alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "type",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\"> " +
                        ((stack1 = helpers.each.call(alias1, (depth0 != null ? depth0.choice : depth0), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(1, data, 0),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        " </div>\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["play_radiobutton"] = Handlebars.template({
                "1": function(container, depth0, helpers, partials, data, blockParams, depths) {
                    var helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression,
                        alias5 = container.lambda;

                    return "\n        <div class=\"radio\" data-choice-item data-value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\n            <label>\n                <input type=\"radio\" class=\"clickable\" name=\"question" +
                        alias4(alias5((depths[1] != null ? depths[1].id : depths[1]), depth0)) +
                        "\" value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\"> " +
                        alias4(alias5((depth0 != null ? depth0.title : depth0), depth0)) +
                        " </label>\n        </div> ";
                },
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data, blockParams, depths) {
                    var stack1, helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<div data-name=\"play-question\" data-qid=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\n    <div>\n        <p>" +
                        ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) != null ? stack1 : "") +
                        "</p>\n    </div>\n    <div data-choice-type=\"" +
                        alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "type",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\"> " +
                        ((stack1 = helpers.each.call(alias1, (depth0 != null ? depth0.choice : depth0), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(1, data, 0, blockParams, depths),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        " </div>\n</div>";
                },
                "useData": true,
                "useDepths": true
            });

            this["dw"]["templates"]["play_singleline"] = Handlebars.template({
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1, helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<div data-name=\"play-question\" data-qid=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\n    <div>\n        <p>" +
                        ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) != null ? stack1 : "") +
                        "</p>\n    </div>\n    <div data-choice-type=\"" +
                        alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "type",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\n        <div class=\"form-group\" data-choice-item>\n            <input type=\"text\" class=\"form-control\" data-max-length=\"" +
                        alias4(container.lambda(((stack1 = (depth0 != null ? depth0.choice : depth0)) != null ? stack1.maximumlength : stack1), depth0)) +
                        "\" /> </div>\n    </div>\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["questioneditor"] = Handlebars.template({
                "1": function(container, depth0, helpers, partials, data) {
                    var helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "\r\n                        <option value=\"" +
                        alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "value",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">" +
                        alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "</option> ";
                },
                "3": function(container, depth0, helpers, partials, data) {
                    var helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "\r\n                    <option value=\"" +
                        alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "value",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">" +
                        alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "</option> ";
                },
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1, alias1 = depth0 != null ? depth0 : {};

                    return "<div class=\"question-editor\">\r\n    <div data-container=\"question-editor\">\r\n        <div data-section=\"question\">\r\n            <div class=\"form-group\" data-role=\"question\">\r\n                <textarea class=\"form-control\" data-name=\"title\" placeholder=\"Type your question here...\"></textarea>\r\n            </div>\r\n            <div data-section=\"scoring\">\r\n                <div class=\"form-group\">\r\n                    <label>Have scores on: </label>\r\n                    <select class=\"form-control\" data-name=\"scoring-method\"> " +
                        ((stack1 = helpers.each.call(alias1, ((stack1 = (depth0 != null ? depth0.scoring_configuration : depth0)) != null ? stack1.scoring_at : stack1), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(1, data, 0),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        " </select>\r\n                </div>\r\n                <div class=\"form-group\" data-section=\"question-scoring\">\r\n                    <input type=\"number\" class=\"form-control\" data-name=\"question-score\" placeholder=\"Enter your score\" /> \r\n                </div>\r\n\r\n                <p class=\"well\">Select the checkbox, to mark this question as <i>rhetorical question</i>. If selected, any scores given to this question will have no effect on the results. <input type=\"checkbox\" name=\"rhetorical-question\" /> </p>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <select data-name=\"choice-types\" class=\"form-control\"> " +
                        ((stack1 = helpers.each.call(alias1, (depth0 != null ? depth0.allowed_choice_types : depth0), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(3, data, 0),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        " </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div data-section=\"choice\"> </div>\r\n            </div>\r\n        </div>\r\n        <div data-section=\"tagging\">\r\n            <div class=\"form-group\">\r\n                <!-- Tags should go here -->\r\n                <h5>Tag Question:</h5>\r\n                <select class=\"form-control\" data-name=\"tags\" placeholder=\"Type the tag name and press 'Enter'\" multiple=\"\"></select>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>\r\n            <input type=\"checkbox\" data-name=\"required\" /> Required </label>\r\n        <label>\r\n            <input type=\"checkbox\" data-name=\"shuffle\" /> Randomize Choice </label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button class=\"btn btn-primary\" data-name=\"save-question\">Preview Question</button>\r\n        <button class=\"btn btn-default\" data-name=\"cancel-question\">Reset</button>\r\n    </div>\r\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["radiobutton"] = Handlebars.template({
                "1": function(container, depth0, helpers, partials, data) {
                    var helper;

                    return "\n        <label>Score</label>\n        <input type=\"text\" data-name=\"score\" placeholder=\"Enter the score\" value=\"" +
                        container.escapeExpression(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : helpers.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {}, {
                            "name": "score",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" class=\"form-control\" /> ";
                },
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1, helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<div data-role=\"choice-item\" class=\"ui-state-default\">\n    <div class=\"pull-left\"><a href=\"#\"><i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i></a></div>\n    <div class=\"form-group form-inline\">\n        <input type=\"hidden\" data-name=\"uniqueid\" value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" />\n        <input type=\"radio\" title=\"'Check' to mark this choice as correct\" name=\"question" +
                        alias4(((helper = (helper = helpers.unique_id || (depth0 != null ? depth0.unique_id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "unique_id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" />\n        <textarea data-name=\"choice\" placeholder=\"Type your choice here\" rows=\"1\" class=\"form-control\">" +
                        alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "</textarea> " +
                        ((stack1 = helpers["if"].call(alias1, (depth0 != null ? depth0.enable_scoring : depth0), {
                            "name": "if",
                            "hash": {},
                            "fn": container.program(1, data, 0),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        "\n        <div class=\"pull-right\"><a data-role=\"delete-choice\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a></div>\n    </div>\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["scoring"] = Handlebars.template({
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    return "<div data-section=\"scoring-method\">\r\n    <div class=\"form-group\">\r\n        <dl>\r\n            <dt>\r\n                <label>\r\n                    <input type=\"radio\" name=\"scoring-method\" value=\"any\" />Any</label>\r\n            </dt>\r\n            <dd>Full score will be given for a question, on selecting any one correct choice</dd>\r\n            <dt>\r\n                <label>\r\n                    <input type=\"radio\" name=\"scoring-method\" value=\"divide\" />Divide</label>\r\n            </dt>\r\n            <dd>Scores will be divided based on the no.of.correct choices, the user selects for a question</dd>\r\n            <dt>\r\n                <label>\r\n                    <input type=\"radio\" name=\"scoring-method\" value=\"all\" />All</label>\r\n            </dt>\r\n            <dd>Full score will be given for a question, only when the user selects all the correct choices</dd>\r\n        </dl>\r\n    </div>\r\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["shell_checkbox"] = Handlebars.template({
                "1": function(container, depth0, helpers, partials, data, blockParams, depths) {
                    var helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "\r\n                <div class=\"checkbox\">\r\n                    <label>\r\n                        <input type=\"checkbox\" data-value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" name=\"question" +
                        alias4(container.lambda((depths[1] != null ? depths[1].id : depths[1]), depth0)) +
                        "\" /> " +
                        alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        " </label>\r\n                </div> ";
                },
                "3": function(container, depth0, helpers, partials, data) {
                    return "\r\n                <span class=\"label label-info\">" +
                        container.escapeExpression(container.lambda(depth0, depth0)) +
                        "</span> ";
                },
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data, blockParams, depths) {
                    var stack1, helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<div data-role=\"toggle\" data-name=\"question-shell\" data-qid=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\r\n    <div data-view=\"\">\r\n        <div data-container=\"question\" data-role=\"checkbox-question-type\" data-value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\r\n            <div>\r\n                <p>" +
                        ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) != null ? stack1 : "") +
                        "</p>\r\n            </div>\r\n            <div> " +
                        ((stack1 = helpers.each.call(alias1, (depth0 != null ? depth0.choice : depth0), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(1, data, 0, blockParams, depths),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        " </div>\r\n            <div data-section=\"tags\"> " +
                        ((stack1 = helpers.each.call(alias1, (depth0 != null ? depth0.tags : depth0), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(3, data, 0, blockParams, depths),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        " </div>\r\n            <div>\r\n                <ul>\r\n                    <li> <a data-action=\"edit\">Edit</a> </li>\r\n                    <li> <a data-action=\"delete\">Delete</a> </li>\r\n                    <li> <a data-action=\"insert\">Insert</a> </li>\r\n                    <li> <a data-action=\"moveup\">Move Up</a> </li>\r\n                    <li> <a data-action=\"movedown\">Move Down</a> </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div data-view=\"\">\r\n        <h2>Edit Question</h2>\r\n        <div data-container=\"edit\"> </div>\r\n    </div>\r\n</div>";
                },
                "useData": true,
                "useDepths": true
            });

            this["dw"]["templates"]["shell_multiline"] = Handlebars.template({
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1, helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression,
                        alias5 = container.lambda;

                    return "<div data-role=\"toggle\" data-name=\"question-shell\" data-qid=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\r\n    <div data-view=\"\">\r\n        <div data-container=\"question\" data-role=\"multiline-question\" data-value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\r\n            <div>\r\n                <p>" +
                        ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) != null ? stack1 : "") +
                        "</p>\r\n            </div>\r\n            <div>\r\n                <div class=\"form-group\">\r\n                    <textarea class=\"form-control\" data-max-len=\"" +
                        alias4(alias5(((stack1 = (depth0 != null ? depth0.choice : depth0)) != null ? stack1.maximumlength : stack1), depth0)) +
                        "\" data-role=\"" +
                        alias4(alias5(((stack1 = (depth0 != null ? depth0.choice : depth0)) != null ? stack1.fieldformat : stack1), depth0)) +
                        "\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <ul>\r\n                    <li> <a data-action=\"edit\">Edit</a> </li>\r\n                    <li> <a data-action=\"delete\">Delete</a> </li>\r\n                    <li> <a data-action=\"insert\">Insert</a> </li>\r\n                    <li> <a data-action=\"moveup\">Move Up</a> </li>\r\n                    <li> <a data-action=\"movedown\">Move Down</a> </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div data-view=\"\">\r\n        <h2>Edit Question</h2>\r\n        <div data-container=\"edit\"> </div>\r\n    </div>\r\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["shell_radiobutton"] = Handlebars.template({
                "1": function(container, depth0, helpers, partials, data, blockParams, depths) {
                    var helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "\r\n                <div class=\"radio\">\r\n                    <label>\r\n                        <input type=\"radio\" data-value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" name=\"question" +
                        alias4(container.lambda((depths[1] != null ? depths[1].id : depths[1]), depth0)) +
                        "\" /> " +
                        alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        " </label>\r\n                </div> ";
                },
                "3": function(container, depth0, helpers, partials, data) {
                    return "\r\n                <span class=\"label label-info\">" +
                        container.escapeExpression(container.lambda(depth0, depth0)) +
                        "</span> ";
                },
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data, blockParams, depths) {
                    var stack1, helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<div data-role=\"toggle\" data-name=\"question-shell\" data-qid=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\r\n    <div data-view=\"\">\r\n        <div data-container=\"question\" data-role=\"checkbox-question-type\" data-value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\r\n            <div>\r\n                <p>" +
                        ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) != null ? stack1 : "") +
                        "</p>\r\n            </div>\r\n            <div> " +
                        ((stack1 = helpers.each.call(alias1, (depth0 != null ? depth0.choice : depth0), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(1, data, 0, blockParams, depths),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        " </div>\r\n            <div data-section=\"tags\"> " +
                        ((stack1 = helpers.each.call(alias1, (depth0 != null ? depth0.tags : depth0), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(3, data, 0, blockParams, depths),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        " </div>\r\n            <div>\r\n                <ul>\r\n                    <li> <a data-action=\"edit\">Edit</a> </li>\r\n                    <li> <a data-action=\"delete\">Delete</a> </li>\r\n                    <li> <a data-action=\"insert\">Insert</a> </li>\r\n                    <li> <a data-action=\"moveup\">Move Up</a> </li>\r\n                    <li> <a data-action=\"movedown\">Move Down</a> </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div data-view=\"\">\r\n        <h2>Edit Question</h2>\r\n        <div data-container=\"edit\"> </div>\r\n    </div>\r\n</div>";
                },
                "useData": true,
                "useDepths": true
            });

            this["dw"]["templates"]["shell_singleline"] = Handlebars.template({
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1, helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression,
                        alias5 = container.lambda;

                    return "<div data-role=\"toggle\" data-name=\"question-shell\" data-qid=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\r\n    <div data-view=\"\">\r\n        <div data-container=\"question\" data-role=\"singleline-question\" data-value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\r\n            <div>\r\n                <p>" +
                        ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) != null ? stack1 : "") +
                        "</p>\r\n            </div>\r\n            <div>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" data-max-len=\"" +
                        alias4(alias5(((stack1 = (depth0 != null ? depth0.choice : depth0)) != null ? stack1.maximumlength : stack1), depth0)) +
                        "\" data-role=\"" +
                        alias4(alias5(((stack1 = (depth0 != null ? depth0.choice : depth0)) != null ? stack1.fieldformat : stack1), depth0)) +
                        "\" /> </div>\r\n            </div>\r\n            <div>\r\n                <ul>\r\n                    <li> <a data-action=\"edit\">Edit</a> </li>\r\n                    <li> <a data-action=\"delete\">Delete</a> </li>\r\n                    <li> <a data-action=\"insert\">Insert</a> </li>\r\n                    <li> <a data-action=\"moveup\">Move Up</a> </li>\r\n                    <li> <a data-action=\"movedown\">Move Down</a> </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div data-view=\"\">\r\n        <h2>Edit Question</h2>\r\n        <div data-container=\"edit\"> </div>\r\n    </div>\r\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["shell"] = Handlebars.template({
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1, helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function";

                    return "<div>\r\n    <div data-section=\"head\">\r\n        <div>\r\n            <h1>" +
                        container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "</h1>\r\n            <p>" +
                        ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "description",
                            "hash": {},
                            "data": data
                        }) : helper))) != null ? stack1 : "") +
                        "</p>\r\n        </div>\r\n    </div>\r\n    <div data-section=\"body\"> </div>\r\n    <div data-section=\"footer\">\r\n        <div class=\"form-group\" data-section=\"feedback\">\r\n            <div class=\"form-group\">\r\n                <button class=\"btn btn-default\" data-action=\"feedback\">Feedback</button>\r\n            </div>\r\n            <div data-section=\"feedback-form\" style=\"display:none\">\r\n                <div class=\"form-group\">\r\n                    <textarea rows=\"3\" class=\"form-control\" data-name=\"feedback-message\" placeholder=\"Type the feedback message...\"></textarea>\r\n                </div>\r\n                <button class=\"btn btn-primary\" data-action=\"save-feedback\">Save</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\" data-section=\"retake\">\r\n            <p class=\"well form-inline\">Note: Setting retake limit to -1, will allow the user to retake this assessment infinite times.\r\n            <input type=\"number\" class=\"form-control\" data-name=\"retake\" placeholder=\"Enter the retake limit for this assessment\">\r\n            </p>\r\n            \r\n        </div>\r\n        <div class=\"form-group\" data-section=\"scoring-method\">\r\n            <div class=\"form-group\">\r\n                <dl class=\"dl-horizontal\">\r\n                    <dt>\r\n                        <label>\r\n                            <input type=\"radio\" name=\"scoring-method\" value=\"any\" />Any</label>\r\n                    </dt>\r\n                    <dd>Full score will be given for a question, on selecting any one correct choice</dd>\r\n                    <dt>\r\n                        <label>\r\n                            <input type=\"radio\" name=\"scoring-method\" value=\"divide\" />Divide</label>\r\n                    </dt>\r\n                    <dd>Scores will be divided based on the no.of.correct choices, the user selects for a question</dd>\r\n                    <dt>\r\n                        <label>\r\n                            <input type=\"radio\" name=\"scoring-method\" value=\"all\" />All</label>\r\n                    </dt>\r\n                    <dd>Full score will be given for a question, only when the user selects all the correct choices</dd>\r\n                </dl>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-primary\" data-action=\"save\">Save</button>\r\n            <button class=\"btn btn-default\" data-action=\"cancel\">Cancel</button>\r\n        </div>\r\n    </div>\r\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["singleline"] = Handlebars.template({
                "1": function(container, depth0, helpers, partials, data) {
                    var alias1 = container.lambda,
                        alias2 = container.escapeExpression;

                    return "\n            <option value=\"" +
                        alias2(alias1((depth0 != null ? depth0.value : depth0), depth0)) +
                        "\">" +
                        alias2(alias1((depth0 != null ? depth0.title : depth0), depth0)) +
                        "</option> ";
                },
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1;

                    return "<div>\n    <div class=\"form-group form-inline\">\n        <label>Choose the format of response:</label>\n        <select class=\"form-control\" data-name=\"field-format\"> " +
                        ((stack1 = helpers.each.call(depth0 != null ? depth0 : {}, (depth0 != null ? depth0.supported_formats : depth0), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(1, data, 0),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        " </select>\n    </div>\n    <div class=\"form-group form-inline\" data-section=\"max-len\">\n        <label>Maximum Length:</label>\n        <input class=\"form-control\" data-name='max-len' type=\"text\" /> </div>\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["test"] = Handlebars.template({
                "1": function(container, depth0, helpers, partials, data) {
                    return "<li>" +
                        container.escapeExpression(container.lambda(depth0, depth0)) +
                        "</li>\r\n";
                },
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1;

                    return "<ul>\r\n\r\n" +
                        ((stack1 = helpers.each.call(depth0 != null ? depth0 : {}, (depth0 != null ? depth0.names : depth0), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(1, data, 0),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        "\r\n</ul>";
                },
                "useData": true
            });;
            (function() {
                "use strict";

                $.dw = {};

                $.dw.base_configurations = {

                    version: 1,

                    title: "Health Assessment", // wizard title

                    description: "A Basic health assessment", // wizard description

                    // load the different plugins based on the question types needed for the wizard
                    allowed_choice_types: [{
                        title: "Multiple Choice",
                        value: "checkbox"
                    }, {
                        title: "Single Choice",
                        value: "radiobutton"
                    }, {
                        title: "Single Line",
                        value: "singleline"
                    }, {
                        title: "Multi Line",
                        value: "multiline"
                    }],

                    // the default questions will be of this choice type. 
                    default_choice_type: "checkbox",

                    minimum_no_of_questions_required: 1, // specifies the minimum no of questions required. Default is "1"

                    // specifies the maximum allowed question. Default is "-1" which means it is infinte
                    maximum_no_of_questions_allowed: -1,

                    import_questions: "yes", // allows the author to import questions from other sources like an existing wizard / a default template

                    /* if "yes" by default the required option will be checked and readonly. if no, it will be unchecked and readonly. leave it as null ( default ) to allow the author 
                     * to decide on that.
                     */
                    all_mandatory_questions: "yes",

                    /* Defaults to "-1", which means the assessment can be taken n no of times */
                    retake_limit: -1,

                    enable_retake: "yes", // enables options to allow the author to choose the value for repeat / also accepts an integer value that represents the no of retakes

                    tagging: "yes", // enables the ui to tag questions with the given tags

                    tags: ["depression", "anxiety"], // tags which can be added to a question


                    /***************************************************** Scoring ***************************************/

                    scoring_configuration: {

                        default_score: 1,

                        scoring_at: [{
                            title: "Question",
                            value: "question"
                        }, {
                            title: "Choice",
                            value: "choice"
                        }],

                        default_scoring_method: "any",

                        allow_to_change_scoring_method: "yes",

                        negative_score: "yes"

                    },

                    /***************************************************** Scoring ***************************************/


                    /* only the allowed options will be enabled in the UI. leave it as empty to allow all the possible options
                     * like "edit", "delete", "insert", "move"
                     */
                    allowed_access: ["edit", "delete"],

                    // this is a default question which will appear when user clicks on insert button
                    default_question: "Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey.",

                    default_choice: "Untitled Choice {0}",

                    datasource: []

                };



            })();;
            (function(window) {


                window.assessmentbuilder = {};


                window.assessmentbuilder.factory = Object.create({

                    /* "renderEngine" returns the html for every type of question with choices */
                    renderEngine: function(config) {

                        var html = "";

                        if (config.choiceType === "radiobutton") {
                            html = window.dw.templates.shell_radiobutton(config);
                        } else if (config.choiceType === "checkbox") {
                            html = window.dw.templates.shell_checkbox(config);
                        } else if (config.choiceType === "singleline") {
                            html = window.dw.templates.shell_singleline(config);
                        } else if (config.choiceType === "multiline") {
                            html = window.dw.templates.shell_multiline(config);
                        }

                        return html;
                    },

                    /* "questionFactory" returns a new question object based on the configuration passed & the type of the question */
                    questionFactory: function(type, config) {

                        var latestQuestion = _.maxBy($.dw.base_configurations.datasource, "id");

                        var newQuestionId = latestQuestion ? latestQuestion.id + 1 : 1;

                        var defaults = {};

                        defaults.required = true;
                        defaults.randomizeChoice = true;
                        defaults.title = config.default_question.replace(/\{0\}/, newQuestionId);

                        if (config.scoring_configuration) {
                            defaults.scoringAt = config.scoring_configuration.scoring_at[0].value;
                            defaults.score = defaults.scoringAt === "question" ? config.scoring_configuration.default_score : null;
                        }

                        var Question = {};

                        Question = {
                            id: 1,
                            choice: this.getChoiceFactory(type, $.extend({}, config, {
                                scoring: (defaults.scoringAt === "choice") ? "yes" : "no"
                            }), [1, 2]),
                            choiceType: type
                        };

                        $.extend(Question, defaults);

                        console.group("RenderEngine:"); /*RemoveLogging:skip*/
                        console.log(Question); /*RemoveLogging:skip*/
                        console.groupEnd("RenderEngine"); /*RemoveLogging:skip*/

                        return Question;

                    },


                    /* "getChoiceFactory" returns a new choice object based on the configuration passed */
                    getChoiceFactory: function(type, config, choiceId) {

                        var choiceObj = {},
                            score = null;

                        choiceId = choiceId || [1];

                        if (type === "radiobutton" || type === "checkbox") {

                            if (config.scoring_configuration && config.scoring_configuration !== null) {
                                score = config.scoring_configuration.default_score;
                            }

                            var choices = choiceId.map(function(e) {

                                return {
                                    id: e,
                                    title: config.default_choice.replace(/\{0\}/, e.toString()),
                                    score: score
                                };
                            });
                            return choices;
                        }

                    }

                });





            })(window);;
            (function() {

                "use strict";


                var factory = window.assessmentbuilder.factory;

                var defaults = {
                    templates: {
                        layout: '<div data-role="choice-list"></div><div><div><a data-name="add-more-choice">Add more choices</a></div></div>',
                        choice: window.dw.templates.checkboxes
                    },
                    min_no_of_choices: 2,
                    add_more_choice: "yes",
                    max_no_of_chocies: 4,
                    scoring: "yes",
                    persist_value: true,
                    unique_id: 1 // mostly it will be the question id, which is used to add in the name of the input elements for grouping
                };


                var Checkbox = function(element, options) {

                    var $this = this;

                    this.options = $.extend({}, defaults, $.dw.base_configurations, options);

                    this.options.data = this.options.data || [];

                    // declaration
                    this.options.data = options.choices || [];
                    this.element = element;
                    this.element.append(this.options.templates.layout);
                    this.addMoreChoice = this.element.find("[data-name='add-more-choice']");
                    this.choiceContainer = this.element.find("[data-role='choice-list']");

                    // execution
                    // you can set the state of the plugin before initialzing, by setting the data-value property
                    this.options.data = element.data("value") || [];


                    if (this.options.persist_value === false) element.removeData("value");

                    if (this.options.data.length === 0) {
                        this.options.data.push(this.getChoiceObject());
                        this.options.data.push(this.getChoiceObject());
                    }

                    // if default choices are provided, make it available in the UI for the user to modify
                    for (var i = 0; i < this.options.data.length; i++) {
                        var choiceHTML = $(this.getChoiceHtml(this.options.data[i]));
                        this.choiceContainer.append(choiceHTML);
                        if (this.options.data[i].correct === true) choiceHTML.find("input[type='checkbox']").prop("checked", true);
                    }


                    this.element.on("click", "[data-role='delete-choice']", function(event) {
                        event.preventDefault();
                        $this.deleteChoice(this);
                    });

                    if (this.options.add_more_choice === "yes") {

                        this.updateAddMoreChoice();

                        this.addMoreChoice.click(function(event) {
                            event.preventDefault();
                            $this.addChoice();
                        });

                    } else if (this.options.add_more_choice === "no" || this.options.max_no_of_chocies === 1) {
                        this.addMoreChoice.addClass("hide");
                    }

                    this.choiceContainer.sortable();

                };

                Checkbox.prototype = {

                    deleteChoice: function(element) {

                        var choiceContainer = $(element).closest("[data-role='choice-item']");
                        var uniqueid = parseInt(choiceContainer.find('[data-name="uniqueid"]').val());

                        choiceContainer.remove();

                        _.remove(this.options.data, function(c) {
                            return c.id === uniqueid;
                        });

                        this.updateAddMoreChoice();

                    },

                    getChoiceObject: function() {

                        var uniqueId = this.getNewChoiceId();

                        var choice = factory.getChoiceFactory("radiobutton", $.extend({}, this.options, {
                            scoring: this.options.scoring
                        }), [uniqueId])[0];

                        return choice;
                    },

                    addChoice: function() {

                        var choiceObj = this.getChoiceObject();

                        this.options.data.push(choiceObj);

                        var data = $.extend(this.getConfigForHTML(), choiceObj);

                        var choice = this.options.templates.choice(data);

                        this.choiceContainer.append(choice);

                        this.updateAddMoreChoice();
                    },

                    getNewChoiceId: function() {

                        if (this.options.data.length === 0) return 1;

                        var choice = _.maxBy(this.options.data, "id");

                        return choice.id + 1;
                    },

                    getConfigForHTML: function() {

                        return {
                            enable_scoring: this.options.scoring === "yes",
                            unique_id: this.options.unique_id
                        };

                    },

                    getChoices: function() {

                        var choices = [],
                            $this = this;

                        this.choiceContainer.find("[data-role='choice-item']").each(function() {

                            var value, score = null,
                                uniqueid, correct, choice = {};

                            value = $(this).find("[data-name='choice']").val();

                            uniqueid = parseInt($(this).find("[data-name='uniqueid']").val());

                            correct = $(this).find("[type='checkbox']").is(":checked");
                            choice.correct = correct;

                            if ($this.options.scoring === "yes") {
                                score = $(this).find("[data-name='score']").val() === "" ? "" : parseInt($(this).find("[data-name='score']").val());
                                choice.score = score;
                            }

                            choice.title = value;
                            choice.id = uniqueid;

                            choices.push(choice);

                        });

                        return choices;

                    },

                    val: function() {

                        var choices = this.getChoices(),
                            errors = this.validate(choices);

                        if (errors.length === 0) {
                            return choices;

                        } else {
                            return new Error(errors);
                        }

                    },

                    getChoiceHtml: function(choice) {

                        var choiceHtml = "";

                        var data = $.extend(this.getConfigForHTML(), choice);

                        choiceHtml += this.options.templates.choice(data);

                        return choiceHtml;

                    },

                    updateAddMoreChoice: function() {

                        if (this.options.max_no_of_chocies <= this.options.data.length) {
                            this.addMoreChoice.hide();
                        } else {
                            this.addMoreChoice.show();
                        }

                    },

                    validate: function(choices) {

                        var error = [];

                        // #1 Choices must not be empty
                        if (choices.length === 0) {
                            error.push("Please enter your choices");
                        } else if (this.options.min_no_of_choices > choices.length) {
                            error.push("Minimum of " + this.options.min_no_of_choices.toString() + " choices is required");
                        }

                        var emptyChoices = choices.filter(function(i) {
                            return i.title.trim() === "";
                        });
                        // #2 Choices must not have empty string
                        if (emptyChoices.length > 0) {
                            error.push("Choice must not be empty");
                        }

                        // #3 no of choices should not exceed the given count
                        if (this.options.max_no_of_chocies < choices.length) {
                            error.push("Maximum of " + 5 + " choices can be added for a question");
                        }


                        // #4 Scores must be a valid integer
                        if (this.options.scoring === "yes") {
                            for (var i = 0; i < choices.length; i++) {
                                var score = choices[i].score;

                                if (score === "" || score === undefined || score === null) {
                                    error.push("Please enter the score");
                                    break;
                                }
                                if (isNaN(score)) {
                                    error.push("Score must be an integer");
                                    break;
                                }
                            }
                        }

                        return error;

                    },

                    destroy: function() {

                        this.element.html("");

                        var pluginName = this.element.data("pluginName");

                        // this will remove all the data attributes
                        this.element.removeData([pluginName, "name", "value"]);

                    }

                };

                var PluginInit = function(pluginName, options) {

                    this.name = pluginName;
                    this.options = options;

                    var that = this;

                    this.init = function() {

                        var element = $(this);

                        // return by doing nothing, if the plugin is already binded to the dom
                        if (element.data(that.name)) {
                            return;
                        }

                        var checkbox = new Checkbox(element, that.options);

                        element.data("pluginName", that.name);
                        element.data(that.name, checkbox); // this object can be further accessed to communicate to the plugin
                    };

                };


                $.fn.qbCheckbox = function(options) {

                    var object = new PluginInit("qbCheckbox", options);

                    return this.each(object.init);

                };

                $.fn.qbRadiobutton = function(options) {

                    var object = new PluginInit("qbRadiobutton", options);

                    return this.each(object.init);

                };





            })();;
            (function() {

                var plugin = "dwToggle";

                function Toggle(element, options) {

                    this.element = $(element);
                    this.showMainView();
                }

                Toggle.prototype.showMainView = function() {

                    var div1 = this.element.find("[data-view]:first"),
                        div2 = this.element.find("[data-view]:last");

                    div2.hide();
                    div1.show();

                    this.element.attr("data-active", false);
                };

                Toggle.prototype.toggle = function() {
                    var firstView = this.element.find("[data-view]:first"),
                        lastView = this.element.find("[data-view]:last");

                    var activeView = null;


                    if (firstView.is(":visible")) {
                        firstView.hide();
                        lastView.show();
                        this.element.attr("data-active", true);
                        activeView = lastView;
                    } else {
                        firstView.show();
                        lastView.hide();
                        this.element.attr("data-active", false);
                        activeView = firstView;
                    }

                    return this;

                };



                $.fn[plugin] = function(options) {

                    return this.each(function() {

                        var element = $(this);

                        if (element.data(plugin)) {
                            return;
                        }

                        var toggle = new Toggle(element, options);

                        element.data(plugin, toggle);

                    });

                };

            })();;
            (function() {

                $("body").on("keydown keyup", "textarea", function() {

                    if (this.clientHeight < this.scrollHeight) $(this).height(this.scrollHeight);

                });

                $.widget("dw.questionbuilder", {

                    choiceType: "",

                    options: {

                        data: null,

                        selectors: {

                            choiceSection: '[data-section="choice"]',
                            scoringSection: '[data-section="scoring"]',
                            taggingSection: '[data-section="tagging"]',

                            choiceTypes: '[data-name="choice-types"]',
                            questionScore: '[data-name="question-score"]',
                            questionTitle: '[data-name="title"]',
                            scoringMethod: '[data-name="scoring-method"]',

                            required: '[data-name="required"]',
                            shuffle: '[data-name="shuffle"]'

                        },

                        // choices
                        add_more_choice: "yes",
                        max_no_of_chocies: 10
                    },


                    _create: function() {

                        this.options = $.extend({}, $.dw.base_configurations, this.options);

                        this._bind();

                    },

                    _hideScore: function() {
                        if (this.options.data) {}

                        if (!this.options.scoring_configuration) {
                            this.element.find(this.options.selectors.scoringSection).hide();
                        } else {
                            this.options.data.scoringAt = this.options.data.scoringAt || this.options.scoring_configuration.scoring_at[0].value;
                            this.element.find("[data-name='scoring-method']").val(this.options.data.scoringAt).trigger("change");
                        }
                    },


                    _hideTags: function() {
                        var $this = this;

                        if (this.options.tagging === "no") {
                            this.element.find(this.options.selectors.taggingSection).hide();
                        } else {

                            var element = this.element.find("[data-name='tags']")[0];

                            this.tag = new Choices(element, {
                                placeholder: true,
                                placeholdervalue: "Type the tag name and press 'Enter'"
                            }).ajax(function(callback) {

                                var source = _.map($this.options.tags, function(tag) {
                                    return {
                                        title: tag
                                    };
                                });

                                callback(source, "title", "title");
                            });
                        }
                    },


                    _init: function() {

                        this.element.html("");

                        // create a default object if the data has not be passed; and when ever the ui changes, update this data object
                        // hence we need not have to create lot of private variables in the "this" 
                        this.options.data = this.options.data || {};

                        var html = window.dw.templates.questioneditor(this.options);

                        this.element.html(html);

                        // Scoring Section 
                        if (!this.options.scoring_configuration) {
                            this.element.find(this.options.selectors.scoringSection).hide();
                        } else {
                            this.options.data.scoringAt = this.options.data.scoringAt || this.options.scoring_configuration.scoring_at[0].value;
                            this.element.find("[data-name='scoring-method']").val(this.options.data.scoringAt).trigger("change");

                            this.element.find("[name='rhetorical-question']").prop("checked", this.options.data.rhetorical);
                        }

                        this._hideTags();

                        if (this.options.data && this.options.data.choiceType)
                            this.element.find("[data-name='choice-types']").val(this.options.data.choiceType).trigger("change");

                        this._bindData();
                    },


                    _bind: function() {

                        this._on(this.element, {

                            'change [data-name="choice-types"]': this._onchoiceTypeChanges,

                            'click [data-name="save-question"]': this._saveQuestion,

                            'change [data-name="scoring-method"]': this._onScoringAtChanges,

                            'click [data-name="cancel-question"]': this._cancelChanges,

                            'click [name="rhetorical-question"]': this._markQuestionAsRhetorical

                        });

                    },

                    _markQuestionAsRhetorical: function(event) {

                        this.options.data.rhetorical = $(event.target).is(":checked");
                    },

                    _cancelChanges: function(event) {
                        event.preventDefault();

                        this._trigger("savequestioncancelled", this);

                    },

                    _onScoringAtChanges: function(event) {

                        var value = $(event.target).val();

                        if (value === "choice") {
                            this.element.find("[data-section='question-scoring']").hide();
                        } else if (value === "question") {
                            this.element.find("[data-section='question-scoring']").show();
                            this.element.find(this.options.selectors.questionScore).val(this.options.scoring_configuration.default_score);
                        }

                        //if (this.options.data)
                        //this.element.find(this.options.selectors.choiceTypes).val(this.options.data.choiceType);

                        if (this.options.data.scoringAt !== value) {
                            // when set the choicetype to empty, on triggering the change event of choice type dropdown will
                            // make the ui to update.
                            this.options.data.choiceType = "";
                        }

                        this.options.data.scoringAt = value;

                        this.element.find(this.options.selectors.choiceTypes).trigger("change");
                    },



                    _onchoiceTypeChanges: function(event, args) {

                        var choiceType = $(event.target).val();

                        this._rebindChoicePlugin(choiceType);
                    },

                    _rebindChoicePlugin: function(choiceType) {

                        if (this.options.data.choiceType !== choiceType) {
                            this.options.data.choice = null;
                        }

                        this.options.data.choiceType = choiceType;

                        var choice = this.element.find(this.options.selectors.choiceSection);

                        var pluginName = choice.data("pluginName");

                        if (pluginName && choice.data(pluginName))
                            choice.data(pluginName).destroy();

                        choice.data("value", this.options.data.choice);

                        var enableScoringForChoice = "";

                        enableScoringForChoice = (this.options.data.scoringAt === "choice") ? "yes" : "no";

                        var settings = null;

                        switch (this.options.data.choiceType) {
                            case "checkbox":
                                settings = {
                                    name: "qbCheckbox",
                                    add_more_choice: this.options.add_more_choice,
                                    max_no_of_chocies: this.options.max_no_of_chocies,
                                    scoring: enableScoringForChoice
                                };
                                this.choice = choice.qbCheckbox(settings).data("qbCheckbox");
                                break;
                            case "radiobutton":
                                settings = {
                                    name: "qbRadiobutton",
                                    add_more_choice: this.options.add_more_choice,
                                    max_no_of_chocies: this.options.max_no_of_chocies,
                                    scoring: enableScoringForChoice
                                };

                                this.choice = choice.qbRadiobutton(settings).data("qbRadiobutton");
                                break;
                            case "singleline":
                                settings = {
                                    fieldformat: "number",
                                    maximumlength: 10,
                                    id: 1
                                };
                                this.choice = choice.qbSingleLine(settings).data("qbSingleLine");
                                break;
                            default:
                                settings = {
                                    fieldformat: "freetext",
                                    maximumlength: 10,
                                    id: 1
                                };
                                this.choice = choice.qbMultiLine(settings).data("qbMultiLine");
                                break;
                        }

                    },


                    _saveQuestion: function() {

                        var question = {};

                        question.id = this.options.data ? this.options.data.id : 1;

                        question.required = this.element.find("[data-name='required']").is(":checked");
                        question.randomizeChoice = this.element.find("[data-name='shuffle']").is(":checked");
                        question.title = this.element.find("[data-name='title']").val();
                        question.choiceType = this.element.find("[data-name='choice-types']").val();

                        if (this.options.scoring_configuration) {
                            // "scoringMethod" value should be retrieved from the new ui control that we are going to add later
                            question.scoringAt = this.options.data.scoringAt;
                            question.score = question.scoringAt === "question" ?
                                parseInt(this.element.find("[data-name='question-score']").val() || 0) : null;
                        }

                        question.rhetorical = this.options.data.rhetorical;


                        var choice = this.choice.val();

                        if (choice instanceof Error) { /* show this error in the page  */
                            return;
                        } else {
                            question.choice = choice;
                        }

                        if (this.options.tagging === "yes")
                            question.tags = this.tag.getValue(true);

                        console.group("Question Builder Result"); /* RemoveLogging:skip */
                        console.log(question); /* RemoveLogging:skip */
                        console.groupEnd("Question Builder Result"); /* RemoveLogging:skip */

                        this._trigger("savequestion", this, {
                            data: question
                        });

                        //this.element.closest("[data-role='toggle']").data("dwToggle").toggle();
                    },



                    _bindData: function() {

                        if (this.options.data) {

                            var question = this.options.data,
                                selectors = this.options.selectors;

                            //this.element.find(selectors.choiceSection).data("value", question.choices);

                            this.element.find(selectors.questionTitle).val(question.title);

                            /*if (question.scoringAt)
                                this.element.find(selectors.scoringMethod).val(question.scoringAt).trigger("change");*/

                            //this.element.find(selectors.choiceTypes).val(question.choiceType).trigger("change");

                            if (question.scoringAt === "question") {
                                this.element.find(selectors.questionScore).val(question.score);
                            }

                            if (question.tags && question.tags.length > 0) {
                                // set the tags
                            }

                            this.element.find(selectors.required).prop("checked", question.required);
                            this.element.find(selectors.shuffle).prop("checked", question.randomizeChoice);

                        }
                    }
                });






            })();;
            (function() {

                "use strict";

                $.fn.arrangeActionButtons = function() {



                    var first = this.find("[data-name='question-shell']:first"),
                        last = this.find("[data-name='question-shell']:last");

                    this.find("[data-name='question-shell']").each(function() {
                        $(this).find("[data-action]").each(function() {
                            $(this).closest("li").show();
                        });
                    });


                    first.find("[data-action='moveup']").closest("li").hide();
                    last.find("[data-action='movedown']").closest("li").hide();




                };

            })();;
            (function() {

                "use strict";


                function SingleLine(element, options) {

                    options = options || {};

                    var defaults = {
                        supported_formats: [{
                            title: "Free Text",
                            value: "freetext"
                        }, {
                            value: "number",
                            title: "Number"
                        }, {
                            value: "date",
                            title: "Date"
                        }, {
                            value: "time",
                            title: "Time"
                        }, {
                            value: "email",
                            title: "Email"
                        }]
                    };

                    options = $.extend({}, defaults, $.dw.base_configurations, options);

                    this.options = options;

                    this.element = element;

                    this.element.append(window.dw.templates.singleline({
                        supported_formats: this.options.supported_formats
                    }));

                    this.element.data("pluginName", "qbSingleLine");
                    this.element.data("qbSingleLine", this);

                    this.bind();

                    this.element.find("[data-name='field-format']").trigger("change");

                    this.bindData();

                }


                SingleLine.prototype = {

                    bindData: function() {

                        var value = this.element.data("value");

                        if (!value) return;

                        this.element.find("[data-name='field-format']").val(value.fieldformat).trigger("change");
                        this.element.find("[data-name='max-len']").val(value.maximumlength);
                    },

                    bind: function() {

                        this.element.find("[data-name='field-format']").on("change", this.onFieldFormatChanged);

                    },


                    onFieldFormatChanged: function(event) {

                        var element = $(event.target);

                        var container = element.closest("[data-role='single-line']");

                        var pluginName = container.data("pluginName");

                        var singleLine = container.data(pluginName);

                        singleLine.changeFormat(element.val());

                    },

                    changeFormat: function(format) {

                        switch (format) {
                            case "freetext":
                                this.showMaxlength(true);
                                break;
                            case "number":
                                this.showMaxlength(true);
                                break;
                            case "date":
                                this.showMaxlength(false);
                                break;
                            case "time":
                                this.showMaxlength(false);
                                break;
                            case "email":
                                this.showMaxlength(true);
                                break;
                            default:
                                break;
                        }
                    },

                    showMaxlength: function(args) {

                        if (!args)
                            this.element.find("[data-section='max-len']").hide();
                        else
                            this.element.find("[data-section='max-len']").show();

                    },

                    val: function() {

                        var format = this.element.find("[data-name='field-format']").val();

                        var maximumlength = null;

                        if (this.element.find("[data-name='max-len']").val())
                            maximumlength = parseInt(this.element.find("[data-name='max-len']").val());

                        return {
                            id: 1,
                            fieldformat: format,
                            maximumlength: maximumlength
                        };

                    },

                    destroy: function() {

                        this.element.html("");

                        var pluginName = this.element.data("pluginName");

                        // this will remove all the data attributes
                        this.element.removeData([pluginName, "name", "value"]);

                    }


                };


                $.fn.qbSingleLine = function(element, options) {

                    return this.each(function() {

                        var element = $(this);

                        // return by doing nothing, if the plugin is already binded to the dom
                        if (element.data("qbSingleLine")) {
                            return;
                        }

                        options = options || {};

                        element.attr("data-role", "single-line");

                        new SingleLine(element, options);

                        //element.data("pluginName", "qbSingleLine");
                        //element.data("qbSingleLine", singleLine); // this object can be further accessed to communicate to the plugin

                    });

                };

                /*
                    $("#choices").qbSingleLine();


                    $("#getValues").on("click", function(event) {

                        var api = $("#choices").data("qbSingleLine");

                    });

                */

                $.fn.basicInput = function() {

                    var putMaxLengthLabel = function(e) {

                        var label = $("<label>").text("Max Char: {0}".replace(/\{0\}/, $(e).data("max-len")));

                        label.insertAfter($(e));
                    };

                    this.each(function() {

                        $.each($(this).find("[data-role='freetext']"), function(i, e) {
                            putMaxLengthLabel(e);
                            $(e).removeAttr("data-role");
                        });

                        $.each($(this).find("[data-role='number']"), function(i, e) {

                            $(e).attr("type", "number");

                            putMaxLengthLabel(e);
                            $(e).removeAttr("data-role");

                        });


                        $.each($(this).find("[data-role='date']"), function(i, e) {

                            $(e).attr("type", "date");
                            $(e).removeAttr("data-role");

                        });

                        $.each($(this).find("[data-role='email']"), function(i, e) {

                            $(e).attr("placeholder", "Email: someone@domain.com");

                            putMaxLengthLabel(e);
                            $(e).removeAttr("data-role");

                        });


                        $.each($(this).find("[data-role='richtext']"), function(i, e) {

                            $(e).attr("placeholder", "HTML Content is allowed");

                            $(e).removeAttr("data-role");

                        });


                    });
                };



                //$("[data-section='single-line']").basicInput();





            })();;
            (function() {

                "use strict";


                function MultiLine(element, options) {

                    options = options || {};

                    var defaults = {
                        supported_formats: [{
                            title: "Free Text",
                            value: "freetext"
                        }, {
                            value: "richtext",
                            title: "Rich Text"
                        }]
                    };

                    options = $.extend({}, defaults, $.dw.base_configurations, options);

                    this.options = options;

                    this.element = element;

                    this.element.append(window.dw.templates.multiline({
                        supported_formats: this.options.supported_formats
                    }));

                    this.element.data("pluginName", "qbMultiLine");
                    this.element.data("qbMultiLine", this);

                    this.bind();

                    this.element.find("[data-name='field-format']").trigger("change");

                    this.bindData();

                }


                MultiLine.prototype = {

                    bindData: function() {

                        var value = this.element.data("value");

                        if (!value) return;

                        this.element.find("[data-name='field-format']").val(value.fieldformat).trigger("change");
                        this.element.find("[data-name='max-len']").val(value.maximumlength);
                    },

                    bind: function() {

                        this.element.find("[data-name='field-format']").on("change", this.onFieldFormatChanged);

                    },

                    onFieldFormatChanged: function(event) {

                        var element = $(event.target);

                        var container = element.closest("[data-role='multi-line']");

                        var pluginName = container.data("pluginName");

                        var multiLine = container.data(pluginName);

                        multiLine.changeFormat(element.val());

                    },

                    changeFormat: function(format) {
                        switch (format) {
                            case "freetext":
                                this.showMaxlength(true);
                                break;
                            case "richtext":
                                this.showMaxlength(false);
                                break;
                            default:
                                break;
                        }
                    },

                    showMaxlength: function(args) {

                        if (!args)
                            this.element.find("[data-section='max-len']").hide();
                        else
                            this.element.find("[data-section='max-len']").show();

                    },

                    val: function() {

                        var format = this.element.find("[data-name='field-format']").val();

                        var maximumlength = null;

                        if (this.element.find("[data-name='max-len']").val())
                            maximumlength = parseInt(this.element.find("[data-name='max-len']").val());

                        return {
                            id: 1,
                            fieldformat: format,
                            maximumlength: maximumlength
                        };

                    },

                    destroy: function() {

                        this.element.html("");

                        var pluginName = this.element.data("pluginName");

                        // this will remove all the data attributes
                        this.element.removeData([pluginName, "name", "value"]);

                    }

                };

                $.fn.qbMultiLine = function(element, options) {

                    return this.each(function() {

                        var element = $(this);

                        // return by doing nothing, if the plugin is already binded to the dom
                        if (element.data("qbMultiLine")) {
                            return;
                        }

                        options = options || {};

                        element.attr("data-role", "multi-line");

                        new MultiLine(element, options);

                    });

                };



            })();;
            (function() {

                var factory = window.assessmentbuilder.factory;


                $.widget("dw.shell", {


                    options: {

                        title: "Health Assessment", // wizard title

                        description: "A Basic health assessment", // wizard description

                        // load the different plugins based on the question types needed for the wizard
                        allowed_choice_types: [{
                            title: "Multiple Choice",
                            value: "checkbox"
                        }, {
                            title: "Single Choice",
                            value: "radiobutton"
                        }, {
                            title: "Single Line",
                            value: "singleline"
                        }, {
                            title: "Multie Line",
                            value: "multiline"
                        }, ],

                        // the default questions will be of this choice type. 
                        default_choice_type: "checkbox",

                        tagging: "yes", // enables the ui to tag questions with the given tags

                        tags: ["depression", "anxiety"], // tags which can be added to a question


                        /* only the allowed options will be enabled in the UI. leave it as empty to allow all the possible options
                         * like "edit", "delete", "insert", "move"
                         */
                        allowed_options: ["edit", "delete"],

                        // if "yes", a feedback message will be shown to the user after completing the assessment
                        feedback: "yes",

                        // if feedback option is enabled, this messgae will be used to show the feedback.
                        feedback_message: "Thank you for participating!"

                    },

                    datasource: [],

                    _create: function() {

                        this.options = $.extend($.dw.base_configurations, this.options);

                        this.datasource = this.options.datasource;

                        this._bind();

                        var html = window.dw.templates.shell({
                            title: this.options.title,
                            description: this.options.description
                        });

                        this.element.append(html);

                        if (this.options.datasource.length === 0)
                            this._initialSetup();
                        else
                            this._bindData();

                        if (this.options.feedback === "no")
                            this.element.find("[data-section='feedback']").hide();
                        else
                            this.element.find("[data-name='feedback-message']").val(this.options.feedback_message);

                        if (!this.options.scoring_configuration) {
                            this.element.find("[data-section='scoring-method']").remove();
                        } else {
                            var _selector = "[data-section='scoring-method'] [name='scoring-method'][value='{0}']".replace(/\{0\}/, this.options.scoring_configuration.default_scoring_method);
                            this.element.find(_selector).prop("checked", true);
                        }

                        if (this.options.enable_retake === "no") {
                            this.element.find("[data-section='retake']").remove();
                        } else {
                            this.element.find("[data-section='retake'] [data-name='retake']").val(this.options.retake_limit);
                        }

                        this.reload();

                    },

                    _getNewQuestion: function(choiceType) {
                        var question = factory.questionFactory(choiceType, this.options);
                        return question;
                    },

                    _initialSetup: function() {
                        var html = "";
                        var question = this._getNewQuestion(this.options.default_choice_type);
                        this.datasource.push(question);
                        html = factory.renderEngine(question);
                        this._addQuestion(html);
                    },

                    // initialize all your plugins here
                    reload: function() {
                        this.element.find("[data-role='toggle']").dwToggle();
                        this.element.find("[data-section='body']").arrangeActionButtons();
                        this.element.find("[data-role='singleline-question']").basicInput();
                        this.element.find("[data-role='multiline-question']").basicInput();
                    },

                    // in edit mode, present the data at first
                    _bindData: function() {
                        var html = "";
                        for (var i = 0; i < this.datasource.length; i++) {
                            html += factory.renderEngine(this.datasource[i]);
                        }
                        this._addQuestion(html);
                    },


                    _init: function() {


                    },


                    _bind: function() {

                        this._on(this.element, {

                            "click [data-action='edit']": this._editQuestion,

                            "click [data-action='insert']": this._insertQuestion,

                            "click [data-action='delete']": this._deleteQuestion,

                            "click [data-action='moveup']": this._moveUp,

                            "click [data-action='movedown']": this._moveDown,

                            "click [data-action='save']": this.save,

                            "click [data-action='cancel']": this._cancel,

                            "click [data-action='feedback']": this._feedback,

                            "click [data-action='save-feedback']": this._saveFeedback,

                            "click [data-section='scoring-method'] [name='scoring-method']": this._onScoringMethodChanged,

                            "questionbuildersavequestion  [data-container='edit']": this._onQuestionSaved,

                            "questionbuildersavequestioncancelled [data-container='edit']": this._onQuestionEditCancelled

                        });

                    },

                    _onScoringMethodChanged: function(event) {

                        this.options.scoring_configuration.default_scoring_method = $(event.target).val();

                    },

                    _feedback: function(element) {

                        var section = $(element.target).closest("[data-section='feedback']");

                        var feedbackArea = section.find("[data-section='feedback-form']");

                        feedbackArea.show();

                    },

                    _saveFeedback: function(element) {

                        var feedbackform = $(element.target).closest("[data-section='feedback-form']");

                        var feedbackMessage = feedbackform.find("[data-name='feedback-message']").val();

                        this.options.feedback_message = feedbackMessage;

                        feedbackform.hide();

                    },

                    save: function(event) {
                        event.preventDefault();

                        var assessment = {
                            title: this.options.title,
                            description: this.options.description,
                            questions: this.datasource,
                            retake: this._getRetakeLimit(),
                            feedbackMessage: this.options.feedback_message,
                        };

                        $.extend(assessment, this._getScoringMethod());

                        $(window).trigger("assessmentbuilder:save", {
                            data: assessment
                        });

                    },

                    _getScoringMethod: function() {

                        if (this.options.scoring_configuration)
                            return {
                                scoringMethod: this.element.find("[data-section='scoring-method'] [name='scoring-method']:checked").val()
                            };
                        else
                            return {};

                    },

                    _getRetakeLimit: function() {
                        var retakeLimit = this.options.retake_limit;

                        if (this.options.enable_retake === "yes") {
                            retakeLimit = this.element.find("[data-name='retake']").val();
                        }

                        return parseInt(retakeLimit);
                    },

                    _cancel: function(event) {
                        event.preventDefault();

                    },

                    _moveUp: function(event) {
                        event.preventDefault();

                        var $element = $(event.target);
                        var questionId = this._getQuestionId($element);

                        var question = _.find(this.datasource, {
                            "id": questionId
                        });

                        var index = _.findIndex(this.datasource, question);

                        if (index > 0) {
                            var previousQuestion = this.datasource[index - 1];

                            this.datasource.splice(index, 1);
                            this.datasource.splice(index - 1, 0, question);
                            this._removeQuestionFromDOM(question);

                            var questionDOM = this._getQuestionDOM(previousQuestion.id);

                            var html = factory.renderEngine(question);
                            html = $(html);
                            html.insertBefore(questionDOM);

                            this.reload();
                        }

                    },

                    _removeQuestionFromDOM: function(question) {
                        var questionselector = "[data-name='question-shell'][data-qid='{0}']";
                        var questionDOM = this.element.find(questionselector.replace(/\{0\}/, question.id));
                        questionDOM.remove();
                    },



                    _moveDown: function(event) {
                        event.preventDefault();

                        var $element = $(event.target);
                        var questionId = this._getQuestionId($element);

                        var question = _.find(this.datasource, {
                            "id": questionId
                        });


                        var index = _.findIndex(this.datasource, question);

                        if (index <= this.datasource.length - 2) {

                            var nextQuestion = this.datasource[index + 1];

                            this.datasource.splice(index, 1);

                            this.datasource.splice(index + 1, 0, question);
                            this._removeQuestionFromDOM(question);

                            var questionDOM = this._getQuestionDOM(nextQuestion.id);

                            var html = factory.renderEngine(question);
                            html = $(html);
                            html.insertAfter(questionDOM);
                            this.reload();
                        }

                    },

                    _editQuestion: function(event) {

                        _.forEach(this.datasource, function(q) {
                            q.edit = false;
                        });

                        var $element = $(event.target);

                        var questionId = this._getQuestionId($element);

                        var question = _.find(this.datasource, {
                            "id": questionId
                        });

                        question.edit = true;

                        this._prepareQuestionEditor($element);

                    },

                    _deleteQuestion: function(event) {

                        if (this.datasource.length === 1) return;

                        var $element = $(event.target);

                        var questionId = this._getQuestionId($element);

                        var question = _.remove(this.datasource, function(q) {
                            return q.id === questionId;
                        });

                        var questions = this.element.find("[data-name='question-shell']");

                        question = _.find(questions, function(obj) {
                            return $(obj).data("qid") === questionId;
                        });

                        question.remove();

                        this.reload();

                    },

                    _insertQuestion: function(event) {

                        if (this.options.maximum_no_of_questions_allowed !== -1 &&
                            this.options.maximum_no_of_questions_allowed <= this.datasource.length) return;

                        var $element = $(event.target);

                        var questionId = this._getQuestionId($element);

                        var index = _.findIndex(this.datasource, {
                            id: questionId
                        });

                        var question = this._getNewQuestion(this.options.default_choice_type);

                        question.id = this._getNewQuestionId();

                        // Push the question in the specified index.
                        this.datasource.splice(index + 1, 0, question);

                        var html = factory.renderEngine(question);

                        html = $(html);

                        var currentQuestion = this._getQuestionDOM(questionId);

                        html.insertAfter(currentQuestion);

                        this.reload();

                    },

                    _getQuestionDOM: function(questionId) {

                        var currentQuestion = _.find(this.element.find("[data-name='question-shell']"), function(q) {
                            return $(q).data("qid") === questionId;
                        });

                        return currentQuestion;
                    },

                    _getNewQuestionId: function() {

                        var question = _.maxBy(this.datasource, function(q) {
                            return q.id;
                        });

                        return question.id + 1;
                    },


                    _getQuestionId: function(element) {

                        var container = element.closest("[data-container='question']");

                        var questionId = parseInt(container.data("value"));

                        return questionId;

                    },

                    _saveQuestion: function(event) {

                        var $element = $(event.target);

                        var editView = $element.closest("[data-role='toggle']").data("dwToggle").toggle();
                    },

                    _onQuestionSaved: function(event, args) {

                        //_.forEach(this.datasource, function(q){ q.edit = false; });

                        this._replaceWithNewView(args.data);
                    },

                    _onQuestionEditCancelled: function(event, args) {

                        var question = _.find(this.datasource, {
                            edit: true
                        });

                        //this.datasource.splice(index, 1, question);

                        var html = factory.renderEngine(question);

                        var questionToReplace = this.element.find("[data-name='question-shell'][data-qid='" + question.id + "']");

                        questionToReplace.replaceWith($(html));

                        this.reload();

                    },

                    _replaceWithNewView: function(question) {

                        var index = _.findIndex(this.datasource, _.find(this.datasource, {
                            id: question.id
                        }));

                        this.datasource.splice(index, 1, question);

                        var html = factory.renderEngine(question);

                        var questionToReplace = this.element.find("[data-name='question-shell'][data-qid='" + question.id + "']");

                        questionToReplace.replaceWith($(html));

                        this.reload();

                    },

                    _updateQuestion: function(html) {


                    },

                    _prepareQuestionEditor: function(element) {

                        var question = _.find(this.datasource, "edit");

                        var toggler = element.closest("[data-role='toggle']"),
                            container = element.closest("[data-container='question']");
                        var editView = toggler.find("[data-view]:last");

                        var config = {};

                        config.data = JSON.parse(JSON.stringify(question));

                        editView.find("[data-container='edit']").questionbuilder(config);

                        toggler.data("dwToggle").toggle();
                    },

                    _addQuestion: function(html) {
                        this.element.find("[data-section='body']").append(html);
                    }

                });





            })();
        });
    }
})();