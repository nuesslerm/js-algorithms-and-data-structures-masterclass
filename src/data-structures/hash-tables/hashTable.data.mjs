/* eslint-disable lines-between-class-members */
// import _ from 'lodash/core.js';

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

console.log('--------------------------');

/**
 * hash table class
 */

// Observer
function createObserver() {
  let listeners = [];

  return {
    /**
     * subscribe function
     * @return unsubscribe function
     */
    subscribe(listener) {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter((l) => l !== listener);
      };
    },
    /**
     * publish function - goes over each listener fn in listeners and calls them with the published event
     */
    publish(event) {
      listeners.forEach((l) => l(event));
    },
  };
}

/**
 * pipe function
 */
// const pipe = (...functions) => (x) => functions.reduce((acc, fn) => fn(acc), x);

/**
 * An implementation of a hash table
 * @class HashTable
 */
class HashTable {
  /**
   * observer for afterSetEvents (collection of listeners for event; to be called at certain position in HashTable flow)
   */
  #afterSetObserver = createObserver();
  /**
   * observer for afterGetEvents (collection of listeners for event; to be called at certain position in HashTable flow)
   */
  #afterGetObserver = createObserver();

  /**
   * @param {number} [size=53]
   */
  constructor(size = 53) {
    this.keyMap = Array.from({ length: size }, () => []);
  }

  /**
   * hashes a key using a simplistic hash function
   * @private
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
   *
   * @param {string} key of the key-value pair, that we want to store in the hash table
   * @return {number} hashCode of the key
   */
  #hash(key) {
    if (typeof key !== 'string') throw new Error('key must be a string!');

    const PRIME = 31;

    const hashCode = key
      .split('')
      .slice(0, 100)
      .reduce((hashOut, char) => {
        const fullHash = hashOut * PRIME + ''.charCodeAt.call(char, 0) - 96;
        return fullHash % this.keyMap.length;
      }, 0);

    return Math.abs(hashCode);
  }

  /**
   * set method for inserting key-value pair into hash table (NOT a setter for a class prop; just a set method!)
   * @param {[string, string|number]} keyValueTuple
   */
  set([key, value]) {
    const hashKey = this.#hash(key);
    this.keyMap[hashKey] = [...this.keyMap[hashKey], [key, value]];
    this.#afterSetObserver.publish([key, value]);
  }

  /**
   * get method for retrieving key-value pair from hash table (NOT a getter for a class prop; just a set method!)
   * @param {string} key
   * @return {string|number} value of key-value pair
   */
  get(key) {
    const hashKey = this.#hash(key);

    const keyValuePair = this.keyMap[hashKey].find(([k]) => k === key);
    this.#afterGetObserver.publish(keyValuePair);

    if (keyValuePair === undefined) return undefined;
    return keyValuePair[1];
  }

  /**
   * subscribe listener function to afterSet observer
   * @param {function} listener function to be run when event is published
   * @return unsubscribe function
   */
  onAfterSet(listener) {
    return this.#afterSetObserver.subscribe(listener);
  }

  /**
   * subscribe listener function to afterGet observer
   * @param {function} listener function to be run when event is published
   * @return unsubscribe function
   */
  onAfterGet(listener) {
    return this.#afterGetObserver.subscribe(listener);
  }

  keys() {
    const reducerFn = (acc, separateChain) => {
      // eslint-disable-next-line no-unused-vars
      return acc.concat(separateChain.map(([key, _value]) => key));
    };

    return this.keyMap.reduce(reducerFn, []);
  }

  uniqueKeys() {
    const allKeys = this.keys();
    const uniqueKeys = [...new Set(allKeys)];

    if (allKeys.length !== uniqueKeys.length) {
      console.warn('There are duplicate keys in the hash table!');
    }

    return uniqueKeys;
  }

  values() {
    const reducerFn = (acc, separateChain) => {
      if (!separateChain.length) return acc;

      // eslint-disable-next-line no-unused-vars
      return acc.concat(separateChain.map(([_key, value]) => value));
    };

    return this.keyMap.reduce(reducerFn, []);
  }

  uniqueValues() {
    const allValues = this.values();
    return allValues.filter((val, idx, arr) => arr.indexOf(val) === idx);
  }

  toString() {
    const formatMap = (formattedMap, separateChain, index) => {
      if (!separateChain.length) return formattedMap;

      const format = ([k, v]) => ({ key: k, value: v });
      return { ...formattedMap, [index]: separateChain.map(format) };
    };

    const mapContent = this.keyMap.reduce(formatMap, {});
    const stringified = JSON.stringify(mapContent, null, 2);

    console.log(stringified);
  }
}

const HT = new HashTable();

const unsubscribe = HT.onAfterSet((value) => console.log('set', value));
HT.onAfterGet((value) => console.log('get', value));

HT.set(['asdf', 34]);
HT.set(['eaoifj', 'aef']);
HT.set(['ea")(%)"()oifj', '#JOOOOOOO']);
HT.set(['ea oifj', '4oi34jo']);
unsubscribe();
HT.set(['asdf', 123123]);
HT.set(['eaoifj', 34]);

HT.get('asdf');
HT.get('ogeo');
HT.get('eaoifj');
HT.get('not $koj32there');
HT.get('n2there');
HT.get('ea oifj');
HT.get('ea")(%)"()oifj');

HT.toString();

// console.log('keyMap', HT.keyMap);

const htKeys = HT.keys();
console.log('keys: ', htKeys, htKeys.length);
const uniqueKeys = HT.uniqueKeys(htKeys);
console.log('uniqueKeys: ', uniqueKeys, uniqueKeys.length);

const htValues = HT.values();
console.log('values: ', htValues, htValues.length);
const uniqueValues = HT.uniqueValues();
console.log('uniqueValues: ', uniqueValues, uniqueValues.length);

uniqueKeys.forEach((key) => HT.get(key));

/**
 * BigO of Hash Tables:
 * Insert: average time - O(1)
 * deletion: average time - O(1)
 * access: average time - O(1)
 * -> it depends on how good our hash function is at distributing things evenly across the table without filling in table spaces twice
 *
 * Recap:
 * hash tables are collections of key-value pairs
 * hash tables store data in a large array, and work by hashing the keys
 * a good hash should be fast, distribute keys uniformly and be deterministic
 * separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index
 */
