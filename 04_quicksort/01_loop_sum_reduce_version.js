function sumReduce(array) {
  return array.reduce(function (prev, cur) {
    return prev + cur;
  });
}

console.log(sumReduce([1, 2, 3, 4]));
