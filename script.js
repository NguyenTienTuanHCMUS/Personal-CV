"use strict";

const infomation = document.querySelector(".information");
const infomationLogin = document.querySelector(".information-login");

const submit = document.querySelector(".btn");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submit.addEventListener("click", function () {
  const email = document.querySelector("#exampleInputEmail1").value;
  if (regex.test(email)) {
    infomation.classList.remove("hidden");
    infomationLogin.classList.add("hidden");
  }
});

const div1 = document.querySelector(".div-1");
const div2 = document.querySelector(".div-2");
const div3 = document.querySelector(".div-3");
const div4 = document.querySelector(".div-4");
const div5 = document.querySelector(".div-5");
const div6 = document.querySelector(".div-6");

const m1 = document.querySelector(".m-1");
const m2 = document.querySelector(".m-2");
const m3 = document.querySelector(".m-3");
const m4 = document.querySelector(".m-4");
const m5 = document.querySelector(".m-5");
const m6 = document.querySelector(".m-6");

const checkHeigh = function () {
  if (
    div1.clientHeight +
      40 +
      div2.clientHeight +
      40 +
      div3.clientHeight +
      40 +
      div4.clientHeight +
      40 +
      div5.clientHeight +
      40 +
      div6.clientHeight >
    1500
  ) {
    document.getElementById("background").classList.add("width-640");
    document.getElementById("background").classList.remove("width-300");
  } else {
    document.getElementById("background").classList.add("width-300");
    document.getElementById("background").classList.remove("width-640");
  }
};

div1.addEventListener("click", function () {
  m1.classList.toggle("hidden");
  div1.classList.toggle("align");
  checkHeigh();
});
div2.addEventListener("click", function () {
  m2.classList.toggle("hidden");
  div2.classList.toggle("align");
  checkHeigh();
});
div3.addEventListener("click", function () {
  m3.classList.toggle("hidden");
  div3.classList.toggle("align");
  checkHeigh();
});
div4.addEventListener("click", function () {
  m4.classList.toggle("hidden");
  div4.classList.toggle("align");
  checkHeigh();
});
div5.addEventListener("click", function () {
  m5.classList.toggle("hidden");
  div5.classList.toggle("align");
  checkHeigh();
});
div6.addEventListener("click", function () {
  m6.classList.toggle("hidden");
  div6.classList.toggle("align");
  checkHeigh();
});
