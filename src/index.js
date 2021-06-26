const [input] = process.argv.slice(2);

// if (input === 'kavi') {
//   console.log('hello kavi!');
// } else if (input === 'markus') {
//   console.log('hello markus!');
// } else {
//   console.log("don't have this");
// }

switch (input) {
  case 'kavi':
    console.log('hello kavi!');
    break;
  case 'markus':
    console.log('hello markus!');
    break;
  default:
    console.log("don't have this");
    break;
}
