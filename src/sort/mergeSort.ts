const startTime = Date.now();

export function mergeSort(array: number[]): number[] {
  const length = array.length;

  if (length <= 1) return array;

  const pivot = Math.floor(length / 2);
  const left = array.slice(0, pivot);
  const right = array.slice(pivot);

  return merge(mergeSort(left), mergeSort(right));
}

export function merge(left: number[], right: number[]): number[] {
  const result: any[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([5, 2, 1, 3, 4, 1]));

const endTime = Date.now();
console.log(`Time: ${endTime - startTime}ms`);
