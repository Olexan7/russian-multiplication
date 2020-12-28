document.querySelector(".solution").addEventListener("click", () => {
  numOne = document.querySelector(".first-number").value;
  numTwo = document.querySelector(".second-number").value;
  multiplicationNumberst(Number(numOne), Number(numTwo));
});

const multiplicationNumberst = (numOne, numTwo) => {
  let temp = `<table class = "table-solution">`;
  let tempSum = `<p class = "summ">Нарастающая сумма: `;
  temp += `<tr><th>${numOne}</th><th>${numTwo}</th><th>${0}</th></tr>`;
  let increasingAmount = 0;
  let flag = true;
  while (flag) {
    if (numOne % 2 != 0) {
      increasingAmount += numTwo;
      temp += `<tr><td></td><td class = "check">=></td><td class = "check">${numTwo}</td></tr>`;
      tempSum += `${numTwo} + `;
    }
    numOne = Math.floor(numOne / 2);
    numTwo = numTwo * 2;
    temp += `<tr><td>${numOne}</td><td>${numTwo}</td><td></td></tr>`;
    if (numOne < 1) flag = false;
  }
  temp += `</table>`;
  tempSum = tempSum.slice(0, -2);
  tempSum += `= ${increasingAmount}</p><p><b> Ответ: ${increasingAmount}</b></p>`;
  document.querySelector(".answer-table-container").innerHTML = temp;
  document.querySelector(".answer-summ").innerHTML = tempSum;
};
