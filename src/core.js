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
            title: "Multie Line",
            value: "multiline"
        }],

        // the default questions will be of this choice type. 
        default_choice_type: "checkbox",

        minimum_no_of_questions_required: 1, // specifies the minimum no of questions required. Default is "1"

        maximum_no_of_questions_allowed: 10, // specifies the maximum allowed question. Default is "10"

        scoring: "yes", // "yes" if scoring is required, else "no"; this also enables the section to passing score, feedback, scoring method

        default_score: 1, // default score for each question

        negative_score: "yes", // enables the ui to enter negative scores 

        import_questions: "yes", // allows the author to import questions from other sources like an existing wizard / a default template

        /* if "yes" by default the required option will be checked and readonly. if no, it will be unchecked and readonly. leave it as null ( default ) to allow the author 
         * to decide on that.
         */
        all_mandatory_questions: "yes",

        repeat: "custom", // enables options to allow the author to choose the value for repeat / also accepts an integer value that represents the no of retakes

        tagging: "yes", // enables the ui to tag questions with the given tags

        tags: ["depression", "anxiety"], // tags which can be added to a question

        allowed_scoring_methods: [{
            title: "Question",
            value: "question"
        }, {
            title: "Choice",
            value: "choice"
        }], // enables the ui to add scores either on question / choices

        default_scoring_method: "question",

        /* only the allowed options will be enabled in the UI. leave it as empty to allow all the possible options
         * like "edit", "delete", "insert", "move"
         */
        allowed_options: ["edit", "delete"],

        // this is a default question which will appear when user clicks on insert button
        default_question: "Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey.",

        default_choice: "Untitled Choice {0}",

        datasource: []


    };



})();