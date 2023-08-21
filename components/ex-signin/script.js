let pssoffz = document.querySelector('form .passwordoffz');
if(pssoffz != undefined) {
  pssoffz.addEventListener('click', function() {
    this.style.display = "none";
    this.previousElementSibling.style.display = "block";
    this.parentElement.firstElementChild.setAttribute("type", "password");
  });
}

let pssonz = document.querySelector('form .passwordonz');
if(pssonz != undefined) {
  pssonz.addEventListener('click', function() {
    this.style.display = "none";
    this.nextElementSibling.style.display = "block";
    this.parentElement.firstElementChild.setAttribute("type", "text");
  });
}