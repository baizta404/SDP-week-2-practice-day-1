let numbers = [11, 5, 95, 3, 74, 17, 69, 89, 12, 45];

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
