import './style.scss'

import core from "@theatre/core"
import studioRaw from "@theatre/studio"

// (window as any).__TheatreJS_CoreBundle = core;

console.log(core);
console.log(studioRaw);
const studio:typeof studioRaw = (studioRaw as any).default || studioRaw;
studio.initialize();


// Exported by clicking the project name and "Export Project Name to JSON" button.
const projectState = {
  "sheetsById": {
    "Sheet 1": {
      "staticOverrides": {
        "byObject": {
          ".p-home-section-hero / __title": {
            "opacity": 0.9936708860759493
          }
        }
      },
      "sequence": {
        "subUnitsPerUnit": 30,
        "length": 8,
        "type": "PositionalSequence",
        "tracksByObject": {
          ".p-home-section-hero / __title": {
            "trackData": {
              "LrJ3eujCAE": {
                "type": "BasicKeyframedTrack",
                "keyframes": [
                  {
                    "id": "i-s2GT5JFm",
                    "position": 0,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.107,
                      1.002
                    ],
                    "value": 0,
                    "type": "bezier"
                  },
                  {
                    "id": "I3Suv35jmV",
                    "position": 3,
                    "connectedRight": true,
                    "handles": [
                      0.706,
                      1.3,
                      0.097,
                      0.909
                    ],
                    "value": 96,
                    "type": "bezier"
                  },
                  {
                    "id": "M_00uVAeuK",
                    "position": 5.6,
                    "connectedRight": true,
                    "handles": [
                      0.686,
                      1.31,
                      0.5,
                      0
                    ],
                    "value": 0
                  }
                ]
              },
              "9JzZUrUSb7": {
                "type": "BasicKeyframedTrack",
                "__debugName": "Heading 1:[\"opacity\"]",
                "keyframes": [
                  {
                    "id": "EfAPcjrYAy",
                    "position": 0,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.23,
                      1
                    ],
                    "value": 0.9936708860759493,
                    "type": "bezier"
                  },
                  {
                    "id": "hZ-tUkMP4C",
                    "position": 3,
                    "connectedRight": true,
                    "handles": [
                      0.32,
                      1,
                      0.215,
                      0.61
                    ],
                    "value": 0,
                    "type": "bezier"
                  },
                  {
                    "id": "D5PA_XGfS6",
                    "position": 5.6,
                    "connectedRight": true,
                    "handles": [
                      0.355,
                      1,
                      0.5,
                      0
                    ],
                    "value": 0.9936708860759493
                  }
                ]
              }
            },
            "trackIdByPropPath": {
              "[\"y\"]": "LrJ3eujCAE",
              "[\"opacity\"]": "9JzZUrUSb7"
            }
          }
        }
      }
    }
  },
  "definitionVersion": "0.4.0",
  "revisionHistory": [
    "clQhOkE65OlDyXge",
    "vLg01lxRrpP8eGsS"
  ]
}

const project = core.getProject('HTML Animation Tutorial',{state:projectState});
const sheet = project.sheet('Sheet 1');
// Play the animation on repeat
project.ready.then(() => sheet.sequence.play({ iterationCount: Infinity }))

const obj = sheet.object('.p-home-section-hero / __title', {
  y: 0, // you can use just a simple default value
  opacity: core.types.number(1, { range: [0, 1] }), // or use a type constructor to customize
});

const homeSectionHeroTitleElement = document.querySelector<HTMLHeadingElement>('.p-home-section-hero__title')!;

obj.onValuesChange((obj) => {
  homeSectionHeroTitleElement.style.transform = `translateY(${obj.y}px)`;
  homeSectionHeroTitleElement.style.opacity = `${obj.opacity}`;
});

