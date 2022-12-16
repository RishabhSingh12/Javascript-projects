// import { cartdata as data } from "./cartdata";
let cartitems = [];

export const addItems = (html, id) => {
  let demo = html.split("<br/>")[id - 1];
  //   console.log(demo)
  console.log(demo.includes(id));
  //   if (demo.includes(id)) {
  //     let foundItem = cartitems.find((ele) => {
  //       ele.id === id;
  //     });
  //   }
};
