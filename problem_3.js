let numbers = [19, 11, 18, 17, 20, 16, 15, 12, 14, 13,10,9,8,6,7,5,3,4,2,1];

let n = numbers.length;

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - 1 - i; j++) {
    if (numbers[j] > numbers[j + 1]) {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}
console.log(numbers);
