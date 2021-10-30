//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]


var number=function(array){
    let number = 0
 
   for(i=0 ; i<array.length ; i++){
     number++
     array [i] =  number + ': ' + array[i]
   }
   return array
 }
 
 
 //p --> array of strings
 //r --> insert into each index of the array a numner that orders each index from 1 and up
 //e --> ["a", "b", "c"] => ["1: a", "2: b", "3: c"]
 //p -->
 //insterting 
 // index is a string
 //loop through each index
 //incrementer of ++ 
 // forEach item 
 //  length would represent the arrays length
 
 