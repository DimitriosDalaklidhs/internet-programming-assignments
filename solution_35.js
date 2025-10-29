export default function sum(x) {
  let currentSum = x;

  function addNext(y) {
    currentSum += y;
    return addNext;
  }

  addNext.valueOf = function () {
    return currentSum;
  };

  return addNext;
}
