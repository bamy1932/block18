const { multiplication, concatOdds } = require("./index");

/*Unit Test 1:
"Multiplication" - this function returns the product of two values.
Happy - Input the function with 3 and 5 and would expect 15.
Unhappy - Input 3 and 5 and would not expect 20.
Unhappy - Input 3 and 5 and would not expect 8. 
Unhappy - Input 5 and 3 and would not expect 2.
Unhappy - Input 3 and 5 and would not expect -2.
Unhappy - Input "c" and 2 and would expect an error. */
const multiplication = (x, y) => {
  return x * y;
};
test("Multiply 3 and 5 equals to 15", () => {
  expect(multiplication(3, 5).toBe(15));
});
/* Unit Test 2:
"concatOdds" - this function takes two arrays as inputs and returns a single array containing odd numbers.
Happy - Input the function with array 1 (2,5,6,9) and array 2 (1,1,1,7,20,28) and would expect arrayR (1,5,7,9).
Unhappy - Input the function with array 3 (1,2,3) and array 4 (4,5,6,7) and would not expect arrayR (1,2,3,4,5,6,7).
Unhappy - Input the function with array 3 (1,2,3) and array 4 (4,5,6,7) and would not expect arrayR (2,4,6). */
const concatOdd = (arr1, arr2) => {
  return newArr2;
};
test("Combine and filter [2,5,6,9] and [1,1,1,7,20,28] and would expect [1,5,7,9]", () => {
  expect(concatOdds([2, 5, 6, 9], [1, 1, 1, 7, 20, 28]).toBe([1, 5, 7, 9]));
});
