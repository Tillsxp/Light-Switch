const on = document.getElementsByClassName('on')[0];
const off = document.getElementsByClassName('off-bottom')[0];

function toggleButton() {
  on.classList.toggle('off-top');
  on.classList.toggle('on');
  off.classList.toggle('on');
  off.classList.toggle('off-bottom');
}
on.addEventListener('click', function () {
  toggleButton();
});

off.addEventListener('click', function () {
  toggleButton();
});
