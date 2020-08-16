// const data = [...Array(10)].map((_, i) => i + 1);
// const data1 = [...Array(10)].fill(1);

// console.log(data, data1);

function merge(arrA, arrB) {
  const mergedArr = [];
  let i = 0;
  let j = 0;

  while (i + j < arrA.length + arrB.length) {
    if (arrA[i] < arrB[j]) {
      mergedArr.push(arrA[i]);
      i += 1;
    } else {
      mergedArr.push(arrB[j]);
      j += 1;
    }
  }

  return mergedArr;
}

const arrA = [1, 3, 4, 5, 9, 123, 224];
const arrB = [2, 6, 7, 8, 11, 25, 23325];

console.log(merge(arrA, arrB));
