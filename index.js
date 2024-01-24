
let equalValue = document.getElementById("equal")
const number = document.getElementsByClassName("numberButton");
let value = document.getElementById("value");
let clean = document.getElementById("cleanButton");
let numberResult = " ";

for (let i = 0; i <number.length; i++) {
  number[i].addEventListener("click",()=>{
    const clickedNumber = number[i];
    value.textContent +=clickedNumber.textContent;
    numberResult += number[i].textContent;
  
  })
}
equalValue.addEventListener("click",()=>{
value.textContent = eval(numberResult);
})

clean.addEventListener("click",()=>{
  value.innerText = " ";
  numberResult = "";
})




