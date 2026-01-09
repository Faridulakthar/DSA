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


const arr1 = [1, 2, 3, 0, 0, 0];
const arr2 = [2, 5, 6];
merge(arr1, 3, arr2, 3);
console.log("Merged array:", arr1);