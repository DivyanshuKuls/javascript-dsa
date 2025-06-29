// This function prints numbers from 1 to n using recursion
function print(n) {
  if (n <= 0) {
    return;
  }
  print(n - 1);
  console.log(n);
}

print(10);

// This function prints numbers from n to 1 using recursion
function printReverse(n) {
  if (n <= 0) {
    return;
  }
  console.log(n);
  printReverse(n - 1);
}

printReverse(10);