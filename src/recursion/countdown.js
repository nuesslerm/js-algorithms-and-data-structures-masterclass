// Recursive Version
function countDownRecursive(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num -= 1;
  countDownRecursive(num);
}
countDownRecursive(3);

// print 3
// countDownRecursive(2)
// print 2
// countDownRecursive(1)
// print 1
// countDownRecursive(0)
// print 'All Done!'

// Iterative Version
function countDownIterative(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log('All done!');
}
countDownIterative(3);
