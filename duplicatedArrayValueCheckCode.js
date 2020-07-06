/*
Create a function that takes an array as a parameter and compares the values of the array.

Print out the number of matches.

Here is an example:

[1, 1, 2, 3]

1 and 1 are the same.

1 and 2 are different.

Print out would have a count of 1 match.

Write some tests for your function.
*/

// The real answer
function compare(myArr) {
  for (let i = 0; i < myArr.length; i++) {
    for (let j = i + 1; j < myArr.length; j++) {
      if (myArr[i] === myArr[j]) {
        console.log(`${myArr[i]} and ${myArr[j]} are the same.`);
      } else {
        console.log(`${myArr[i]} and ${myArr[j]} are different.`);
      }
    }
  }
}

compare([1, 1, 2, 3]);

// Fancy way which lists the duplicated values but not following the instructions
function arrayValueChecker(array) {
    const uniqueValues = [];
    const duplicatedValues = [];
  
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
  
      if (uniqueValues.includes(item)) {
        if (duplicatedValues.indexOf(item) == -1) {
          duplicatedValues.push(item);
        }
      } else if (uniqueValues.indexOf(item) == -1) {
        uniqueValues.push(item);
      }
    }
  
    if (duplicatedValues.length === 0) {
      console.log('There are no duplicated values');
    } else if (duplicatedValues.length === 1) {
      console.log(`The duplicated value is ${duplicatedValues.join('')}`);
    } else {
      console.log(`The duplicated values are ${duplicatedValues.join(', ')}`);
    }
  }
  
  arrayValueChecker([1, 5, 2, 3]);
  arrayValueChecker([1, 1, 2, 3]);
  arrayValueChecker([4, 4, 8, 5, 2, 2, 4, 2, 7, 1, 3, 6, 8, 4]);
  arrayValueChecker([]);
  arrayValueChecker(['apple', 'banana', 'grape', 'banana']);
  arrayValueChecker([1, '1', 'two', 3, 'four', '5', -1]);
  arrayValueChecker([true, 'true', false, 'false']);
  