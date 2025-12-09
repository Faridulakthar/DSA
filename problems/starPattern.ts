// Star pattern problem

// 4 x4 star pattern
let a: number = 4;
for (let i = 0; i < a; i++) {
  let row: string = "";
  for (let j = 0; j < a; j++) {
    row = row + "* ";
  }

  console.log(row);
}

// steps to print right angled triangle star pattern

let b: number = 4;
for (let i = 0; i < b; i++) {
  let row: string = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + "* ";
  }

  console.log(row);
}
