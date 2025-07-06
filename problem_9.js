function monthlySavings(allPayments, livingCost) 
{
  if (!Array.isArray(allPayments) || typeof livingCost === NaN) {
    return "invalid input";
  }
  let totalEarning = 0;
  for(let i=0;i<allPayments.length;i++){
    let earning = allPayments[i];
    if(earning<3000){
        totalEarning+=earning;
    }
    else{
        let tax = earning*0.2;
        let afterTax = earning-tax;
        totalEarning+=afterTax;
    }
  }

  const saving = totalEarning - livingCost;
//   console.log(totalEarning,livingCost, saving);
  if (saving < 0) {
    return "earn more";
  } else {
    return saving;
  }
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([1000, 2000, 2500], 10000));
console.log(monthlySavings(1000,[1000, 2000, 2500]));
