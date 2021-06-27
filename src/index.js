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
    console.log("input name wasn't found in the DB");
    break;
}

const waitForRandomNumber = (seconds) =>
  // eslint-disable-next-line consistent-return
  new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 15);
    if (typeof seconds !== 'number') {
      // The return purpose is to terminate the execution of the function after the rejection,
      // and prevent the execution of the code after it.
      // https://stackoverflow.com/questions/32536049/do-i-need-to-return-after-early-resolve-reject/32536083
      return reject(new Error('seconds must be a number'));
    }

    if (randomNumber < 5) {
      return reject(new Error(`${randomNumber} is too small`));
    }

    setTimeout(() => {
      resolve(randomNumber);
    }, seconds * 1000);
  });

(async () => {
  const randomNum = await waitForRandomNumber(2).catch((error) => {
    console.error(`an error was caught in the catch block:\n${error}`);
  });

  console.log('random number is: ', randomNum);
})();
