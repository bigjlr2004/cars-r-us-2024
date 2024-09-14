export const PaintOptions = async () => {
  const response = await fetch("http://localhost:8088/paints");
  const paints = await response.json();

  let paintHTML = `<select id="resource">
   <option value="0">Select paint resource...</option>`;

  const divStringArray = paints.map((paint) => {
    return `<option value="${paint.id}">${paint.color}</option>`;
  });

  paintHTML += divStringArray.join("");
  paintHTML += "</select>";
  return paintHTML;
};
