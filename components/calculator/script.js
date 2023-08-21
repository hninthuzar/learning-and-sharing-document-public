const displayz = document.querySelector(".displayz");
const buttonsz = Array.from(document.querySelectorAll(".buttonz"));

buttonsz.map((button) => {
  button.addEventListener("click", calc);
});

function calc(e) {
  let val = e.target.innerText;

  switch(val) {
    case 'AC': displayz.innerText = '';
                break;
    case '=': try {
                if(displayz.innerText === '') {
                  displayz.innerText = '';
                  break;
                }
                else {
                  displayz.innerText = eval(displayz.innerText);
                  break;
                }
              } catch(e) {
                displayz.innerText = e.message;
                break;
              }
    default: displayz.innerText += val;
  }
}