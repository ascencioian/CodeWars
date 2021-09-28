//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.


function highAndLow(numbers){
    let splitNumbers= numbers.split(' ')
    //console.log(splitNumbers)
    let sortedNumbers = splitNumbers.sort(function(a, b){return a-b} )
    //console.log(sortedNumbers)
    let lowestNumber = sortedNumbers[0];
    //console.log(firstItem)
    let highestNumber = sortedNumbers[sortedNumbers.length-1];
    //console.log(lastItem)
    return( highestNumber, lowestNumber)
}
highAndLow("1 2 3 4 5")