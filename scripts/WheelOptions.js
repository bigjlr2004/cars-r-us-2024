export const WheelOptions = async () => {
  const response = await fetch("http://localhost:8088/wheels");
  const wheels = await response.json();

  let wheelHTML = `<div class="selection"><select id="resource">
    <option value="0">Select wheel option...</option>`;

  const divStringArray = wheels.map((wheel) => {
    return `<option value="${wheel.id}">${wheel.description}</option>`;
  });

  wheelHTML += divStringArray.join("");
  wheelHTML += "</select></div>";
  return wheelHTML;
};
