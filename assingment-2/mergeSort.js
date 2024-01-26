// Assingment 2

// 1. Build a function mergeSort that takes in an
// array and returns a sorted array, using a
// recursive merge sort methodology. An input of
// [3, 2, 1, 13, 8, 5, 0, 1] should return
// [0, 1, 1, 2, 3, 5, 8, 13], and an input of
// [105, 79, 100, 110] should return [79, 100, 105, 110].

// 2. Tips:

// 1. Think about what the base case is and what behavior
// is happening again and again and can actually be
// delegated to someone else (e.g. that same function!).

// 2. It may be helpful to check out the background videos
// again if you don’t quite understand what should be going on.

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const leftArray = array.slice(0, mid);
  const rightArray = array.slice(mid);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

const merge = (leftArray, rightArray) => {
  const result = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      result.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < leftArray.length) {
    result.push(leftArray[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < rightArray.length) {
    result.push(rightArray[rightIndex]);
    rightIndex++;
  }

  return result;
};

console.log(mergeSort([10, 7, 8, 9, 1, 5])); // [1, 5, 7, 8, 9, 10]
console.log(mergeSort([30, 20, 10, 50, 22, 33, 55])); //[10, 20, 22, 30, 33, 50, 55]
