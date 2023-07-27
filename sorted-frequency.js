function sortedFrequency(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let firstIndex = -1;
  let lastIndex = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      firstIndex = mid;
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  left = 0;
  right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      lastIndex = mid;
      left = mid + 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (firstIndex !== -1 && lastIndex !== -1) {
    return lastIndex - firstIndex + 1;
  }

  return -1;
}

module.exports = sortedFrequency;
