/* eslint-disable no-unused-vars */
import { performance } from 'perf_hooks';
import {
  addUpTo,
  countUpAndDown,
  printAllPairs,
} from './big-o-notation/big-o-example1';

console.log('----------------------------------------------------------------');

// console.log('result is: ', addUpTo(50));

// let t1 = performance.now();
// addUpTo(1000000000);
// let t2 = performance.now();
// console.log(`Time elapsed is ${(t2 - t1) / 1000} seconds`);

// console.log(countUpAndDown(15));

console.log(printAllPairs(10));

console.log('----------------------------------------------------------------');
