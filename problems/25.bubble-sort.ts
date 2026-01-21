// 25. Bubble Sort
// npx ts-node 25.bubble-sort.ts

export {};

function bubbleSort(arr: number[]): number[] {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;

    for (let j = 0; j < n - 1 - 1; j++) {
      if (arr[j]! > arr[j + 1]!) {
        // Swap arr[j] and arr[j + 1]
        const temp = arr[j];
        arr[j] = arr[j + 1]!;
        arr[j + 1] = temp!;

        isSwapped = true;
      }
    }

    // If no two elements were swapped in the inner loop, then the array is already sorted
    if (!isSwapped) {
      break;
    }
  }

  return arr;
}

const arr = [64, 34, 25, 12, 22, 11, 90];
const sortedArr = bubbleSort(arr);
console.log("Sorted array:", sortedArr);

// swapping two numbers using a temporary variable
// a = 5
// b = 10

// temp = a
// a = b
// b = temp

// a = 10
// b = 5
