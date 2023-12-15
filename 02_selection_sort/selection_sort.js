const players = [
  { name: "Deep Purple", plays: 30 },
  { name: "Pink Floyd", plays: 141 },
  { name: "The Beatles", plays: 20 },
  { name: "Queen", plays: 110 },
  { name: "Led Zeppelin", plays: 39 },
  { name: "RadioHead", plays: 156 },
];

function findSmallestIndex(array) {
  let smallestElement = array[0].plays;
  let smallestIndex = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i].plays > smallestElement) {
      smallestElement = array[i].plays;
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

function selectionSort(array) {
  let sortedArray = [];
  let copyArray = array.slice();
  let length = array.length;

  for (let i = 0; i < length; i++) {
    let smallestIndex = findSmallestIndex(copyArray);

    sortedArray.push(copyArray.splice(smallestIndex, 1)[0]);
  }

  return sortedArray;
}

console.log(findSmallestIndex(players));
console.log(selectionSort(players));
