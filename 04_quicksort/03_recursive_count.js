function count(array) {
  if (array.length === 0) return 0;
  return 1 + count(array.slice(1));
}

console.log(count([0, 1, 2, 3, 4, 5])); // 6
