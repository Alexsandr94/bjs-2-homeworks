"use strict";

function solveEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    return [root];
  } else {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  }
}

console.log(solveEquation(1, -3, 2));
console.log(solveEquation(1, -2, 1));
console.log(solveEquation(1, 2, 5));


"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = parseFloat(percent);
  contribution = parseFloat(contribution);
  amount = parseFloat(amount);
  countMonths = parseFloat(countMonths);
  
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }
  
  const monthlyPercent = percent / 100 / 12;
  const loanBody = amount - contribution;
  
  if (loanBody <= 0) {
    return contribution;
  }
  
  const monthlyPayment = loanBody * 
    (monthlyPercent + monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1));
  
  const totalAmount = monthlyPayment * countMonths + contribution;
  
  return Number(totalAmount.toFixed(2));
}