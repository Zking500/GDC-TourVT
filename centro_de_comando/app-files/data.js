var APP_DATA = {
  "scenes": [
    {
      "id": "0-rea-de-trabajo-1",
      "name": "Área de trabajo 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 720,
      "initialViewParameters": {
        "yaw": 0.4231780850246949,
        "pitch": -0.11316643890816103,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 2.023993429694743,
          "pitch": 0.1809651686969609,
          "rotation": 0,
          "target": "1-parte-superior-de-rea-de-trabajo-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5286303712828246,
          "pitch": -0.3318449999173918,
          "title": "Centro de comando",
          "text": "El centro de comando está en el segundo edificio en la planta 4<div>La encargada de esta zona de trabajo es la Ing. Regina Gómez Martinez&nbsp;</div><div>su oficina se encuentra en&nbsp;</div>"
        }
      ]
    },
    {
      "id": "1-parte-superior-de-rea-de-trabajo-1",
      "name": "Parte superior de área de trabajo 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 720,
      "initialViewParameters": {
        "yaw": 1.4998558131882511,
        "pitch": -0.09423151095203508,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 0.7221362498831887,
          "pitch": 0.1683219823395401,
          "rotation": 0,
          "target": "0-rea-de-trabajo-1"
        },
        {
          "yaw": -1.6158166599947599,
          "pitch": 0.30435886669736156,
          "rotation": 0,
          "target": "2-rea-de-programacion"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.0300188916808892,
          "pitch": -0.4834208129699391,
          "title": "Parte superior",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-rea-de-programacion",
      "name": "Área de programacion",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 720,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.099424192336876,
          "pitch": 0.1522276346281366,
          "rotation": 0,
          "target": "1-parte-superior-de-rea-de-trabajo-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5833959209142172,
          "pitch": -0.2646782855296532,
          "title": "Oficina",
          "text": "Aquí se encuentra la oficina de la Ing. Regina"
        },
        {
          "yaw": -0.2879593591474503,
          "pitch": -0.3175002187479823,
          "title": "Área de programacion",
          "text": "Aquí se encuentra una parte de los programadores de la empresa, los cuales se encargan de administrar las actividades y trabajos de los empleados"
        }
      ]
    },
    {
      "id": "3-rea-de-trabajo-2",
      "name": "Área de trabajo 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 720,
      "initialViewParameters": {
        "yaw": -0.120649392965273,
        "pitch": -0.048510202747376496,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": -1.867505550114405,
          "pitch": 0.36610658723319744,
          "rotation": 0,
          "target": "2-rea-de-programacion"
        },
        {
          "yaw": 2.912099413150216,
          "pitch": 0.3990592960229762,
          "rotation": 0,
          "target": "4-parte-superior-del-rea-de-trabajo-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0625223414395801,
          "pitch": -0.2174019193026826,
          "title": "segunda área de trabajo",
          "text": "esta es una extensión del centro de comando&nbsp;"
        }
      ]
    },
    {
      "id": "4-parte-superior-del-rea-de-trabajo-2",
      "name": "Parte superior del área de trabajo 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 720,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1711379979755705,
          "pitch": 0.3111624039799157,
          "rotation": 0,
          "target": "3-rea-de-trabajo-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4570460691615548,
          "pitch": -0.14434961306592342,
          "title": "parte superior&nbsp;",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "centro_de_comando",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
