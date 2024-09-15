import { setInteriorOption } from "./TransientData.js";

export const InteriorOptions = async () => {
  const response = await fetch("http://localhost:8088/interiors");
  const interiors = await response.json();

  const changeHandler = (changeEvent) => {
    if (changeEvent.target.id === "interior") {
      const chosenOption = changeEvent.target.value;
      console.log(parseInt(chosenOption));
      setInteriorOption(chosenOption);
    }
  };
  document.addEventListener("change", changeHandler);

  let interiorHTML = `<select id="interior">
     <option value="0">Select interior resource...</option>`;

  const divStringArray = interiors.map((interior) => {
    return `<option value="${interior.id}">${interior.type}</option>`;
  });

  interiorHTML += divStringArray.join("");
  interiorHTML += "</select>";
  return interiorHTML;
};
