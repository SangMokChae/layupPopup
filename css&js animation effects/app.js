const banner = document.getElementsByClassName('banner')[0];
const blocks = document.getElementsByClassName('blocks');
const section = document.querySelector('section');

function init() {
  for(let i = 1; i < 400; i++) {
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