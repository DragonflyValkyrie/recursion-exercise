// Assingment 1

// 1. Using iteration, write a function fibs which
// takes a number and returns an array containing
// that many numbers from the Fibonacci sequence.
// Using an example input of 8, this function should
// return the array [0, 1, 1, 2, 3, 5, 8, 13].

// 2. Now write another function fibsRec which solves
// the same problem recursively.

function fibs(index) {
  let fibPrev = 0;
  let fibCurrent = 1;

  const fibArray = [0];

  for (let i = 1; i <= index; i++) {
    fibArray.push(fibCurrent);
    let temp = fibCurrent;
    fibCurrent = fibPrev + fibCurrent;
    fibPrev = temp;
  }

  return fibArray;
}

function fibsRec(index) {
  if (index === 0) {
    return [0];
  } else if (index === 1) {
    return [0, 1];
  }

  const fibArray = fibsRec(index - 1);
  fibArray.push(fibArray[index - 1] + fibArray[index - 2]);
  return fibArray;
}

console.log(fibs(8));
console.log(fibsRec(8));
