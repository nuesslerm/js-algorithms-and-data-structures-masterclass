# Analyzing Performance of Arrays and Objects

* Understand how objects and arrays work, through the lens of Big O
* Explain why adding elements to the beginning of an array is costly
* Compare and contrast the runtime for arrays and objects, as well as built-in methods

## objects

### unordered key-value pairs

```javascript
let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}
```

### When to use Objects
When you don't need order
When you need fast access / insertion and removal

### Big O of Objects
Insertion -   O(1)
Removal -   O(1)
Searching -   O(N)
Access -   O(1)

When you don't need any ordering, objects are an excellent choice!

### Big O of Object Methods
Object.keys -   O(N)
Object.values -   O(N)
Object.entries -   O(N)
hasOwnProperty -   O(1)

## Arrays

### ordered lists!

```javascript
let names = ["Michael", "Melissa", "Andrea"];

let values = [true, {}, [], 2, "awesome"];
```

### WHEN TO USE ARRAYS
* When you need order
* When you need fast access / insertion and removal (sort of....)

### Big O of Arrays
Insertion -   It depends.... push O(1) vs unshift O(n)
Removal -   It depends.... pop O(1) vs shift O(n)
Searching -  O(N)
Access -   O(1)

### Big O of Array Operations
push - O(1)
pop - O(1)
shift - O(N)
unshift - O(N)
concat - O(N)
slice - O(N)
splice - O(N)
sort - O(N * log N)
forEach/map/filter/reduce/etc. - O(N)

Inserting at the beginning is not as easy as we might think! There are more efficient data structures for that!