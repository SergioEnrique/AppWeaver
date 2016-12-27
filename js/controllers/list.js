(function () {

    angular
        .module("demoQuiz")
        .controller("listCtrl", ListController);

        ListController.$inject = ["quizMetrics", 'DataService'];

        function ListController (quizMetrics, DataService) {
            var dq = this;

            dq.quizMetrics = quizMetrics;
            dq.activarQuiz = activarQuiz;

            function activarQuiz() {
                quizMetrics.changeState("quiz", true);
            }
        }

})();