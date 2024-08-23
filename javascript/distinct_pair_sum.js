function distinctPairSum(arr, k) {
  //  initialize an empty object called pairs
  const pairs = {};

  
  arr.slice(0, -1).forEach((num, idx) => {
    //  iterarete over the arr up to second to last item:
    const nextValue = arr[idx + 1];

    //  if current item and the next item are not keys in pairs and they sum to K:
    if (num + nextValue === k &&
      pairs[num] === undefined &&
      pairs[nextValue] === undefined
    ) {
      // add current item as key in pairs with value of [current item, next item]
      pairs[num] = [num, nextValue];
    }
  });
  //  return values stored in pairs
  return Object.values(pairs);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));

  console.log("");

  console.log("Expecting: []");
  console.log(distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 100));

  console.log("");

  console.log("Expecting: []");
  console.log(distinctPairSum([], 100));

  console.log("");

  console.log("Expecting: [[59, 41]]");
  console.log(distinctPairSum([59, 41], 100));

  console.log("");

  console.log("Expecting: []");
  console.log(distinctPairSum([59], 100));

  console.log("");

  console.log("Expecting: [[0, 0], [10, -10], [3, -3]]");
  console.log(distinctPairSum([1, 0, 0, 10, -10, 5, 4, 3, -3, -3], 0));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution
