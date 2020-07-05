# Big O notation

* precise vocabulary for code performance 
* for discussing trade-offs
* identifying ineffiencient parts of your code that might lead to problems. for debugging

--------------------------------

What does better mean?

* faster?
* less memory-intensive?
* more readable?

----------------------------------

if not time, then what?

rather counting seconds, which are variable, we can count the number of simple operations the 
computer has to perform

```javascript
function addUpTo(n) {
  return n * (n + 1) / 2;
}

// Big O = O(1) -> constant runtime
```

3 operations -> 1 multiplication, 1 addition, 1 division

```javascript
export function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// Big O = O(n) -> linear runtime
```

n operations, 1 addition and 1 variable reassignment
i++ -> 1 addition and 1 reassignment
1 <= n -> n comparisons

-> depending on our count the second algorithm could be between 2n or 5n + 2

regardless of the exact number, the number of operations grows roughly proportionally with n
If n doubles, the number of operations will also roughly double

## Big O Intro
* a way to formalize fuzzy counting
* allows us to talk formally about how the runtime of an algorithm grows as the inputs grow
* we only care about the general trend of the relationship input to operations

## Big O Definition
An algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

* f(n) could be linear (f(n) = n)
* f(n) could be quadratic (f(n) = n^2)
* f(n) could be constant (f(n) = 1)
* f(n) could be something entirely different!

```javascript
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// Big O = O(n^1) -> quadratic runtime
```

## Simplifying Big O Expressions
When determining the time complexity of an algorithm, there are some helpful rule of thumbs for big O expressions.

* constants don't matter ( O(1000n^2) -> O(n^2) )
* smaller terms don't matter ( O(n^2 + 5n + 8) -> O(n^2) )

There are several rules of thumb that can help to determine complexity
These rules won't ALWAYS work, but are a helpful starting point

* Arithmetic operations are constant
* Variable assignment is constant
* Accessing elements in an array (by index) or object (by key) is constant
* In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

```javascript
function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
//  O(n) -> linear runtime complexity
```

```javascript
function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
//  O(1) -> constant runtime complexity
```
