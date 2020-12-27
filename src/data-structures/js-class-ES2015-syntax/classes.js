// class Student {
//   constructor(firstName, lastName, year) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.grade = year;
//   }
// }

// const newStudent = new Student('Emil', 'Katz');

// newStudent.grade = 4;

// console.log('emil', newStudent);

// const kitty = new Student('Kitty', 'Kat', 23);

// console.log(kitty);

// instance methods
// class Student {
//   constructor(firstName, lastName, year) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.grade = year;
//     this.tardies = 0;
//     this.scores = [];
//   }

//   fullName() {
//     return `Your full name is ${this.firstName} ${this.lastName}`;
//   }

//   markLate() {
//     this.tardies += 1;
//     if (this.tardies >= 3) {
//       return 'you are the wurst. smh';
//     }
//     return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
//   }

//   addScore(score) {
//     this.scores.push(score);
//     return this.scores;
//   }

//   calculateAverage() {
//     const sum = this.scores.reduce((acc, curr) => acc + curr, 0);
//     return sum / this.scores.length;
//   }
// }

// const firstStudent = new Student('Markus', 'Smith');

// console.log(firstStudent.fullName());
// // firstStudent.markLate();
// firstStudent.markLate();
// console.log(firstStudent.markLate());
// firstStudent.addScore(83);
// console.log(firstStudent.addScore(85));
// console.log(firstStudent.calculateAverage());

// class methods

// class Student {
//   constructor(firstName, lastName, year) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.grade = year;
//     this.tardies = 0;
//     this.scores = [];
//   }

//   fullName() {
//     return `Your full name is ${this.firstName} ${this.lastName}`;
//   }

//   static enrollStudents() {
//     return 'Enrolling students...';
//   }
// }

// const firstStudent = new Student('Colt', 'Steele');
// const secondStudent = new Student('Blue', 'Steele');

// Student.enrollStudents();
// console.log(Student.enrollStudents());

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

const distance = Point.distance(p1, p2);

console.log(distance);

/**
 * inside all of our instance methods and constructor, the keyword "this" refers to the object
 * created from that class (also known as an instance)
 */
