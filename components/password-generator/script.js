let displayz = document.querySelector(".res-text");
let copyz = document.querySelector(".copyz");
let rangez = document.querySelector("#range");
let rangeRes = document.querySelector(".range-res");
let numInputz = document.querySelector("#numberz");
let charinputz = document.querySelector("#special-char");
let button = document.querySelector(".generate");

const strongest = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*(){}<>?[]1234567890`;
const strong = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*(){}<>?[]`;
const middle = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890`;
const weak = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM`;


function generatePW() {
  let lengthz = rangez.value;
  let numcheck = numInputz.checked;
  let charcheck = charinputz.checked;

  let newPw = '';

  if(numcheck && charcheck) {
    for(let i=0; i < lengthz; i++) {
      newPw += strongest[Math.floor(Math.random() * strongest.length)];
    }
  }
  else if(numcheck) {
    for(let i=0; i < lengthz; i++) {
      newPw += strong[Math.floor(Math.random() * strong.length)];
    }
  }
  else if(charcheck) {
    for(let i=0; i < lengthz; i++) {
      newPw += middle[Math.floor(Math.random() * middle.length)];
    }
  }
  else {
    for(let i=0; i < lengthz; i++) {
      newPw += weak[Math.floor(Math.random() * weak.length)];
    }
  }

  displayz.value = newPw;
}

function rangeChange(e) {
  rangeRes.innerHTML = e.target.value;
}

function copyzFun() {
  if(displayz.value) {
    displayz.select();
    displayz.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(displayz.value);
    alert("copy success!");
  }  
}