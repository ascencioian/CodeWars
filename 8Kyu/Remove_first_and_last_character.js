https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    let result = str.slice(1, -1) 
    return result
  };
  