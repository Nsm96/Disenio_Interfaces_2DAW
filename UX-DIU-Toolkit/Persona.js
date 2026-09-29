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
    Name: "Cristina López",
    Photo: "woman.png",
    Quote: "La tecnología debe hacerme la vida más fácil.",
    Age:  28,
    Occupation: "Estudiante de Diseño Gráfico",
    Family: "Vive con su pareja y tiene un perro",
    Location: "Granada",
    Character: "Creativa, organizada y algo impaciente cuando una aplicación no es intuitiva.",

    PersonalityTraits: [
        { Name: "Introvertido/reservado Vs Extrovertido/activo", Value: 3 },
        { Name: "Realista/práctico Vs Intuición/imaginativo", Value: 5 },
        { Name: "Racional/analítico Vs Emocional/impulsivo", Value: 3 },
        { Name: "Flemático/apático Vs Colérico/visceral", Value: 2 }
    ],

    Goals: [
        "Encontrar rápidamente la información que necesita.",
        "Utilizar aplicaciones sencillas y fáciles de entender.",
        "Ahorrar tiempo en sus tareas diarias."
    ],

    Frustrations: [
        "Las aplicaciones con demasiados menús y opciones.",
        "Tener que registrarse para realizar acciones sencillas.",
        "No encontrar ayuda cuando tiene un problema."
    ],

    Bio: "Laura tiene 28 años y estudia Diseño Gráfico mientras trabaja algunas tardes en una tienda. Utiliza el móvil para organizar sus actividades, consultar información y comunicarse con otras personas. Valora especialmente las interfaces claras, los textos breves y los procesos rápidos. Si una aplicación es complicada o tarda demasiado en cargar, deja de utilizarla.",

    Tech: [
        { Name: "TIC/Internet", Value: 5 },
        { Name: "Móvil", Value: 5 },
        { Name: "RRSS", Value: 4 },
        { Name: "Software", Value: 3 }
    ],

    Contextos: "Utiliza la aplicación principalmente desde el móvil, durante sus desplazamientos o cuando tiene poco tiempo disponible.",

    PreferredChannels: [
        { Name: "Publicidad Tradicional", Value: 1 },
        { Name: "Online & Social Media", Value: 5 },
        { Name: "Recomendaciones & sugerencias", Value: 4 },
        { Name: "Persona de confianza (amigos, boca a boca)", Value: 3 }
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