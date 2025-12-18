// write a. function to check whether a string is palindrome or not

function isPalindrome(num: number): boolean {
  let rev = 0;
  const original = num;

  while (num > 0) {
    const rem = num % 10;
    rev = 10 * rev + rem;
    num = Math.floor(num / 10);
  }

  return rev === original;
}

const number = 12421;

const palindromeResult = isPalindrome(number);

console.log("Is Palindrome:", palindromeResult);
