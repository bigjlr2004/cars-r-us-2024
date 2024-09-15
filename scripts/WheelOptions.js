import { setWheelOption } from "./TransientData.js";

export const WheelOptions = async () => {
  const response = await fetch("http://localhost:8088/wheels");
  const wheels = await response.json();

  const changeHandler = (changeEvent) => {
    if (changeEvent.target.id === "wheel") {
      const chosenOption = changeEvent.target.value;
      console.log(parseInt(chosenOption));
      setWheelOption(chosenOption);
    }
  };
  document.addEventListener("change", changeHandler);

  let wheelHTML = `<div class="selection"><select id="wheel">
    <option value="0">Select wheel option...</option>`;

  const divStringArray = wheels.map((wheel) => {
    return `<option value="${wheel.id}">${wheel.description}</option>`;
  });

  wheelHTML += divStringArray.join("");
  wheelHTML += "</select></div>";
  return wheelHTML;
};
