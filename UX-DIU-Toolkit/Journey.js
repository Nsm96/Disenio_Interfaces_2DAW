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
        Id: 0,
        Name: "Cristina López",
        Photo: "woman.png",

        goal1:
          "Quiere comprobar de forma sencilla si sus servicios caseros funcionan correctamente.",
        touch1: "Panel de monitorización",
        feel1: "3",
        con1: "Nota que su servidor va más lento y quiere comprobar si el problema está en la CPU, la memoria o la red.",
        ima1: "cartoon-PCtyping.png",

        goal2: "Decide entrar en la plataforma para consultar el estado general de la aplicación.",
        touch2: "Ordenador y navegador web",
        feel2: "4",
        con2: "Busca una pantalla inicial donde pueda ver rápidamente si existe algún problema.",
        ima2: "cartoon-PCtyping.png",

        goal3: "Abre el dashboard principal de la aplicación.",
        touch3: "Dashboard principal",
        feel3: "4",
        con3: "El dashboard muestra varios gráficos, pero necesita identificar cuáles son los más importantes.",
        ima3: "cartoon-planning.png",

        goal4:
          "Consulta los indicadores básicos de disponibilidad, errores y tiempo de respuesta.",
        touch4: "Gráficos sencillos",
        feel4: "3",
        con4: "Observa que uno de los indicadores aparece en rojo y que el tiempo de respuesta es más alto de lo normal.",
        ima4: "cartoon-phone.png",

        goal5:
          "Selecciona un periodo de tiempo para comprobar cuándo empezó el problema.",
        touch5: "Selector de fecha",
        feel5: "4",
        con5: "La opción de cambiar el periodo le ayuda a comparar el estado actual con el de las horas anteriores.",
        ima5: "cartoon-PCtyping.png",

        goal6:
          "Comparte la información con su equipo para que puedan revisar el problema.",
        touch6: "Botón de compartir",
        feel6: "5",
        con6: "Consigue comunicar la situación sin tener que interpretar logs ni configurar opciones avanzadas.",
        ima6: "cartoon-resting.png",
      },

      {
        Id: 1,
        Name: "Rodrigo García",
        Photo: "man.png",

        goal1: "Quiere revisar una alerta sobre un posible fallo de seguridad.",
        touch1: "Notificación por correo",
        feel1: "3",
        con1: "La alerta contiene demasiada información y necesita comprobar si es realmente importante.",
        ima1: "cartoon-phoning.png",

        goal2:
          "Decide acceder a la plataforma para investigar los registros del sistema.",
        touch2: "Ordenador y navegador web",
        feel2: "4",
        con2: "Necesita acceder rápidamente y encontrar el servicio relacionado con la alerta.",
        ima2: "cartoon-PCtyping.png",

        goal3:
          "Busca los logs relacionados con el usuario, la hora y el servicio afectado.",
        touch3: "Buscador de logs",
        feel3: "3",
        con3: "No recuerda exactamente qué filtros debe utilizar para obtener resultados útiles.",
        ima3: "cartoon-planning.png",

        goal4: "Observa varios errores repetidos en los registros.",
        touch4: "Tabla de logs",
        feel4: "2",
        con4: "Hay muchos resultados y algunos mensajes técnicos son difíciles de interpretar.",
        ima4: "cartoon-PCangry.png",

        goal5:
          "Compara las métricas del servidor con los registros de actividad.",
        touch5: "Panel de análisis",
        feel5: "4",
        con5: "La comparación entre gráficos y logs le ayuda a confirmar que existe un problema.",
        ima5: "cartoon-teamthinking.png",

        goal6:
          "Confirma la incidencia, crea una alerta y comunica el problema al equipo.",
        touch6: "Alertas y panel compartido",
        feel6: "5",
        con6: "Resuelve la investigación, pero necesita configurar las alertas para que sean más fáciles de entender.",
        ima6: "cartoon-resting.png",
      },
    ];

    $scope.model = $scope.Journeys[0];
  },
]);
