(function(){

    angular
        .module("demoQuiz")
        .controller("controladorPadre", ['$scope', 'quizMetrics', 'DataService',
            function($scope){
            $scope.$on('algunEvento', function (evt, args) {
                console.log("mensaje emitido!");
            });
        }])

        .controller('resultsCtrl', ['$scope', 'quizMetrics', 'DataService',
            function($scope, quizMetrics, DataService){
                $scope.prueba = quizMetrics.opcionUno();



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
            var dq = this;

            dq.quizMetrics = quizMetrics;
            dq.dataService = DataService;
            dq.getAnswerClass = getAnswerClass;
            dq.ponerPreguntaActiva = ponerPreguntaActiva;
            dq.reset = reset;
            dq.calcularPorcentaje = calcularPorcentaje;
            dq.preguntaActiva = 0;
            dq.$scope = $scope;


            $scope.emitMessage = function () {
                $scope.$emit('algunEvento', { message: 'Mensaje Emitido!' });
            }
            
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

        }]);

})();