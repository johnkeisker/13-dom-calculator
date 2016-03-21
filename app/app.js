

document
  .querySelector("#add")
  .addEventListener("click", function() {
    var firstNumber = document.querySelector("#numberOne").value;
    var secondNumber = document.querySelector("#numberTwo").value;
    // add numbers together
    var total = Number(firstNumber) + Number(secondNumber);
    // change answer to be the result
    document.querySelector("#answer").innerHTML = total;
  });

document
  .querySelector("#subtract")
  .addEventListener("click", function() {
    var firstNumber = document.querySelector("#numberOne").value;
    var secondNumber = document.querySelector("#numberTwo").value;
    // add numbers together
    var total = Number(firstNumber) - Number(secondNumber);
    // change answer to be the result
    document.querySelector("#answer").innerHTML = total;
  });

document
  .querySelector("#multiply")
  .addEventListener("click", function() {
    var firstNumber = document.querySelector("#numberOne").value;
    var secondNumber = document.querySelector("#numberTwo").value;
    // add numbers together
    var total = Number(firstNumber) * Number(secondNumber);
    // change answer to be the result
    document.querySelector("#answer").innerHTML = total;
  });

document
  .querySelector("#divide")
  .addEventListener("click", function() {
    var firstNumber = document.querySelector("#numberOne").value;
    var secondNumber = document.querySelector("#numberTwo").value;
    // add numbers together
    var total = Number(firstNumber) / Number(secondNumber);
    // change answer to be the result
    document.querySelector("#answer").innerHTML = total;
  });
