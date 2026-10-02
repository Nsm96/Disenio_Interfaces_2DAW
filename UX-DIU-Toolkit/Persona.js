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



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA: usuaria*******/
                /*************************************/
                
                


    Id: 0,
    Name: "Cristina López", // Corregido el nombre para que coincida con la bio
    Photo: "woman.png",
    Quote: "Me encanta trastear con mi servidor en casa, pero quiero que monitorizarlo sea visual y no un dolor de cabeza.",
    Age: 28,
    Occupation: "Técnica de Soporte IT (Helpdesk / Nivel 1)",
    Family: "Vive con su pareja y tiene un perro",
    Location: "Granada",
    Character: "Curiosa, autodidacta y práctica. Le gusta aprender, pero se frustra si una herramienta requiere demasiada configuración inicial.",

    PersonalityTraits: [
        { Name: "Introvertido/reservado Vs Extrovertido/activo", Value: 2 }, // Más orientada al trabajo individual/reservada
        { Name: "Realista/práctico Vs Intuición/imaginativo", Value: 2 }, // Muy práctica y realista
        { Name: "Racional/analítico Vs Emocional/impulsivo", Value: 1 }, // Altamente analítica
        { Name: "Flemático/apático Vs Colérico/visceral", Value: 3 }
    ],

    Goals: [
        "Ver el estado de la CPU, RAM y red de su servidor casero de un solo vistazo.",
        "Recibir alertas sencillas si alguno de sus servicios (Plex, Nextcloud, Pi-hole) se cae.",
        "Tener un panel de control que parezca profesional ('tipo hacker') sin tener que aprender lenguajes de consulta complejos."
    ],

    Frustrations: [
        "Tener que escribir consultas de código complejas (ej. PromQL) solo para ver un gráfico básico.",
        "Herramientas de monitorización que consumen demasiados recursos en su pequeño servidor.",
        "La falta de plantillas o dashboards preconfigurados para servicios comunes."
    ],

    Bio: "Cristina tiene 28 años y trabaja como técnica informática de primer nivel. Por afición, tiene un mini-PC en casa donde aloja sus propios servicios mediante Docker (un media server, bloqueador de anuncios, nube propia). Aunque tiene conocimientos técnicos, no es experta en DevOps. Quiere usar la plataforma por curiosidad, para sentir que tiene el control de su 'homelab' y ver qué pasa en su red, pero busca algo más plug-and-play que las soluciones empresariales puras.",

    Tech: [
        { Name: "TIC/Internet", Value: 5 }, // Nivel alto al ser su profesión y hobby
        { Name: "Móvil", Value: 4 },
        { Name: "RRSS", Value: 3 }, // Menos redes sociales convencionales, más foros/comunidades
        { Name: "Software", Value: 4 }
    ],

    Contextos: "Utiliza la aplicación dejándola abierta en un segundo monitor mientras está en el ordenador de casa, y la revisa desde el móvil si nota que el WiFi o sus servicios van lentos.",

    PreferredChannels: [
        { Name: "Comunidades técnicas (Reddit, foros, GitHub)", Value: 5 },
        { Name: "YouTube (Canales de tecnología y homelab)", Value: 4 },
        { Name: "Recomendaciones & sugerencias (Boca a boca de colegas IT)", Value: 4 },
        { Name: "Publicidad Tradicional", Value: 1 } // Muy poco receptiva a publicidad tradicional
    ]
},

{
    /*************************************/
    /**** SEGUNDA PERSONA: ADMINISTRADOR */
    /*************************************/

    Id: 1,
    Name: "Rodrigo García",
    Photo: "man.png",
    Quote: "Una buena administración permite que todo funcione mejor.",
    Age:  24,
    Occupation: "Administrador de una plataforma web",
    Family: "Casado y con dos hijos",
    Location: "Málaga",
    Character: "Responsable, metódico y preocupado por la seguridad de los datos.",

    PersonalityTraits: [
        { Name: "Introvertido/reservado Vs Extrovertido/activo", Value: 2 },
        { Name: "Realista/práctico Vs Intuición/imaginativo", Value: 5 },
        { Name: "Racional/analítico Vs Emocional/impulsivo", Value: 5 },
        { Name: "Flemático/apático Vs Colérico/visceral", Value: 3 }
    ],

    Goals: [
        "Gestionar correctamente las cuentas de los usuarios.",
        "Detectar y solucionar los problemas de la plataforma.",
        "Mantener segura y actualizada la información."
    ],

    Frustrations: [
        "No disponer de información suficiente sobre los usuarios.",
        "Recibir errores sin una explicación clara.",
        "Tener que realizar muchas tareas repetitivas manualmente."
    ],

    Bio: "Carlos tiene 42 años y trabaja como administrador de una plataforma web. Se encarga de revisar los usuarios, actualizar contenidos y comprobar que el sistema funciona correctamente. Necesita acceder a un panel de administración claro, con información organizada y avisos sobre posibles errores. No suele utilizar aplicaciones desde el móvil para trabajar, por lo que prefiere utilizar un ordenador.",

    Tech: [
        { Name: "TIC/Internet", Value: 5 },
        { Name: "Móvil", Value: 3 },
        { Name: "RRSS", Value: 2 },
        { Name: "Software", Value: 5 }
    ],

    Contextos: "Utiliza el panel de administración desde un ordenador, normalmente durante su jornada laboral y en un entorno de oficina.",

    PreferredChannels: [
        { Name: "Publicidad Tradicional", Value: 1 },
        { Name: "Online & Social Media", Value: 3 },
        { Name: "Recomendaciones & sugerencias", Value: 4 },
        { Name: "Persona de confianza (amigos, boca a boca)", Value: 4 }
    ]
}
];
		$scope.model = $scope.Personas[0];

	}])