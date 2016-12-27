(function(){

    angular
        .module("demoQuiz")
        .factory("DataService", DataService);


    function DataService(){

        var dataObj = {
            preguntasQuiz: preguntasQuiz,
            respuestasCorrectas: respuestasCorrectas,
            respOpcionUno: respOpcionUno
        };
        return dataObj;
    }


    var respuestasCorrectas = [1,2,0,0,0,0,0,0,0,0];

    var respOpcionUno = [1,0,0,0,0,0,0,0,0,0];

    var preguntasQuiz  = [

        {
            type: "text",
            text: "¿Qué tomarías en una mañana lluviosa?",
    posibilidades: [
        {
            respuesta: "Café"
        },
        {
            respuesta: "Té"
        },
        {
            respuesta: "Chocolate caliente"
        },
        {
            respuesta: "Vodka"
        }
    ],
        selected: null,
        correct: null
        },
        {
        type: "text",
            text: "¿Qué prefieres hacer en un fin de semana?",
        posibilidades: [
            {
                respuesta: "Netflix todo el día"
            },
            {
                respuesta: "Comida con tus amigos"
            },
            {
                respuesta: "Exhibición cultural"
            },
            {
                respuesta: "¿Qué es un fin de semana?"
            }
        ],
            selected: null,
        correct: null
        },
        {
            type: "image",
            text: "¿Qué animal tendrías de mascota?",
            posibilidades: [
                {
                    respuesta: "http://nexo-cdn.nexofin.com/archivos/2016/07/tigre.jpg"
                },
                {
                    respuesta: "https://media.apnarm.net.au/img/media/images/2016/05/02/b88110857z1_20160502153202_000ge55bbe13-0-erx6eq7q8wmv56g15m2_fct609x453x93_ct620x465.jpg"
                },
                {
                    respuesta: "http://www.telegraph.co.uk/content/dam/news/2016/08/23/106598324PandawaveNEWS-large_trans++eo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg"
                },
                {
                    respuesta: "http://www.animalesextremos.com/Imagenes/tucan-animal-mas-caro-del-mundo.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "¿En dónde vivirías un mes entero?",
            posibilidades: [
                {
                    respuesta: "Isla"
                },
                {
                    respuesta: "Bosque"
                },
                {
                    respuesta: "Selva"
                },
                {
                    respuesta: "Desierto"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Si pudieras cenar con una persona, ¿con quién sería?",
            posibilidades: [
                {
                    respuesta: "Barack Obama"
                },
                {
                    respuesta: "Steve Jobs"
                },
                {
                    respuesta: "Walt Disney"
                },
                {
                    respuesta: "Sigmund Freud"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Si tuvieras un superpoder ¿cuál sería?",
            posibilidades: [
                {
                    respuesta: "Volar"
                },
                {
                    respuesta: "Invisibilidad"
                },
                {
                    respuesta: "Teletransportación"
                },
                {
                    respuesta: "Visión de Rayos X"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "¿De qué olor disfrutas más?",
            posibilidades: [
                {
                    respuesta: "Tierra mojada"
                },
                {
                    respuesta: "Café recién hecho"
                },
                {
                    respuesta: "Pino de navidad"
                },
                {
                    respuesta: "Pizza recién horneada"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "¿Qué haces en una tarde después de trabajar?",
            posibilidades: [
                {
                    respuesta: "Leer"
                },
                {
                    respuesta: "Dormir"
                },
                {
                    respuesta: "Ejercicio"
                },
                {
                    respuesta: "TV"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "¿Momento favorito del día?",
            posibilidades: [
                {
                    respuesta: "Madrugada"
                },
                {
                    respuesta: "Mañana"
                },
                {
                    respuesta: "Día"
                },
                {
                    respuesta: "Noche"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "¿Tipo de arte favorito?",
            posibilidades: [
                {
                    respuesta: "Literatura"
                },
                {
                    respuesta: "Pintura"
                },
                {
                    respuesta: "Música"
                },
                {
                    respuesta: "Cine"
                }
            ],
            selected: null,
            correct: null
        }

    ];

})();