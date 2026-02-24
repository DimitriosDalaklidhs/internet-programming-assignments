# Internet Programming · Assignments 35–38
### University of Western Macedonia · Programming on the Internet

&nbsp;

> These files are academic exercises demonstrating Git usage, project organization, and version-controlled coursework. Not production code.

&nbsp;

##  Repository Structure

| File | Purpose |
|---|---|
| `solution_35.js` | Curried sum via closures & `valueOf` |
| `solution_36.js` | Custom error class extending `SyntaxError` |
| `solution_37.js` | Promise-based async delay utility |
| `solution_38.js` | Client-side form validation logic |
| `solution_38.html` | Demo form · open directly in browser |

&nbsp;

## 35 · Curried Sum

Implements a chainable `sum` function using closures. A `valueOf` override lets the accumulated result resolve as a numeric primitive during type coercion.

```js
console.log(sum(1)(2)(3)); // 6
console.log(sum(5)(10));   // 15
```

`closures` `currying` `valueOf` `type coercion`

&nbsp;

## 36 · Custom FormatError

Defines a `FormatError` class extending the built-in `SyntaxError`, enabling domain-specific error types with a meaningful name and message.

```js
throw new FormatError("Invalid input format");
// FormatError: Invalid input format
```

`class inheritance` `custom errors` `prototype chain`

&nbsp;

## 37 · Promise-based Delay

A `delay(ms)` utility that returns a `Promise` resolving after the given milliseconds — a foundational async building block.

```js
delay(1000).then(() => console.log("1 second later"));

// or with async/await
await delay(500);
```

`Promise` `setTimeout` `async/await`

&nbsp;

## 38 · Form Validation

HTML form with JavaScript validation rules. Open `solution_38.html` in any browser — no server needed.

| Rule | Requirement |
|---|---|
| Required fields | All inputs must be filled |
| Numeric code | Digits only · max 15 characters |
| Email | Must match a valid pattern |
| Password | Minimum 9 characters |
| Confirmation | Both password fields must match |

&nbsp;

## ▶ Running the Code

**Assignments 35–37** require [Node.js](https://nodejs.org/) v14+. No external dependencies.

```bash
node solution_35.js
node solution_36.js
node solution_37.js
```

**Assignment 38** runs entirely in the browser.

```bash
open solution_38.html          # macOS
start solution_38.html         # Windows
xdg-open solution_38.html      # Linux
```

&nbsp;

MIT License · University of Western Macedonia
