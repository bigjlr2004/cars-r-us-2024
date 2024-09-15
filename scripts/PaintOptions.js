import { setPaintOption } from "./TransientData.js";

export const PaintOptions = async () => {
  const response = await fetch("http://localhost:8088/paints");
  const paints = await response.json();

  const changeHandler = (changeEvent) => {
    if (changeEvent.target.id === "paint") {
      const chosenOption = changeEvent.target.value;
      console.log(parseInt(chosenOption));
      setPaintOption(chosenOption);
    }
  };
  document.addEventListener("change", changeHandler);

  let paintHTML = `<select id="paint">
   <option value="0">Select paint option...</option>`;

  const divStringArray = paints.map((paint) => {
    return `<option value="${paint.id}">${paint.color}</option>`;
  });

  paintHTML += divStringArray.join("");
  paintHTML += "</select>";
  return paintHTML;
};
