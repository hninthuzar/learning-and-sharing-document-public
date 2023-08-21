// codeing challenge

let prime = true;
let num = parseInt(prompt("Enter a number"));

function checkPrimez(num) {
  if(isNaN(num)) {
    return;  // for prompt cancel case 
  }
  
  if(num < 2) {
    prime = false;
  }
  
  for(let i=2; i < num; i++) {
    if(num % i == 0) {
      prime = false;
      break;
    }
  }
  
  if(prime) {
    document.querySelector("h2").innerHTML = "It's a prime number.";
  } else {
    document.querySelector("h2").innerHTML = "It's not a prime number.";
  }
}

checkPrimez(num);