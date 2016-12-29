(function(){

    angular
        .module("demoQuiz")
        .controller("controladorPadre", ['$scope', 'quizMetrics', 'DataService',
            function($scope, quizMetrics, DataService){
            
            $scope.$on('resultadosEnviados', function (evt, args) {
                console.log('Ya se enviaron los resultados');
                $scope.$broadcast('mostrarResultados');
            });

        }])

        .controller('resultsCtrl', ['$scope', 'quizMetrics', 'DataService',
            function($scope, quizMetrics, DataService){



            /*quizMetrics.respOpcionUno = DataService.respOpcionUno;
                if (quizMetrics.numCorrect > 5) {
                    console.log("tuve más de 5 correctas");
                }
                $scope.resultadosDelUsuario = quizMetrics.opcionUno();*/
            }
        ])

        /*ResultadosController.$inject = ['quizMetrics', 'DataService']*/

        .controller("resultadosCtrl", ['quizMetrics', 'DataService', '$scope',
            function (quizMetrics, DataService, $scope){

            $scope.$on('mostrarResultados', function (evt, args) {
                console.log('Ya se deben mostrar los resultados en pantalla');
                quizMetrics.opcionUno(function(texto) {
                    $scope.texto = texto
                    console.log('Respuestas Correctas: ', quizMetrics.respuestasCorrectas)
                })
            });

            var dq = this;

            dq.quizMetrics = quizMetrics;
            dq.dataService = DataService;
            dq.getAnswerClass = getAnswerClass;
            dq.ponerPreguntaActiva = ponerPreguntaActiva;
            dq.reset = reset;
            dq.calcularPorcentaje = calcularPorcentaje;
            dq.preguntaActiva = 0;
            dq.$scope = $scope;
            
            function calcularPorcentaje() {
                return quizMetrics.numCorrect / DataService.preguntasQuiz.length * 100;
            }
            
            function ponerPreguntaActiva(index) {
                dq.preguntaActiva = index;
            }
            
            function getAnswerClass(index) {
                if(index === quizMetrics.respuestasCorrectas[dq.preguntaActiva]){
                    return "bg-success";
                }else if(index === DataService.preguntasQuiz[dq.preguntaActiva].selected){
                    return "bg-danger";
                }
            }

            function reset() {
                quizMetrics.changeState("results", false);
                quizMetrics.numCorrect = 0;

                for(var i = 0; i < DataService.preguntasQuiz.length; i++){
                    var data = DataService.preguntasQuiz[i];

                    data.selected = null;
                    data.correct = null;
                }
            }

        }])

    .controller("quizCtrl", ["quizMetrics", 'DataService', "$scope",


        /*QuizController.$inject = ["quizMetrics", 'DataService'];*/


        function QuizController(quizMetrics, DataService, $scope) {
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

                console.log('Aquí se emite hacia el controlador padre cuando ya se enviaron las respuestas')
                $scope.$emit('resultadosEnviados');

            }
        }])

})();