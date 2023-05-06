let toggle = document.querySelector(".toggle");
let nav = document.querySelector(".nav");
let logo = document.querySelector("header .logo");

let tabsBtns = document.querySelectorAll(".tabs__title li");
let tabs = document.querySelectorAll(".tabs__container .tab");

let faqs = document.querySelectorAll(".faq");

let form = document.querySelector(".form");
let input = document.querySelector(".form .input");
let submitBtn = document.querySelector(".form .submit__btn");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("show");
  nav.classList.toggle("show");
  logo.classList.toggle("nav__logo");
});

tabsBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //remove active class from all tabs btn (li)
    tabsBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    //add active class to current tab btn (li)
    e.currentTarget.classList.add("active");

    let cl = `.${e.currentTarget.dataset.tabs}`;

    let tab = document.querySelector(`${cl}`);

    //remove active class from all tabs
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    //add active class to current tab using the dataset of current btn (li)
    document
      .querySelector(`.${e.currentTarget.dataset.tabs}`)
      .classList.add("active");
  });
});

faqs.forEach((faq) => {
  faq.addEventListener("click", (e) => {
    faq.classList.toggle("show");
  });
});

submitBtn.addEventListener("click", (e) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(input.value)) {
    e.preventDefault();
    form.classList.add("has-err");
  } else {
    form.classList.remove("has-err");
  }
});
