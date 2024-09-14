const transientState = {
  paintId: 0,
  interiorId: 0,
  wheelId: 0,
  technologyId: 0,
};

export const setPaintOption = (chosenPaintOption) => {
  transientState.paintId = chosenPaintOption;
  console.log(transientState);
};
export const setInteriorOption = (chosenInteriorOption) => {
  transientState.interiorId = chosenInteriorOption;
  console.log(transientState);
};
export const setTechnologyOption = (chosenTechnologyOption) => {
  transientState.technologyId = chosenTechnologyOption;
  console.log(transientState);
};
export const setWheelOption = (chosenWheelOption) => {
  transientState.wheelId = chosenWheelOption;
  console.log(transientState);
};
