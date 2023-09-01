const inputText = document.querySelector(".input");
const allButtons = document.querySelectorAll("button");
let oprator = ["+", "-", "%", "DEL", "/", "C", "*", "="];
let output = "";
let counter = 0;

const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "C") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && oprator.includes(btnValue)& counter==0)return;
     output += btnValue;
  }
  if (oprator.includes(btnValue)) {counter++;} else{counter = 0;}
  if (counter > 1){
   if(btnValue !== "DEL" && btnValue !== "C" && btnValue !== "%"){
    output = output.toString().slice(0,-1) ;
    let lastChar = output.replace(output.toString().charAt(output.length - 1),btnValue);
   output = lastChar
   }
    
}

  inputText.value = output;

};

allButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    calculate(e.target.dataset.value);
  });
});
