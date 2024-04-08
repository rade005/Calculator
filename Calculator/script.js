document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".button, .operator");
  const clear = document.querySelector(".clear");
  let operatorEqual = document.querySelector(".operator_equal");
  let input = document.getElementById("input");

  let currentDisplay = "";

  function showOnDisplay() {
    input.value = currentDisplay || "0";
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      currentDisplay += buttons[i].textContent;
      input.value = currentDisplay;
    });
  }

  clear.addEventListener("click", function () {
    currentDisplay = "";
    showOnDisplay();
  });

  operatorEqual.addEventListener("click", function () {
    let result = eval(currentDisplay);

    if (!isNaN(result)) {
      input.value = result;
      currentDisplay = result.toString();
    } else {
      input.value = "Error";
    }
  });
});
