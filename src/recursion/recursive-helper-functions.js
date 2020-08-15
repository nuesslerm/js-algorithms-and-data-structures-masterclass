// helper method recursion

const collectOdds = (nums) => {
  const resArr = [];

  const pushToResArr = (arr) => {
    if (arr.length === 0) return;

    /**
     * var somevar = new String('somestring') console.log(typeof somevar) // object
     * string type checking ->
     * if (typeof myVar === 'string' || myVar instanceof String)
     * // it's a string
     * else
     * // it's something else
     */
    if (arr[0] % 2 === 1 /* && typeof arr[0] === 'number' */) {
      resArr.push(arr[0]);
    }

    pushToResArr(arr.slice(1));
  };

  pushToResArr(nums);

  return resArr;
};

console.log(typeof ('23434' % 2));
console.log(typeof '23434');

console.log(
  collectOdds([
    2,
    34,
    '23',
    'sdfdfdf',
    '35sdf',
    341,
    '345',
    '624',
    34,
    64,
    634,
    63456,
    345,
    745,
    23,
    '456',
    457,
    4,
    56,
    24,
    634,
    6,
    457,
    46,
    45,
    7455,
    645,
    64,
    7,
    456,
    45,
    6,
    457,
    457,
    35,
  ])
);
