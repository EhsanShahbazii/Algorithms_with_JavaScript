const isPrime = (n) => {
  for (let i = 3; i <= n / 2; i = i + 2) { // 1
    if (n % i == 0) { // n/4 - 1
      return false;
    }
  }

  return true; // 1
};

// T = 1 + (n/4 - 1) + 1 = n/4 + 1
/*
Best Case: number 1 or 2 => O(1)
Average Case: O(n)
Worst Case: O(n)
*/


/********** Improved **********/
const isPrime = (n) => {
  for (let i = 3; i <= Math.sqrt(n); i = i + 2) { // 1
    if (n % i == 0) { // n/4 - 1
      return false;
    }
  }

  return true; // 1
};

// T = 1 + (sqrt(n) - 1) + 1 = sqrt(n) + 1
/*
Best Case: number 1 or 2 => O(1)
Average Case Improved: O(sqrt(n))
Worst Case Improved: O(sqrt(n))
*/
