const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Elemento encontrado
    }
  }
  return -1; // Elemento não encontrado
};

module.exports = linearSearch;
