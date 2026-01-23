// 27. Insertion Sort
// npx ts-node 27.insertion-sort.ts

export {};

function insertionSort(arr: number[]): number[] {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    const current = arr[i];
    let prev = i - 1;

    // Move elements of arr[0..i-1], that are greater than current, to one position ahead of their current position
    while (prev >= 0 && arr[prev]! > current!) {
      arr[prev + 1] = arr[prev]!;
      prev--;
    }
    arr[prev + 1] = current!;
  }

  return arr;
}

const arr = [12, 11, 13, 5, 6];
const sortedArr = insertionSort(arr);
console.log("Sorted array:", sortedArr);
