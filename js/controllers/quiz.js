(function () {

   angular
       .module("demoQuiz")
       .controller("quizCtrl", QuizController);

        QuizController.$inject = ["quizMetrics", 'DataService'];
   
   
        function QuizController(quizMetrics, DataService) {
            var dq = this;

            dq.quizMetrics = quizMetrics;
            dq.dataService = DataService;
            dq.preguntaRespondida = preguntaRespondida;
            dq.ponerPreguntaActiva = ponerPreguntaActiva;
            dq.respuestaSeleccionada = respuestaSeleccionada;
            dq.finalizarRespuestas = finalizarRespuestas;
            dq.preguntaActiva = 0;
            dq.error = false;
            dq.finalizar = false;



            var numPreguntasRespondidas = 0;
            
            function ponerPreguntaActiva(index) {
                if(index === undefined) {
                    var breakOut = false;
                    var quizLength = DataService.preguntasQuiz.length - 1;

                    while(!breakOut){
                        dq.preguntaActiva = dq.preguntaActiva < quizLength?++dq.preguntaActiva:0;

                        if(dq.preguntaActiva === 0) {
                            dq.error = true;
                        }

                        if(DataService.preguntasQuiz[dq.preguntaActiva].selected === null) {
                            breakOut = true;
                        }
                    }
                }else {
                    dq.preguntaActiva = index;
                }
            }
            
            
            function preguntaRespondida() {

                var quizLength = DataService.preguntasQuiz.length;

                if(DataService.preguntasQuiz[dq.preguntaActiva].selected !== null) {
                    numPreguntasRespondidas++;
                    if(numPreguntasRespondidas >= quizLength) {
                        //  Terminar el Quiz
                        for(var i = 0; i < quizLength; i++) {
                            if(DataService.preguntasQuiz[i].selected === null){
                                ponerPreguntaActiva(i);
                                return;
                            }
                        }
                        dq.error = false;
                        dq.finalizar = true;
                        return;
                    }
                }
                dq.ponerPreguntaActiva();
            }
            
            function respuestaSeleccionada(index) {
                DataService.preguntasQuiz[dq.preguntaActiva].selected = index;
            }
            
            function finalizarRespuestas() {
                dq.finalizar = false;
                numPreguntasRespondidas = 0;
                dq.preguntaActiva = 0;
                quizMetrics.markQuiz();
                quizMetrics.changeState("quiz", false);
                quizMetrics.changeState("results", true);
            }
        }

})();