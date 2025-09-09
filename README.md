1- What is the difference between var, let, and const?

var:function-scoped, hoisted, can be redeclared and reassigned (old way, avoid).

let: block-scoped, hoisted (but in temporal dead zone), can be reassigned but not redeclared.

const: block-scoped, hoisted (temporal dead zone), cannot be reassigned or redeclared (but objects/arrays can be mutated).


2- What is the difference between map(), forEach(), and filter()?

forEach() runs a function on each array element but does not return anything; it’s used for actions like logging. map() returns a new array with each element transformed based on the function. filter() returns a new array containing only the elements that satisfy a given condition. In short, use forEach for side effects, map to transform arrays, and filter to select elements.


3- What are arrow functions in ES6?

Arrow functions in ES6 are a shorter way to write functions. They use => instead of the function keyword, can return a value implicitly if there’s only one expression, and do not have their own this—they inherit it from the surrounding scope. For example, (a, b) => a + b adds two numbers, and x => x * x squares a number.

4- How does destructuring assignment work in ES6?

Destructuring assignment in ES6 is a way to extract values from arrays or objects and assign them to variables in a single, concise statement.

const person = { name: "Muhin", age: 25 };
const { name, age } = person;

console.log(name, age); // Output: Muhin 25


5- Explain template literals in ES6. How are they different from string concatenation?

Template literals in ES6 are strings enclosed in backticks `` ` `` that allow embedded expressions using `${}` and support multi-line text. Unlike traditional string concatenation with `+`, they make inserting variables and expressions easier and the code more readable. For example, `` `Hello, ${name}!` `` is cleaner than `"Hello, " + name + "!"`.
