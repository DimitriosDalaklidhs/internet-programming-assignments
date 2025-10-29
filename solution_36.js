class FormatError extends SyntaxError {
  constructor(message) {
    super(message);

    // Set the error name to FormatError
    this.name = "FormatError";

    // If supported, add the stack trace
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FormatError);
    }
  }
}

export default FormatError;

// Example usage:
// let err = new FormatError("formatting error");
// console.log(err.message); // formatting error
// console.log(err.name); // FormatError
// console.log(err.stack); // stack
// console.log(err instanceof FormatError); // true
// console.log(err instanceof SyntaxError); // true (inherits from SyntaxError)
