// create function to calculate power of x

function powerofx(x, n) {
  if (x === 1) {
    return 1;
  }
  if (x === 0) {
    return 0;
  }
  if (n === 0) {
    return 1;
  }

  return x * powerofx(x, n - 1);
}
console.time("With n");
console.log("value: ", powerofx(2, 4));
console.timeEnd("With n");

function powerofx2(x, n) {
  if (x === 1) {
    return 1;
  }
  if (x === 0) {
    return 0;
  }
  if (n === 0) {
    return 1;
  }

  const half = Math.floor(n / 2);
  if (n % 2 === 0) {
    return powerofx2(x, half) * powerofx2(x, half);
  } else {
    return powerofx2(x, half) * powerofx2(x, half) * x;
  }
}

console.time("with n/2: ");
console.log(powerofx2(2, 4));
console.timeEnd("with n/2: ");
