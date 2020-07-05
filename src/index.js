/* eslint-disable no-unused-vars */
import { performance } from 'perf_hooks';
import { linearSearchForLoop } from './big-o-notation/search-linear';
import { binarySearch } from './big-o-notation/search-binary.js';

console.log('----------------------------------------------------------------');

// console.log('result is: ', addUpTo(50));

// let t1 = performance.now();
// addUpTo(1000000000);
// let t2 = performance.now();
// console.log(`Time elapsed is ${(t2 - t1) / 1000} seconds`);

// console.log(countUpAndDown(15));

console.log(linearSearchForLoop([1, 3, 5, 6], 3));

console.log(binarySearch([1, 2, 3, 4, 5, 6], 2));

console.log('----------------------------------------------------------------');
