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

export const SaveCarOrder = async () => {
  // options for a post request
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };

  const repsonse = await fetch("http://localhost:8088/orders", postOptions);

  const customEvent = new CustomEvent("newOrder");
  document.dispatchEvent(customEvent);
};
