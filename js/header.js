const header = document.querySelector('.header');
const avatar = document.querySelector('.content-avatar');

window.onscroll = function () {
  var top = window.scrollY;
  console.log(top);
  if (top >= 50) {
    header.classList.add('active');
    avatar.classList.add('active');
  } else {
    header.classList.remove('active');
    avatar.classList.remove('active');
  }
}