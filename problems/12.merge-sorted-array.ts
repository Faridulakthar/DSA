// Merge Sorted Array
// run: npx ts-node 12.merge-sorted-array.ts

// note: this implementation uses O(m) extra space
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let nums1Copy = nums1.slice(0, m);

  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && nums1Copy[p1]! < nums2[p2]!)) {
      nums1[i] = nums1Copy[p1]!;
      p1++;
    } else {
      nums1[i] = nums2[p2]!;
      p2++;
    }
  }
}

// Optimized in-place solution without using space complexity O(1)
// need to run from the end of the array to avoid overwriting values in nums1, which has enough space to hold elements of nums2
function mergeSort(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) {
      break;
    }

    if (p1 >= 0 && nums1[p1]! > nums2[p2]!) {
      nums1[i] = nums1[p1]!;
      p1--;
    } else {
      nums1[i] = nums2[p2]!;
      p2--;
    }
  }
}

const arr1 = [1, 2, 3, 0, 0, 0];
const arr2 = [2, 5, 6];
// merge(arr1, 3, arr2, 3);
mergeSort(arr1, 3, arr2, 3);
console.log("Merged array:", arr1);
