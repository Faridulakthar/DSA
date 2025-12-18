// write a function to reverse a number

function reverse(x: number): number {
  let rev = 0;
  const original = x;

  x = Math.abs(x);

  while (x > 0) {
    const rem = x % 10;
    rev = 10 * rev + rem;
    x = Math.floor(x / 10);
  }

  // check for 32 bit signed integer overflow for leetcode compatibility
  let limit = Math.pow(2, 31);
  if (rev < -limit || rev > limit) return 0;

  return original < 0 ? -rev : rev;
}
const testNumber: number = -12345;

const reversedNumber = reverse(testNumber);

console.log("Reversed Number:", reversedNumber);
