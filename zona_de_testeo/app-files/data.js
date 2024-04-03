var APP_DATA = {
  "scenes": [
    {
      "id": "0-rea_de_programacin_1",
      "name": "Área_de_programación_1",
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
        "yaw": 0.07230927521192321,
        "pitch": 0.020118883103190655,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 2.0524356681841684,
          "pitch": 0.3124011403490172,
          "rotation": 0,
          "target": "1-extensin_del_rea_de_programacin_1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7156554928275156,
          "pitch": -0.17220448590627235,
          "title": "Área de programación numero 1",
          "text": "Se ubica en primer edificio<div>tercera planta</div><div>el encargado de esta zona es:</div><div>Lic. Roberto Pérez Ochoa</div><div>su oficina se encuentra en el área de programación 2</div>"
        }
      ]
    },
    {
      "id": "1-extensin_del_rea_de_programacin_1",
      "name": "Extensión_del_área_de_programación_1",
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
        "yaw": 2.2223026734740676,
        "pitch": -0.0028454963884101403,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 0.8571877949110878,
          "pitch": 0.12748712925782613,
          "rotation": 0,
          "target": "0-rea_de_programacin_1"
        },
        {
          "yaw": -1.0090564926671277,
          "pitch": 0.3219847354691847,
          "rotation": 0,
          "target": "3-rea_de_descanso_temporal"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5083925846524426,
          "pitch": -0.09981440060636615,
          "title": "Extensión&nbsp;",
          "text": "forma parte del área de programación 1"
        }
      ]
    },
    {
      "id": "2-rea_de_programacin_2",
      "name": "Área_de_programación_2",
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
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": -3.0138090994201843,
          "pitch": -0.1427261303253946,
          "title": "Oficina&nbsp;",
          "text": "aquí se encuentra la oficina del&nbsp;<div>Lic. Roberto&nbsp;</div>"
        },
        {
          "yaw": -0.9631593924092279,
          "pitch": 0.0402064637185191,
          "title": "Área de programacion 2",
          "text": "esta es la segunda área donde los empleados continuan con su labor"
        }
      ]
    },
    {
      "id": "3-rea_de_descanso_temporal",
      "name": "Área_de_descanso_temporal",
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
          "yaw": 2.714554656431572,
          "pitch": 0.5183598923972603,
          "rotation": 0,
          "target": "2-rea_de_programacin_2"
        },
        {
          "yaw": -2.2539778045752037,
          "pitch": 0.5741800802563919,
          "rotation": 0,
          "target": "1-extensin_del_rea_de_programacin_1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.20861926852016133,
          "pitch": 0.06485456991643623,
          "title": "Área de descanso",
          "text": "los empleados de esta zona pueden venir a descansar aqui"
        }
      ]
    }
  ],
  "name": "Zona_de_testeo",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
