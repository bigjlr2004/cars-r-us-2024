import { setTechnologyOption } from "./TransientData.js";

export const TechnologyOptions = async () => {
  const response = await fetch("http://localhost:8088/technologies");
  const technologys = await response.json();

  const changeHandler = (changeEvent) => {
    if (changeEvent.target.id === "technology") {
      const chosenOption = changeEvent.target.value;
      console.log(parseInt(chosenOption));
      setTechnologyOption(chosenOption);
    }
  };
  document.addEventListener("change", changeHandler);
  let technologyHTML = `<select id="technology">
    <option value="0">Select technology resource...</option>`;

  const divStringArray = technologys.map((technology) => {
    return `<option value="${technology.id}">${technology.package}</option>`;
  });

  technologyHTML += divStringArray.join("");
  technologyHTML += "</select>";
  return technologyHTML;
};
