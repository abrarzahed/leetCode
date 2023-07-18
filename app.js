/****************************************** 
COMMENT: 200. Number of Islands
 Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
 An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
******************************************/
/*
const numIslands = function (grid) {
  const visited = grid.map((row) => {
    // console.log("row", row);
    return row.map((cell) => {
      // console.log("col", cell);
      return false;
    });
  });

  const getAdjNeighbors = (i, j, grid, visited) => {
    const adjNeighbors = [];
    if (i > 0 && !visited[i - 1][j]) adjNeighbors.push([i - 1, j]);
    if (i < grid.length - 1 && !visited[i + 1][j])
      adjNeighbors.push([i + 1, j]);

    if (j > 0 && !visited[i][j - 1]) adjNeighbors.push([i, j - 1]);
    if (j < grid[0].length - 1 && !visited[i][j + 1])
      adjNeighbors.push([i, j + 1]);

    return adjNeighbors;
  };

  const dFS = (i, j, grid, visited) => {
    const stack = [[i, j]];
    let islandsSize = 0;

    while (stack.length) {
      let curNode = stack.pop();
      let [i, j] = curNode;

      // check if visited at i and j
      if (visited[i][j]) continue;
      visited[i][j] = true;

      // check if cell is part of an island
      if (grid[i][j] === "0") continue;
      islandsSize++;

      let adjNeighbors = getAdjNeighbors(i, j, grid, visited);
      stack.push(...adjNeighbors);
    }

    return islandsSize > 0 ? true : false;
  };

  let islandsCount = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (dFS(i, j, grid, visited)) islandsCount++;
    }
  }

  return islandsCount;
};

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
*/

/****************************************** 
COMMENT:    20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 An input string is valid if:
 Open brackets must be closed by the same type of brackets.
 Open brackets must be closed in the correct order.
 Every close bracket has a corresponding open bracket of the same type.
******************************************/
/*
const isValid = function (s) {
  const stack = [];
  const parens = "() {} []";
  let i = 0;

  while (i < s.length) {
    stack.push(s[i]);
    i++;

    let open = stack[stack.length - 2];
    let close = stack[stack.length - 1];

    let potParens = open + close;

    if (parens.includes(potParens)) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length === 0;
};

console.log(isValid("()(]{}"));
*/

/****************************************** 
COMMENT:    26. Remove Duplicates from Sorted Array
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
******************************************/
// const removeDuplicates = function (nums) {
//   const results = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (!results.includes(nums[i])) {
//       results.push(nums[i]);
//     }
//   }
//   results.sort((a, b) => a - b);
//   return results.sort((a, b) => a - b).length;
// };
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
/*
var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      console.log(nums[i], nums[j]);
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
console.log(removeDuplicates([1, 1, 2]));
*/
