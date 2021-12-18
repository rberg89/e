const EXEC_LIMIT = 10000000;

// create array of test cases of this function
var y = [];
for (var i=0; i<EXEC_LIMIT; i++) {
  y.push(e(Math.random(), Math.random(), 1));
}

// average the test cases
var sum = 0;
for (var i=0; i<EXEC_LIMIT; i++) {
  sum += y[i];
}
ave = sum / EXEC_LIMIT;

// output / done
console.log(ave);


/** 
 * Computes 1 iteration using JS Math.random()
 * @param {Number} x: the sum of random numbers in this iteration
 * @param {Number} y: the random number to add to to x
 * @param {Number} i: the number of iterations
 * 
 * @return {Number} i: the number of iterations
*/

function e(x, y, i) {
  i++;
  x += y;
  if (x+y <= 1) {
    return e(x, Math.random(), i);
  } else {
    return i;
  }
}