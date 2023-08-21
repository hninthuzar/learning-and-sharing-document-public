// codeing challenge

// Factorial Number 

const num = Number(prompt("Enter a number!"));


function checkFactorialz(num) {
  if(isNaN(num) || num <= 0) {
    return;  // for prompt cancel case 
  }
  
  let total = 1;

  for(let i=1; i <= num; i++) {
    total = total * i;
    console.log({total});
  }
  document.querySelector(".showz").innerHTML = "Factorial number of " + num + " is " + total + ".";

}

checkFactorialz(num);