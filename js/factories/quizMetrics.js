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

            function opcionUno(onSuccess) {

                if (quizObj.numCorrect >= 5) {
                    onSuccess("Tienes al menos 5 respuestas correctas");
                }
                else if (quizObj.numCorrect >= 4) {
                    onSuccess("Tienes al menos 4 respuestas corretas");
                }
                else if (quizObj.numCorrect >= 3) {
                    onSuccess("Tienes al menos 3 respuestas corretas");
                }
                else if (quizObj.numCorrect >= 2) {
                    onSuccess("Tienes al menos 2 respuestas corretas");
                }
                else if (quizObj.numCorrect >= 1) {
                    onSuccess("Tienes al menos 1 respuesta correcta");
                }
                else {
                    onSuccess("Lo siento, no tienes ninguna respuesta correcta");
                }

            }

        }

        /*
         quizObj.respOpcionUno = DataService.respOpcionUno;
         */

})();