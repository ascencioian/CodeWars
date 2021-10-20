//https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.


function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => { return a - b})
    return numbers[0] + numbers[1]
  }
  
  
  //p--> an array of minimum 4 positive integers
  //R--> sum of two lowest positive numbres
  //E--> [19, 5, 42, 2, 77] ---> 7
  //P
  //defitely going to be using math on this one.
  //im thinking we need to sort the array from lowest to highet. but these are numbers so we need to use
  // (a, b) => (return a -b)
  
  