const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelectyor(".tab3");

// toggling logic for lists

function active(ele) {
  ele.classList.add("active");
}

function show(ele) {
  ele.classList.remove("hide");
}

function hide(eleArr) {
  eleArr.forEach((ele) => {
    ele.classList.add("hide");
  });
}

function inActive(eleArr) {
  eleArr.forEach((ele) => {
    ele.classList.remove("active");
  });
}
