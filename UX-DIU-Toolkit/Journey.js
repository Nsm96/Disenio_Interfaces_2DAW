/*******************************************/
/*              JOURNEY.JS                 */
/*       Datos para USER JOURNEY MAP       */
/*          [DIU] UX Toolkit v1.0 2019     */
/*          ver 1.1 26/Feb/2022            */
/*******************************************/

/**** README:                                  */
/**** Modifica los datos para los Journey Map  */
/**** Uno para cada Persona                    */
/**** Los valores de rating están entre 1..5  */

angular.module("angular", []).controller("controller", [
  "$scope",
  function ($scope) {
    $scope.Grupo_ID = "DAW2.GRUPO01";
    $scope.Curso = "2026/27";
    $scope.Github_ID = "https://github.com/tu-grupo/proyecto";

    $scope.JourneyIndex = 0;

$scope.Journeys = [
        {
            /**** JOURNEY: ELENA (COLECCIONISTA) ****/
            Id: 0,
            Name: "Elena Navarro",
            Photo: "woman.png",
            
            /*** PASO #1: INSPIRACIÓN ***/
            goal1: "Quiere ir a conseguir una montura rara, pero no recuerda con qué personajes ya lo ha intentado esta semana.",
            touch1: "Memoria / Dudas en el juego",
            feel1: "3",
            con1: "Siente frustración porque cree que ya fue a esa mazmorra, pero no está 100% segura.",
            ima1: "cartoon-teamthinking.png",
            
            /*** PASO #2: DECISIÓN ***/
            goal2: "Decide abrir la nueva web de registro para comprobar el estado de sus alters.",
            touch2: "Ordenador y navegador web",
            feel2: "4",
            con2: "Busca un diseño limpio donde pueda ver rápidamente los 'checks' verdes o rojos.",
            ima2: "cartoon-PCtyping.png",
            
            /*** PASO #3: ACTÚA ***/
            goal3: "Navega hasta la pestaña de 'Monturas y Farmeo Semanal'.",
            touch3: "Menú de navegación web",
            feel3: "5",
            con3: "Encuentra la sección fácilmente sin perderse entre estadísticas complejas que no le interesan.",
            ima3: "cartoon-resting.png",
            
            /*** PASO #4: OBSERVA ***/
            goal4: "Ve una lista visual con sus 5 personajes y nota que a dos de ellos aún les falta hacer esa mazmorra.",
            touch4: "Dashboard de actividades",
            feel4: "4",
            con4: "La tabla es clara y utiliza iconos del juego, lo que le ayuda a identificar todo de un vistazo.",
            ima4: "cartoon-planning.png",
            
            /*** PASO #5: ANALIZA ***/
            goal5: "Entra al juego, completa la mazmorra con su Paladín y marca la casilla en la web.",
            touch5: "Botón de 'Completado' en la web",
            feel5: "5",
            con5: "Le produce mucha satisfacción hacer clic en el check y ver cómo la barra de progreso se llena.",
            ima5: "cartoon-phone.png",
            
            /*** PASO #6: CONCLUSIÓN ***/
            goal6: "Ya no tiene que anotar nada en libretas; confía en la herramienta para su progreso.",
            touch6: "Cierre de tarea",
            feel6: "5",
            con6: "Se relaja sabiendo que tiene su 'To-Do' de WoW bajo control para el resto de la semana.",
            ima6: "cartoon-resting.png"
        },
        {
            /**** JOURNEY: HUGO (HARDCORE) ****/
            Id: 1,
            Name: "Hugo Silva",
            Photo: "man.png",
            
            /*** PASO #1: INSPIRACIÓN ***/
            goal1: "Es martes por la noche y quiere asegurarse de que sus 4 personajes tienen todo listo para el reinicio de mañana.",
            touch1: "Revisión rápida mental",
            feel1: "3",
            con1: "Tiene la sensación de que a su personaje 'Healer' le falta hacer una Mazmorra Mítica+.",
            ima1: "cartoon-teamthinking.png",
            
            /*** PASO #2: DECISIÓN ***/
            goal2: "Abre la aplicación web y va directo a su panel global de personajes.",
            touch2: "Ordenador y navegador web",
            feel2: "4",
            con2: "Espera que la web cargue rápido y le dé los datos sin tener que hacer demasiados clics.",
            ima2: "cartoon-PCtyping.png",
            
            /*** PASO #3: ACTÚA ***/
            goal3: "Filtra la vista para ver solo el progreso de 'La Gran Cámara' (recompensas semanales).",
            touch3: "Filtros de búsqueda",
            feel3: "4",
            con3: "Agradece que existan filtros avanzados para ir al grano.",
            ima3: "cartoon-planning.png",
            
            /*** PASO #4: OBSERVA ***/
            goal4: "Se da cuenta de que, efectivamente, a su Healer le falta 1 actividad y a su Tanque le faltan 2.",
            touch4: "Tabla de progreso semanal",
            feel4: "2",
            con4: "Se agobia un poco al ver que tiene más trabajo del que pensaba, pero agradece haberlo detectado a tiempo.",
            ima4: "cartoon-PCangry.png",
            
            /*** PASO #5: ANALIZA ***/
            goal5: "Calcula el tiempo que le tomará jugar con ambos personajes antes de irse a dormir.",
            touch5: "Dashboard",
            feel5: "3",
            con5: "Prioriza terminar las tareas del Healer usando la web como guía.",
            ima5: "cartoon-PCtyping.png",
            
            /*** PASO #6: CONCLUSIÓN ***/
            goal6: "Termina las actividades, las marca como completadas y se va a dormir tranquilo.",
            touch6: "Botones de estado",
            feel6: "5",
            con6: "Siente que la aplicación le ha salvado de perder equipo valioso para su hermandad.",
            ima6: "cartoon-resting.png"
        }
    ];
    $scope.model = $scope.Journeys[0];
}]);