/**
 * Hash Tables / Hash Maps
 * * hash tables are used to store key-value pairs
 * * keys are not ordered
 * * fast for all of the following operations: finding values, adding new values, removing values
 *
 * hash tables are everywhere
 * * Python has Dictionaries
 * * JS has objects and maps (objects have some restrictions, but are basically hash tables)
 * * Java, Go & Scala have Maps
 * * Ruby has Hahes
 * because of their speed, they are very commonly used
 */

/**
 * implementing a hash table
 * -> to implement a hash table you can use an array
 * in order to lookup values by key we need a way to convert keys into valid array incides
 * we also need a function that performs the hashing: a hash function
 */

/**
 * hash functions
 * what makes a good hash (for hash tables):
 * * fash (ie. constant time)
 * * doesn't cluster outputs at specific indices; distributes uniformly
 * * deterministic (same input yields the same output)
 */

function hash(key, length) {
  if (typeof key !== 'string' || typeof length !== 'number') return undefined;

  const hashCode = key.split('').reduce((hashOut, letter) => {
    return (hashOut + ''.charCodeAt.call(letter, 0) - 96) % length;
  }, 0);

  return hashCode;
}

console.log(hash('pink', 10));
console.log(hash('blue', 10));
console.log(hash('red', 10));
console.log(hash('orange', 10));
console.log(hash('cyan', 10));

/**
 * refining our hash
 * problems:
 * * only hashes strings (we won't worry about this)
 * * not constant time - O(n) -> linear with key's length
 * * could be a little more random
 */

console.log('--------------------------');

function hash2(key, length) {
  if (typeof key !== 'string' || typeof length !== 'number') return undefined;

  const hashCode = key
    .split('')
    .slice(0, 100)
    .reduce((hashOut, letter) => {
      return (hashOut + ''.charCodeAt.call(letter, 0) - 96) % length;
    }, 0);

  return hashCode;
}

console.log(hash2('pink', 13));
console.log(hash2('blue', 13));
console.log(hash2('red', 13));
console.log(hash2('orange', 13));
console.log(hash2('cyan', 13));

/**
 * using prime numbers in hash functions:
 * * helpful for spreading out hashed keys more uniformly
 * * it reduces the number of collisions in the array, if the array has a prime length
 * useful links:
 * * why do hash functions use prime numbers?
 * * does making array size a prime number help in hash table implementation?
 */

console.log('--------------------------');

function hash3(key, length) {
  if (typeof key !== 'string' || typeof length !== 'number') return undefined;

  const PRIME = 31;

  const hashCode = key
    .split('')
    .slice(0, 100)
    .reduce((hashOut, char) => {
      return (hashOut * PRIME + ''.charCodeAt.call(char, 0) - 96) % length;
    }, 0);

  return hashCode;
}

console.log(hash3('pink', 13));
console.log(hash3('blue', 13));
console.log(hash3('red', 13));
console.log(hash3('orange', 13));
console.log(hash3('cyan', 13));

/**
 * Dealing with collisions
 * * even with a large array and a great hash function, collisions are inevitable
 * there are many strategies for dealing with collisions:
 * 1. separate chaining
 * 2. linear probing
 */

/**
 * separate chaining:
 * * with separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list)
 * * this allows us to store multiple key-value pairs at the same index
 * * allows us to store more key-value pairs than there are hash table slots
 */

/**
 * linear probing
 * * with linear probing, when we find a collision, we search through the array to find the next empty slot
 * * unlike with separate chaining, this allows us to store a single key-value pair at each index
 * * only allows us to store as many key-value pairs as there are hash table slots
 */
