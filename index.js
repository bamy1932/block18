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

/* Unit Test 2:
"concatOdds" - this function takes two arrays as inputs and returns a single array containing odd numbers.
Happy - Input the function with array 1 (2,5,6,9) and array 2 (1,1,1,7,20,28) and would expect arrayR (1,5,7,9).
Unhappy - Input the function with array 3 (1,2,3) and array 4 (4,5,6,7) and would not expect arrayR (1,2,3,4,5,6,7).
Unhappy - Input the function with array 3 (1,2,3) and array 4 (4,5,6,7) and would not expect arrayR (2,4,6). */

const concatOdds = (arr1, arr2) => {
  const newArr = arr1.concat(arr2);
  const newArr2 = newArr.filter((num, i) => {
    return num % 2 !== 0 && newArr2.indexOf(num) == -1;
  });
  return newArr2;
};

module.exports = { multiplication, concatOdds };

/* Functional Test 1:

When the customer clicks the shopping cart checkout button a prompt should
 pop up asking if you would like to sign in or check out as a guest. This button
 is not available to click if the cart is empty.
Sign-in: the shopper inputs their log-in credentials and a new screen pops up
asking for payment. Once payment info is successfully submitted a confirmation
page will pop up showing the successful payment and the order details.
Guest: the shopper clicks the guest button and a new page pops up for the shopper
 to input their relevant contact info and payment info. Once this information is
 inputted correctly (all required fields populated) the shopper has the option 
 to submit. Once payment is successfully submitted a confirmation page will pop 
 up showing the successful payment and the order details.
*/
