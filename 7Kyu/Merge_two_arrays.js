//https://www.codewars.com/kata/583af10620dda4da270000c5/train/javascript

// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// Examples:

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]

// Points:

//     The arrays may be of different lengths, with at least one character/digit.
//     One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).


function mergeArrays(a, b) {
    result = [];
    if(a.length > b.length){
      num = a.length
    }else{
      num = b.length
    }
    for(i = 0;i < num;i++){
      if(a[i] !== undefined){
        result.push(a[i])
      }
      if(b[i] !== undefined){
        result.push(b[i])
      }
    }
    return result;
  }
  
  
  //you get two arrays of different sizes
  //the first array will be letters. the second array will be numbres
  //alternate on each array and add them in order to a new array
  
  //p---> two arrays
  //R --> alternate on each array and add them in order to a new array
  //E --> [1, 2, 3], [a, b, c, d] becomes [1, a, 2, b, 3, c, d]
  
  //p --> 
  // would not want to reduce anything
  //would not want to filter anything
  //for some reason i would not use a high order function for this.
  //arimthmentic? no math is being used.
  // a loop? 
  // it looks like we are going to be inserting the  alternated indexes into a new array
  //to concatenate two arrays =  ...arr / but not sure if we neeed to concatenate.
  
  