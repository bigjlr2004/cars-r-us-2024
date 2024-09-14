export const InteriorOptions = async () => {
  const response = await fetch("http://localhost:8088/interiors");
  const interiors = await response.json();

  let interiorHTML = `<select id="resource">
     <option value="0">Select interior resource...</option>`;

  const divStringArray = interiors.map((interior) => {
    return `<option value="${interior.id}">${interior.type}</option>`;
  });

  interiorHTML += divStringArray.join("");
  interiorHTML += "</select>";
  return interiorHTML;
};
