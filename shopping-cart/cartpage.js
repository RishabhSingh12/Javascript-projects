// import { cartdata as data } from "./cartdata";
import { cartitems } from "./script.js";

let newCartItems;
export const addItems = (html, data, id) => {
  let demo = html.split("<br/>")[id - 1];
  //   console.log(demo)

  let foundEl = data.find((ele) => {
    if (ele.id === id - 1) {
      return ele;
    }
  });

  console.log(foundEl);

  if (foundEl) {
    newCartItems = cartitems.map((ele) => {
      if (ele.id === foundEl.id) {
        return { ...foundEl, qty: foundEl.qty + 1 };
      }
      return { ...foundEl, qty: 1 };
    });
  }

  console.log(newCartItems);
};
