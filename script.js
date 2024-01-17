let inputBox = document.querySelector("#inputBox");
let equal=document.querySelector(".equal");
let clear=document.querySelector(".clear");
let back=document.querySelector(".back");
let sqRoot=document.querySelector(".sqRoot");


// Get all buttons with a common class
const buttons = document.querySelectorAll(".number-button");
const oprBtn=document.querySelectorAll(".operation");

// Add a click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    inputBox.value += button.value;
  });
});

oprBtn.forEach((opr) => {
    opr.addEventListener("click", () =>{
        inputBox.value += opr.value;

    })
} );

equal.addEventListener("click", () =>{
    try {
        // Use eval to evaluate the expression and set the result in the input box
        inputBox.value = eval(inputBox.value);
      } catch (error) {
        // Handle errors, e.g., if the expression is not valid
        inputBox.value = "Error";
      }

});

clear.addEventListener("click", () => {
    inputBox.value=" ";
});

back.addEventListener("click", () =>{

    let currentValue = inputBox.value;

    // Check if the input has a value
    if (currentValue.length > 0) {
      // Remove the last character using slice
      inputBox.value = currentValue.slice(0, -1);
    }
    

});

sqRoot.addEventListener("click", () =>{
    let v=inputBox.value;
    inputBox.value=Math.sqrt(v);



});