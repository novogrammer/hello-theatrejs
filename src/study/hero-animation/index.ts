import './style.scss'
import projectState from "./Hero_Animation.theatre-project-state.json"

import core from "@theatre/core"
import studioRaw from "@theatre/studio"

// (window as any).__TheatreJS_CoreBundle = core;

console.log(core);
console.log(studioRaw);
const studio: typeof studioRaw = (studioRaw as any).default || studioRaw;
studio.initialize();

const project = core.getProject('Hero_Animation',{
  state:projectState,
});
const sheet = project.sheet('Sheet 1');
// Play the animation on repeat
// project.ready.then(() => sheet.sequence.play({ iterationCount: Infinity }))

const createTransformProps = () => ({
  positionX: 0,
  positionY: 0,
  scaleX: core.types.number(1, { range: [0, 4] }),
  scaleY: core.types.number(1, { range: [0, 4] }),
  opacity: core.types.number(1, { range: [0, 1] }),
});

const applyTransform = (
  element: HTMLElement,
  values: {
    positionX: number
    positionY: number
    scaleX: number
    scaleY: number
    opacity: number
  },
) => {
  element.style.transform = `translate(${values.positionX}px, ${values.positionY}px) scale(${values.scaleX}, ${values.scaleY})`;
  element.style.opacity = `${values.opacity}`;
};

const createTransformObject = (objectKey: string, selector: string) => {
  const element = document.querySelector<HTMLElement>(selector);
  if (!element) {
    console.warn(`Element not found: ${selector}`);
    return null;
  }

  const obj = sheet.object(objectKey, createTransformProps());
  obj.onValuesChange((values) => {
    applyTransform(element, values);
  });

  return obj;
};

const heroTransformTargets = [
  {
    objectKey: '.p-home-section-hero / __human',
    selector: '.p-home-section-hero__human',
  },
  {
    objectKey: '.p-home-section-hero / __title',
    selector: '.p-home-section-hero__title',
  },
  {
    objectKey: '.p-home-section-hero / __date',
    selector: '.p-home-section-hero__date',
  },
  {
    objectKey: '.p-home-section-hero / __badge',
    selector: '.p-home-section-hero__badge',
  },
  {
    objectKey: '.p-home-section-hero / __balloon / --01',
    selector: '.p-home-section-hero__balloon--01',
  },
  {
    objectKey: '.p-home-section-hero / __balloon / --02',
    selector: '.p-home-section-hero__balloon--02',
  },
  {
    objectKey: '.p-home-section-hero / __balloon / --03',
    selector: '.p-home-section-hero__balloon--03',
  },
  {
    objectKey: '.p-home-section-hero / __balloon / --04',
    selector: '.p-home-section-hero__balloon--04',
  },
] as const;

const heroObjects = heroTransformTargets
  .map(({ objectKey, selector }) => createTransformObject(objectKey, selector))
  .filter((obj): obj is NonNullable<typeof obj> => obj !== null);

console.log(heroObjects);
