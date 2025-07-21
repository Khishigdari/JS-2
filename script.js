let nhurtelhtooBtn = document.getElementById("nhurtelhtooBtn");

nhurtelhtooBtn.addEventListener("click", () => {
  let number1 = num1.value;
  let numberNumber1 = parseInt(number1);
  document.getElementById("answer").innerText = "\n" + numberNumber1;
});

let num1 = document.getElementById("num1");
let limit = num1;

while (limit > 1) {
  num1 = num1 - 1;
  console.log(num1);
}
