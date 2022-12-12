import { cartdata as data } from "./cartdata.js";

const root = document.querySelector(".root1");

// displaying data
let html = "";
let res = data.map((ele) => {
  html =
    html +
    `<div class="w-[80%] p-6 border-gray-300 border-2 rounded-xl md:w-[40%] flex-col justify-center items-center text-center shadow-xl bg-white space-y-4">
        <div class="img-container flex justify-center pb-4">
            <img src='${ele?.image}' class="md:h-[350px] h-[250px]" loading="lazy"/>
        </div>
        <p class="md:w-[80%] mx-auto text-lg font-[600]">${ele?.title}</p>
        <p class="text-center font-bold font-serif"><span>Price-</span> $ ${ele?.price}</p>
        <p class="font-[600]">Qty- ${ele.rating?.count}</p>
        <button class="p-2 bg-blue-900 shadow-lg rounded text-white w-[150px]">Add to Cart</button>
    </div>
    <br/>
    `;
});

// console.log(res);

root.innerHTML = html;
