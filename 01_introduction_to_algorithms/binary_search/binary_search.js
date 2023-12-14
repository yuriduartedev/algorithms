const binarySearch = (list, target) => {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let guess = list[mid];

    if (guess === target) {
      return mid;
    }

    if (guess > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return null;
};

module.exports = binarySearch;
