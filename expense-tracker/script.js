const balanceEl = document.queryselector(".balance .value");
const incomeTotalEl = document.querySelector(".income-total");
const outcomeTotalEl = document.querySelector(".outcome-total");

const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelectyor(".tab3");

const expenseEl = document.querySelector("#expense");
const incomeEl = document.querySelector("#income");
const allEl = document.querySelector("#all");

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
