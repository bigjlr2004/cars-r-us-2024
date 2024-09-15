import { SaveCarOrder } from "./TransientData.js";

const handleSaveOrderSubmission = (clickEvent) => {
  if (clickEvent.target.id === "saveOrder") {
    SaveCarOrder();
  }
};

export const SaveSubmission = () => {
  document.addEventListener("click", handleSaveOrderSubmission);
  return "<button id='saveOrder'>Place Car Order</button>";
};
