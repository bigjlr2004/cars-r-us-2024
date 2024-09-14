export const TechnologyOptions = async () => {
  const response = await fetch("http://localhost:8088/technologys");
  const technologys = await response.json();

  let technologyHTML = `<select id="resource">
    <option value="0">Select technology resource...</option>`;

  const divStringArray = technologys.map((technology) => {
    return `<option value="${technology.id}">${technology.package}</option>`;
  });

  technologyHTML += divStringArray.join("");
  technologyHTML += "</select>";
  return technologyHTML;
};
