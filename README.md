# Internet Programming, Assignments 35–38

**Course:** Programming on the Internet  
**Institution:** University of Western Macedonia  
**Language:** JavaScript (ES6+)

---

## Overview

This repository contains JavaScript solutions for assignments 35–38. It is published to demonstrate Git/GitLab usage, multi-file project organization, and version-controlled academic work.

> **Note:** These files are academic exercises, not production code.

---

## Table of Contents

- [Repository Structure](#repository-structure)
- [Assignment Summaries](#assignment-summaries)
  - [35 — Curried Sum](#35--curried-sum)
  - [36 — Custom FormatError](#36--custom-formaterror)
  - [37 — Promise-based Delay](#37--promise-based-delay)
  - [38 — Form Validation](#38--form-validation)
- [Running the Code](#running-the-code)

---

## Repository Structure

```
.
├── solution_35.js     # Curried sum via closures & valueOf
├── solution_36.js     # Custom error class extending SyntaxError
├── solution_37.js     # Promise-based async delay
├── solution_38.js     # Client-side form validation logic
└── solution_38.html   # Demo form — open in browser to test
```

---

## Assignment Summaries

### 35 — Curried Sum

Implements a chained sum function using closures and a custom `valueOf` override, allowing the result to be used as a primitive.

```js
console.log(sum(1)(2)(3)); // 6
console.log(sum(5)(10));   // 15
```

**Concepts:** closures, currying, `valueOf` / type coercion.

---

### 36 — Custom FormatError

Defines a `FormatError` class that extends the built-in `SyntaxError`, enabling domain-specific error types with a custom name and message.

```js
throw new FormatError("Invalid input format");
// FormatError: Invalid input format
```

**Concepts:** class inheritance, custom error types, prototype chain.

---

### 37 — Promise-based Delay

Implements a `delay(ms)` utility that returns a `Promise` resolving after the specified number of milliseconds — a common building block for async control flow.

```js
delay(1000).then(() => console.log("1 second later"));

// or with async/await
await delay(500);
```

**Concepts:** `Promise`, `setTimeout`, async/await.

---

### 38 — Form Validation

A client-side HTML form with JavaScript validation covering:

| Rule | Detail |
|------|--------|
| Required fields | All fields must be filled |
| Numeric code | Digits only, max 15 characters |
| Email format | Must match a valid email pattern |
| Password length | Minimum 9 characters |
| Password confirmation | Both password fields must match |

**To test:** open `solution_38.html` directly in any browser — no server required.

---

## Running the Code

**Assignments 35–37** (Node.js):
```bash
node solution_35.js
node solution_36.js
node solution_37.js
```

Requires [Node.js](https://nodejs.org/) v14+. No external dependencies.

**Assignment 38** (browser):
```bash
# Simply open the file in a browser
open solution_38.html        # macOS
start solution_38.html       # Windows
xdg-open solution_38.html    # Linux
```
