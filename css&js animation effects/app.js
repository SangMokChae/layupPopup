const banner = document.getElementsByClassName('banner')[0];
const blocks = document.getElementsByClassName('blocks');
const section = document.querySelector('section');

const IMG_NUM = 6;
//todo
// https://stackoverflow.com/questions/15231812/random-background-images-css3

function init() {
  for(let i = 1; i < 500; i++) {
    banner.innerHTML += "<div class='blocks'></div>";
    const duration = Math.random() * 5;
    blocks[i].style.animationDuration = 2 + duration + 's';
    blocks[i].style.animationDuration = duration + 's';
  }

  setTimeout(function() {
    section.classList.add('active');
  }, 10000);  // class active 를 10초 후에 추가
}

init();