# Internet Programming — Assignments 35–38

JavaScript exercises for the **“Programming on the Internet”** course at the University of Western Macedonia.  
Includes solutions for assignments **35–38** and an HTML form demo for client-side validation.

---

## Contents

- `solution_35.js` — **Curried sum**
  - Usage: `sum(1)(2)(3) == 6`
- `solution_36.js` — **Custom error**
  - `class FormatError extends SyntaxError` (supports `message`, `name`, `stack`)
- `solution_37.js` — **Delay promise**
  - `delay(ms)` returns a Promise that resolves after `ms` milliseconds
- `solution_38.js` + `solution_38.html` — **Form validation**
  - Validates: no empty fields, max 15 chars, numeric code, email pattern, password ≥ 9 and matches confirmation
  - Open `solution_38.html` in a browser to test
How to Use the Exercises

This repository contains JavaScript solutions for assignments 35–38 from the Programming on the Internet course at the University of Western Macedonia.
Each file is self-contained and demonstrates a different concept of modern JavaScript (currying, promises, custom errors, and form validation).

Running the JavaScript Files

All .js files use ES module syntax. You can run them in two ways:

1. In the browser

Add a <script type="module"> tag in an HTML file:

<script type="module" src="solution_35.js"></script>

2. With Node.js

Make sure you use a version that supports ES modules (Node ≥ 14).

Run any file with:

node solution_35.js

Features Demonstrated
 Currying (Assignment 35)

solution_35.js implements a curried sum() function that can be chained indefinitely and evaluated using valueOf.

Example:

console.log(sum(1)(2)(3)); // 6


Demonstrates:

Closures

Function chaining

Custom valueOf() behavior

 Custom Error Class (Assignment 36)

solution_36.js defines a FormatError class extending SyntaxError.

Features:

Custom error name

Inherits from a built-in error

Captures stack trace

 Promise-based Delay (Assignment 37)

solution_37.js implements delay(ms), returning a Promise that resolves after a given number of milliseconds.

Example:

delay(2000).then(() => console.log("Runs after 2 seconds"));


Demonstrates:

Promises

Asynchronous timing

Clean async control flow

 Client-Side Form Validation (Assignment 38)

solution_38.html + solution_38.js include a live form with validation rules:

required fields

numeric code (≤ 15 chars)

valid email format

password length ≥ 9

password confirmation

Just open the HTML file:

solution_38.html
