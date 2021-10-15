https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript

Define a function that removes duplicates from an array of numbers and returns it as a result.

function distinct(a) {
    let array = [...new Set(a)]
    return array;
  }
  
  //parameters --> ( array of num)
  //return --> removesDuplicates ([1,1,2]), [1,2])
  //examlple --> function removesDuplicates(array of numbers){
  //let uniqueChars = [...new Set(array of numbers)];
  //return uniqueChars
  
  
  
  //Test Test.assertSimilar(distinct([1]), [1]);
  
  //let a = ([1,1,2]), [1,2])