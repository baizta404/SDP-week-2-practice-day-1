var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let unique_numbrs = [];
for (let i = 0; i < numbers.length; i++) {
  if (!unique_numbrs.includes(numbers[i])) {
    unique_numbrs.push(numbers[i]);
  }
}

console.log(...unique_numbrs);
