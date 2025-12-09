// Star pattern problem

// 4 x4 star pattern
let n: number = 4;
for (let i = 0; i < n; i++) {
  let row: string = "";
  for (let j = 0; j < n; j++) {
    row = row + "* ";
  }

  console.log(row);
}
