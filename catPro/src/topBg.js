let bgArray = new Array();
bgArray[0] = "4.jpg";
bgArray[1] = "5.jpg";
bgArray[2] = "6.jpg";
bgArray[3] = "7.jpg";

function showImg() {
  let imgNum = Math.round(Math.random()*3);
  let objImg = document.querySelector("#bgPhoto");
  objImg.src=`img/${bgArray[imgNum]}`;
}

function init() {
  setInterval(showImg, 6000);
}
init();