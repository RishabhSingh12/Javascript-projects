// import { cartdata as data } from "./cartdata";
import { cartitems } from "./script.js";
export const addItems = (html, data, id) => {
  let demo = html.split("<br/>")[id - 1];
  //   console.log(demo)

  let foundEl = cartitems.find((ele) => {
    if (ele.id === id) {
      return ele;
    }
  });

  if (foundEl) {
    return { ...foundEl, qty: foundEl.qty + 1 };
  }

  return { ...foundEl, qty: 1 };

  //   if (demo.includes(id)) {
  //     let foundItem = cartitems.find((ele) => {
  //       ele.id === id;
  //     });
  //   }
};
