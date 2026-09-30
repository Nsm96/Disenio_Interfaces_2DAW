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

angular.module("angular", [])
.controller("controller", ["$scope", function($scope) {

    $scope.Grupo_ID = "DAW2.GRUPO01";
    $scope.Curso = "2026/27";
    $scope.Github_ID = "https://github.com/tu-grupo/proyecto";

    $scope.JourneyIndex = 0;

    $scope.Journeys = [
    {
        Id: 0,
        Name: "Cristina López",
        Photo: "woman.png",

        goal1: "Necesita comprobar si la aplicación web funciona correctamente.",
        touch1: "Ordenador del trabajo",
        feel1: "4",
        con1: "Ha recibido un aviso de un usuario y quiere revisar rápidamente el estado del sistema.",
        ima1: "cartoon-PCtyping.png",

        goal2: "Decide entrar en el panel de monitorización para consultar los datos.",
        touch2: "Navegador web",
        feel2: "3",
        con2: "No sabe en qué dashboard se encuentra la información que necesita.",
        ima2: "cartoon-planning.png",

        goal3: "Busca un dashboard con métricas de rendimiento y disponibilidad.",
        touch3: "Dashboard web",
        feel3: "3",
        con3: "Hay muchos gráficos y necesita distinguir rápidamente los datos importantes.",
        ima3: "cartoon-PCtyping.png",

        goal4: "Observa que el tiempo de respuesta del servidor ha aumentado.",
        touch4: "Gráficos y métricas",
        feel4: "2",
        con4: "La información aparece dividida en varios paneles y le cuesta encontrar el origen del problema.",
        ima4: "cartoon-PCangry.png",

        goal5: "Filtra los datos por fecha, servicio y nivel de error.",
        touch5: "Filtros y buscador",
        feel5: "4",
        con5: "Los filtros le permiten reducir la información y localizar los errores producidos durante la última hora.",
        ima5: "cartoon-phone.png",

        goal6: "Identifica el problema y comparte el dashboard con su equipo.",
        touch6: "Dashboard y enlace compartido",
        feel6: "5",
        con6: "Consigue encontrar la causa del problema, aunque le gustaría recibir alertas más claras automáticamente.",
        ima6: "cartoon-resting.png"
    },

    {
        Id: 1,
        Name: "Carlos Rodríguez",
        Photo: "man.png",

        goal1: "Quiere revisar una alerta sobre un posible fallo de seguridad.",
        touch1: "Notificación por correo",
        feel1: "3",
        con1: "La alerta contiene demasiada información y necesita comprobar si es realmente importante.",
        ima1: "cartoon-phoning.png",

        goal2: "Decide acceder a la plataforma para investigar los registros del sistema.",
        touch2: "Ordenador y navegador web",
        feel2: "4",
        con2: "Necesita acceder rápidamente y encontrar el servicio relacionado con la alerta.",
        ima2: "cartoon-PCtyping.png",

        goal3: "Busca los logs relacionados con el usuario, la hora y el servicio afectado.",
        touch3: "Buscador de logs",
        feel3: "3",
        con3: "No recuerda exactamente qué filtros debe utilizar para obtener resultados útiles.",
        ima3: "cartoon-planning.png",

        goal4: "Observa varios errores repetidos en los registros.",
        touch4: "Tabla de logs",
        feel4: "2",
        con4: "Hay muchos resultados y algunos mensajes técnicos son difíciles de interpretar.",
        ima4: "cartoon-PCangry.png",

        goal5: "Compara las métricas del servidor con los registros de actividad.",
        touch5: "Panel de análisis",
        feel5: "4",
        con5: "La comparación entre gráficos y logs le ayuda a confirmar que existe un problema.",
        ima5: "cartoon-teamthinking.png",

        goal6: "Confirma la incidencia, crea una alerta y comunica el problema al equipo.",
        touch6: "Alertas y panel compartido",
        feel6: "5",
        con6: "Resuelve la investigación, pero necesita configurar las alertas para que sean más fáciles de entender.",
        ima6: "cartoon-resting.png"
    }
];

    $scope.model = $scope.Journeys[0];

}]);        