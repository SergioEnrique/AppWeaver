(function () {

    angular
        .module("demoQuiz")
        .factory("quizMetrics", QuizMetrics);

        QuizMetrics.$inject = ['DataService'];
    
        function QuizMetrics(DataService) {
            var quizObj = {
                quizActivo: false,
                resultadosActivos: false,
                changeState: changeState,
                respuestasCorrectas: [],
                respOpcionUno: [],
                markQuiz: markQuiz,
                numCorrect: 0,
                opcionUno: opcionUno

            };

            return quizObj;

            function changeState(metric, state) {
                if(metric === "quiz") {
                    quizObj.quizActivo = state;
                }else if(metric === "results") {
                    quizObj.resultadosActivos = state;
                }else {
                    return false;
                }
            }
            
            function markQuiz() {
               quizObj.respuestasCorrectas = DataService.respuestasCorrectas;
               for(var i = 0; i < DataService.preguntasQuiz.length; i ++) {
                   if(DataService.preguntasQuiz[i].selected === DataService.respuestasCorrectas[i]){
                       DataService.preguntasQuiz[i].correct = true;
                       quizObj.numCorrect++;
                   }else {
                       DataService.preguntasQuiz[i].correct = false;
                   }
                }
            }

            var uno;

            function opcionUno() {
                if (quizObj.numCorrect > 5) {
                    uno = "Imprimiendo texto.";
                }
            }

        }

        /*
         quizObj.respOpcionUno = DataService.respOpcionUno;
         */

})();