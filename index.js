const EXEC_LIMIT = 100000000;

function e(x, y, i) {
  i++;
  x += y;
  if (x+y <= 1) {
    return e(x, Math.random(), i)
  } else {
    return i;
  }
}
var y = [];
for (var i=0; i<EXEC_LIMIT; i++) {
  y.push(e(Math.random(), Math.random(), 1));
}
var sum = 0;
for (var i=0; i<EXEC_LIMIT; i++) {
  sum += y[i];
}
ave = sum / EXEC_LIMIT;

console.log(ave);
