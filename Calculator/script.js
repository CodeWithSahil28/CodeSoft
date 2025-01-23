let string = "";
let button = document.querySelectorAll(".btn");
Array.from(button).forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;
    if (buttonText === "=") {
      string = eval(string);
      document.getElementById("screen").innerText = string;
    } else if (buttonText === "C") {
      string = "";
      document.getElementById("screen").innerText = string;
    } else if (buttonText === "X") {
      string += "*";
      document.getElementById("screen").innerText = string;
    } else {
      string += buttonText;
      document.getElementById("screen").innerText = string;
    }
  });
});
