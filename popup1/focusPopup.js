const body = document.querySelector("body"),
  focusBtn = document.querySelector(".focus_btn"),
  layer2 = document.getElementById("layer2"),
  fBtnForm = document.querySelector(".fBtnForm"),
  fBtn = fBtnForm.querySelector(".fBtn");

function handleOpenFxt() {
  layer2.classList.remove("disappear");
  layer2.classList.add("showPrint");
  body.classList.add("bg");
}

function hanldeCloseFxt() {
  body.classList.remove("bg");
  layer2.classList.remove("showPrint");
  layer2.classList.add("disappear");
}

function init() {
  focusBtn.addEventListener("click", handleOpenFxt);
  fBtn.addEventListener("click", hanldeCloseFxt);
}
init();