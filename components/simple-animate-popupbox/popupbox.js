let togglebtn = document.querySelector('.togglebtn');
let container = document.querySelector('.container');
let title = document.querySelector('.sanipopup .title ');

togglebtn.onclick = function() {
    container.classList.toggle('active');
    title.classList.toggle('hidetitle');
}