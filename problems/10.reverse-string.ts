// Reverse String

function reverseString(s: string[]): void {
  let len = s.length;
  let halfLen = Math.floor(len / 2);

  for (let i = 0; i < halfLen; i++) {
    // Swapping
    let temp = s[i];
    s[i] = s[len - 1 - i]!;
    s[len - 1 - i] = temp!;
  }
}

const strArray = ["h", "e", "l", "l", "o"];
reverseString(strArray);
console.log("Reversed string array:", strArray);
