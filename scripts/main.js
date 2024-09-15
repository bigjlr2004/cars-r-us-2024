import { InteriorOptions } from "./InteriorOptions.js";
import { Orders } from "./Orders.js";
import { PaintOptions } from "./PaintOptions.js";
import { SaveSubmission } from "./SaveOrder.js";
import { TechnologyOptions } from "./TechnologyOptions.js";
import { WheelOptions } from "./WheelOptions.js";

const render = async () => {
  const paintHTML = await PaintOptions();
  const wheelHTML = await WheelOptions();
  const technologyHTML = await TechnologyOptions();
  const interiorHTML = await InteriorOptions();
  const saveCarHTML = await SaveSubmission();
  const ordersHTML = await Orders();

  const container = document.querySelector("#main");

  const composedHTML = `
         <h1>Cars R Us Custom Cars</h1>
 
         <article class="options-list">
             <section class="options">
                 <h2>Paints</h2>
                 ${paintHTML}
             </section>
 
             <section class="options">
                 <h2>Interior</h2>
                 ${interiorHTML}
             </section>
 
             <section class="choices__styles options">
                 <h2>Technology</h2>
                 ${technologyHTML}
             </section>
         
 
             <section class="choices__styles options">
                 <h2>Wheels</h2>
                 ${wheelHTML}
             </section>
         </article>
         <article>
                  ${saveCarHTML}
         </article>
 
         <article class="order">
                
 
         </article>
 
         <article class="customOrders options">
             <h2>Custom Cars R Us Orders</h2>
             <div>
                 ${ordersHTML}
             </div>
 
         </article>`;
  container.innerHTML = composedHTML;
};

render();

document.addEventListener("newOrder", (event) => {
  console.log("State of data has changed. Regenerating HTML...");
  render();
});
