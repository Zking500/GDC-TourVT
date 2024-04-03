var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala_de_juntas",
      "name": "sala_de_juntas",
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
          "yaw": 1.8312539007212978,
          "pitch": 0.05635606101549051,
          "rotation": 0,
          "target": "1-sala_de_juntas_2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.719493543941665,
          "pitch": -0.054059118621244906,
          "title": "lugares para los empleados",
          "text": "en esta área se llevan a cabo las juntas de el área de comandos"
        }
      ]
    },
    {
      "id": "1-sala_de_juntas_2",
      "name": "sala_de_juntas_2",
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
          "yaw": -1.5972205495393403,
          "pitch": 0.539235599575342,
          "rotation": 0,
          "target": "2-rea-de-documentacin"
        },
        {
          "yaw": 0.0931963209392137,
          "pitch": 0.49632029845548864,
          "rotation": 0,
          "target": "0-sala_de_juntas"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.1979175157297552,
          "pitch": -0.10748265369841548,
          "title": "vista superiro&nbsp;",
          "text": "vista superior de la sala de juntas&nbsp;"
        }
      ]
    },
    {
      "id": "2-rea-de-documentacin",
      "name": "área de documentación",
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
          "yaw": 0.9747988172184883,
          "pitch": 0.1156245548925181,
          "rotation": 0,
          "target": "3-area_de_trabajo"
        },
        {
          "yaw": -0.41977187532184423,
          "pitch": 0.4018775578117335,
          "rotation": 0,
          "target": "1-sala_de_juntas_2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.36215890533364536,
          "pitch": -0.2674683817767942,
          "title": "Docuentacion&nbsp;",
          "text": "los empleados de esta zona se encargan del monitoreo de los documentos de trabajo enviados por los empleados"
        }
      ]
    },
    {
      "id": "3-area_de_trabajo",
      "name": "area_de_trabajo",
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
          "yaw": 2.724570056752839,
          "pitch": 0.5634464812555446,
          "rotation": 0,
          "target": "4-area_de_trabajo_2"
        },
        {
          "yaw": -0.8492924263870165,
          "pitch": 0.5291540409449667,
          "rotation": 0,
          "target": "2-rea-de-documentacin"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.1667311548547321,
          "pitch": -0.12275535068834031,
          "title": "área de trabajo",
          "text": "aqui se muestran las propuestas para las mejoras en el trabajo"
        }
      ]
    },
    {
      "id": "4-area_de_trabajo_2",
      "name": "area_de_trabajo_2",
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
        "yaw": -0.9431793266725812,
        "pitch": -0.032940507474826575,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 2.35578878397466,
          "pitch": 0.3959592463803858,
          "rotation": 0,
          "target": "3-area_de_trabajo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.8703427233479477,
          "pitch": -0.07111899880115402,
          "title": "Labores",
          "text": "aquí los empleados se encargan de realizar sus actividades designadas"
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
