export default function naiveStringSearch(long, short) {
  if (short.length > long.length) return 0;

  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count += 1;
    }
  }
  return count;
}
