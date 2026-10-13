/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */
/*          [DIU] UX Toolkit v1.0 2019     */
/*          ver 1.2 26/Feb/2022            */
/*******************************************/

/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/

angular.module("angular", []).controller("controller", [
  "$scope",
  function ($scope) {
    $scope.Grupo_ID = "DIU1.ABCDEF";
    $scope.Curso = "2021/22";
    $scope.Github_ID = "https://github.com/mgea/UX-DIU-Toolkit";

    $scope.PersonaIndex = 0;
    $scope.Personas = [
        {
            /**** PRIMERA PERSONA: LA COLECCIONISTA ****/
            Id: 0,
            Name: "Elena Navarro",
            Photo: "woman.png",
            Quote: "Coleccionar monturas es mi verdadera pasión en Azeroth. ¡Tengo que conseguirlas todas!",
            Age: 25,
            Occupation: "Estudiante universitaria",
            Family: "Vive con compañeras de piso",
            Location: "Valencia",
            Character: "Organizada, paciente y muy completista con los videojuegos.",
            PersonalityTraits: [
                { Name: "Introvertido/reservado Vs Extrovertido/activo", Value: 3 },
                { Name: "Realista/práctico Vs Intuición/imaginativo", Value: 4 },
                { Name: "Racional/analítico Vs Emocional/impulsivo", Value: 3 },
                { Name: "Flemático/apático Vs Colérico/visceral", Value: 2 }
            ],
            Goals: [
                "Llevar un registro visual de qué monturas y cosméticos le faltan.",
                "Saber rápidamente qué bandas antiguas ya ha limpiado esta semana.",
                "Tener una lista de tareas (To-Do) clara cuando inicia sesión."
            ],
            Frustrations: [
                "Olvidar si ya fue a por la montura de Invencible con su personaje alter.",
                "Tener que usar blocs de notas desordenados para apuntar sus progresos.",
                "Webs de WoW con demasiada información técnica que no le interesa."
            ],
            Bio: "Elena juega a WoW desde hace años, pero no le interesa ser la mejor en combate. Su objetivo es el coleccionismo. Tiene 5 personajes distintos que usa exclusivamente para ir a bandas antiguas y conseguir objetos raros. Necesita una herramienta tipo 'checklist' que se reinicie cada semana.",
            Tech: [
                { Name: "TIC/Internet", Value: 4 },
                { Name: "Móvil", Value: 5 },
                { Name: "RRSS", Value: 4 },
                { Name: "Software", Value: 3 }
            ],
            Contextos: "Utiliza la web en su segundo monitor mientras juega a WoW, para ir marcando lo que consigue en tiempo real.",
            PreferredChannels: [
                { Name: "Publicidad Tradicional", Value: 1 },
                { Name: "Online & Social Media", Value: 5 },
                { Name: "Recomendaciones & sugerencias", Value: 4 },
                { Name: "Persona de confianza (amigos, boca a boca)", Value: 3 }
            ]
        },
        {
            /**** SEGUNDA PERSONA: EL JUGADOR HARDCORE/ALTERS ****/
            Id: 1,
            Name: "Hugo Silva",
            Photo: "man.png",
            Quote: "El tiempo es oro, especialmente cuando tienes que mantener a 4 personajes equipados al máximo.",
            Age: 30,
            Occupation: "Desarrollador de software",
            Family: "Vive con su pareja",
            Location: "Madrid",
            Character: "Analítico, competitivo y enfocado en la optimización del tiempo.",
            PersonalityTraits: [
                { Name: "Introvertido/reservado Vs Extrovertido/activo", Value: 2 },
                { Name: "Realista/práctico Vs Intuición/imaginativo", Value: 5 },
                { Name: "Racional/analítico Vs Emocional/impulsivo", Value: 5 },
                { Name: "Flemático/apático Vs Colérico/visceral", Value: 3 }
            ],
            Goals: [
                "Controlar el progreso semanal de sus 4 personajes (Míticas+, Bandas).",
                "Comprobar fácilmente si le falta alguna actividad antes del reinicio semanal.",
                "Tener un panel de estadísticas detallado."
            ],
            Frustrations: [
                "Tener que depender de hojas de Excel manuales que se quedan desactualizadas.",
                "Olvidar completar una mazmorra con un alter y perder recompensas semanales.",
                "Interfaces de usuario lentas o poco claras."
            ],
            Bio: "Hugo es un raider competitivo. Le gusta el contenido de alto nivel y maneja varios personajes ('alters') para ayudar a su hermandad. Cada semana tiene que hacer un número exacto de actividades con cada uno para maximizar su equipo. Busca una plataforma con un buen dashboard (panel de control) para gestionar todas estas tareas sin perder la cabeza.",
            Tech: [
                { Name: "TIC/Internet", Value: 5 },
                { Name: "Móvil", Value: 4 },
                { Name: "RRSS", Value: 3 },
                { Name: "Software", Value: 5 }
            ],
            Contextos: "Normalmente abre la web los miércoles (día de reinicio en WoW) para planificar todo lo que tiene que hacer esa semana.",
            PreferredChannels: [
                { Name: "Publicidad Tradicional", Value: 1 },
                { Name: "Online & Social Media", Value: 4 },
                { Name: "Recomendaciones & sugerencias", Value: 5 },
                { Name: "Persona de confianza (amigos, boca a boca)", Value: 4 }
            ]
        }
    ];
    $scope.model = $scope.Personas[0];
}]);