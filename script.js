// Button 1

let nhurtelhtooBtn = document.getElementById("nhurtelhtooBtn");

nhurtelhtooBtn.addEventListener("click", () => {
  let num1 = document.getElementById("num1");
  let number1 = num1.value;
  let numberNumber1 = parseInt(number1);

  while (numberNumber1 > 0) {
    console.log(numberNumber1);
    document.getElementById("answer").innerText =
      document.getElementById("answer").innerText + "\n" + numberNumber1;

    numberNumber1 = numberNumber1 - 1;
  }
});

// Button 2

let nhurtelhtegshtooBtn = document.getElementById("nhurtelhtegshtooBtn");

nhurtelhtegshtooBtn.addEventListener("click", () => {
  let num1 = document.getElementById("num1");
  let number1 = num1.value;
  let numberNumber1 = parseInt(number1);

  while (numberNumber1 > 0) {
    if (numberNumber1 % 2 === 0) {
      console.log(numberNumber1);
      document.getElementById("answer").innerText =
        document.getElementById("answer").innerText + "\n" + numberNumber1;
    }

    numberNumber1 = numberNumber1 - 1;
  }
});

// Button 3

let nhurtelhtoonuudiinniilberBtn = document.getElementById(
  "nhurtelhtoonuudiinniilberBtn"
);

nhurtelhtoonuudiinniilberBtn.addEventListener("click", () => {
  let num1 = document.getElementById("num1");
  let number1 = num1.value;
  let numberNumber1 = parseInt(number1);

  while (numberNumber1 > 0) {
    console.log(numberNumber1);
    document.getElementById("answer").innerText + "\n";

    numberNumber1 = numberNumber1 - 1;
  }
});
