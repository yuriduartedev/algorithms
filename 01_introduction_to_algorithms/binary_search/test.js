const binarySearch = require("./binary_search");
const linearSearch = require("./binary_search");

describe("Binary Search", () => {
  test("Search for 1", () => {
    const my_list = [...Array(10).keys()];
    expect(binarySearch(my_list, 1)).toEqual(1);
  });

  test("Search for 10", () => {
    const my_list = [...Array(100).keys()];
    expect(binarySearch(my_list, 10)).toEqual(10);
  });

  test("Search for 100", () => {
    const my_list = [...Array(1000).keys()];
    expect(binarySearch(my_list, 100)).toEqual(100);
  });

  test("Search for 1.000", () => {
    const my_list = [...Array(10_000).keys()];
    expect(binarySearch(my_list, 1000)).toEqual(1000);
  });

  test("Search for 10.000", () => {
    const my_list = [...Array(100_000_000).keys()];
    expect(binarySearch(my_list, 10000)).toEqual(10000);
  });
});

describe("Linear Search", () => {
  test("Search for 1", () => {
    const my_list = [...Array(10).keys()];
    expect(linearSearch(my_list, 1)).toEqual(1);
  });

  test("Search for 10", () => {
    const my_list = [...Array(100).keys()];
    expect(linearSearch(my_list, 10)).toEqual(10);
  });

  test("Search for 100", () => {
    const my_list = [...Array(1000).keys()];
    expect(linearSearch(my_list, 100)).toEqual(100);
  });

  test("Search for 1.000", () => {
    const my_list = [...Array(10_000).keys()];
    expect(linearSearch(my_list, 1000)).toEqual(1000);
  });

  test("Search for 10.000", () => {
    const my_list = [...Array(100_000_000).keys()];
    expect(linearSearch(my_list, 10000)).toEqual(10000);
  });
});
