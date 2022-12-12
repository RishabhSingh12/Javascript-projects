import { cartdata as data } from "./cartdata.js";

const root = document.querySelector(".root1");

// displaying data
let html = "";
let res = data.map((ele, idx) => {
  html =
    html +
    `<div class="card${idx} w-[80%] p-6 border-gray-300 border-2 rounded-xl md:w-[40%] flex-col justify-center items-center text-center shadow-xl bg-white space-y-4">
        <div class="img-container flex justify-center pb-4">
            <img src='${ele?.image}' class="md:h-[350px] h-[250px]" loading="lazy"/>
        </div>
        <p class="md:w-[80%] mx-auto text-lg font-[600]">${ele?.title}</p>
        <p class="text-center font-bold font-serif"><span>Price-</span> $ ${ele?.price}</p>
        <p class="qty font-[600]">Qty- ${ele.rating?.count}</p>
        <button id="btn-cart${idx}" class=" p-2 bg-blue-900 shadow-lg rounded text-white w-[150px]">Add to Cart</button>
    </div>
    <br/>
    `;
});

// console.log(res);
root.innerHTML = html;

// Adding to cart logic
const btnHandler = (e) => {
  let str1 = e.target.previousElementSibling.textContent.split("-");
  let qty = str1[1].trim();
  qty--;
  e.target.previousElementSibling.textContent = `Qty- ${qty}`;
};
root.addEventListener("click", btnHandler, true);
