function isEvenOrOdd(num) {
  if(typeof(num) !== 'number') {
    throw new TypeError('Not a Number! expects a number', "oddEven.js");
  } else {
    return num % 2 === 0 ? 'even' : 'odd';
  } // end else
} // end isEvenOrOdd

// num = 10 modulo 2 === 0 
// true
//  ? is if
// so so return = 'even'

module.exports = isEvenOrOdd;