const popBtn = document.querySelector(".pop-btn"),
  layer1 = document.getElementById("layer1"),
  closeForm = document.querySelector(".close-btn"),
  closeBtn = closeForm.querySelector(".btn");

function handleOpenText() {
  layer1.classList.remove("disappear");
  layer1.classList.add("showPrint");
}

function hanldeCloseText() {
  layer1.classList.remove("showPrint");
  layer1.classList.add("disappear");
}

function init() {
  popBtn.addEventListener("click", handleOpenText);
  closeBtn.addEventListener("click", hanldeCloseText);
}

init();