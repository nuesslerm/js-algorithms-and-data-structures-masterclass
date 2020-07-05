/* eslint-disable no-unused-vars */
import { performance } from 'perf_hooks';
import { linearSearchForLoop } from './big-o-notation/search-linear';

console.log('----------------------------------------------------------------');

// console.log('result is: ', addUpTo(50));

// let t1 = performance.now();
// addUpTo(1000000000);
// let t2 = performance.now();
// console.log(`Time elapsed is ${(t2 - t1) / 1000} seconds`);

// console.log(countUpAndDown(15));

console.log(linearSearchForLoop([1, 3, 5, 6], 3));

console.log('----------------------------------------------------------------');
