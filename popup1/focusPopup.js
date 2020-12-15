const popBtn = document.querySelector(".focus_btn");
const layer2 = document.getElementById("layer2");
const closeForm = document.querySelector(".focus_close_btn");
const closeBtn = closeForm.querySelector(".btn");

function handleOpenText() {
  layer2.classList.remove("disappear");
  layer2.classList.add("showPrint");
}

function hanldeCloseText() {
  layer2.classList.remove("showPrint");
  layer2.classList.add("disappear");
}

function init() {
  popBtn.addEventListener("click", handleOpenText);
  closeBtn.addEventListener("click", hanldeCloseText);
}

init();