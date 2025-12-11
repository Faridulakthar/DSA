// Star pattern proclem

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

// steps to print right angled triangle number pattern
let c: number = 5;
for (let i = 0; i < c; i++) {
  let row: string = "";
  for (let j = 0; j <= i; j++) {
    row = row + (j + 1) + " ";
  }

  console.log(row);
}

// steps to print right angled triangle same number pattern
let d: number = 5;
for (let i = 0; i < d; i++) {
  let row: string = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + (i + 1) + " ";
  }

  console.log(row);
}

// steps to print right angled triangle down same number pattern
let e: number = 5;
for (let i = 0; i < e; i++) {
  let row: string = "";
  for (let j = 0; j < e - i; j++) {
    row = row + (j + 1) + " ";
  }

  console.log(row);
}

// steps to print right angled triangle opposite star pattern
let f: number = 5;
for (let i = 0; i < f; i++) {
  let row: string = "";
  //   j loop fo adding emptyl spaces
  for (let j = 0; j < f - (i + 1); j++) {
    row = row + " ";
  }
  //   k loop for adding stars
  for (let k = 0; k < i + 1; k++) {
    row = row + "*";
  }

  console.log(row);
}

// steps to print right angled triangle opposite star pattern
let g: number = 5;
for (let i = 0; i < g; i++) {
  let row: string = "";
  let type: number = 1;

  for (let j = 0; j < i + 1; j++) {
    row = row + type;

    if (type === 1) {
      type = 0;
    } else {
      type = 1;
    }
  }

  console.log(row);
}
