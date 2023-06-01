const on = document.getElementsByClassName('on')[0];
const off = document.getElementsByClassName('off-bottom')[0];
const background = document.querySelector('body');

function toggleButton() {
  on.classList.toggle('off-top');
  on.classList.toggle('on');
  off.classList.toggle('on');
  off.classList.toggle('off-bottom');

  if (background.style.backgroundColor === 'skyblue') {
    background.style.backgroundColor = 'grey';
    background.style.opacity = '0.2';
  } else {
    background.style.backgroundColor = 'skyblue';
    background.style.opacity = '1';
  }
}

on.addEventListener('click', function () {
  toggleButton();
});

off.addEventListener('click', function () {
  toggleButton();
});
