//https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/javascript

// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task

// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
// Notes

//     Array/list will contain positives only .
//     Array/list will always has even size

// Input >> Output Examples

// minSum({5,4,2,3}) ==> return (22) 

// Explanation:

//     The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22

// minSum({12,6,10,26,3,24}) ==> return (342)

// Explanation:

//     The minimum sum obtained from summing each two integers product , 26*3 + 24*6 + 12*10 = 342

// minSum({9,2,8,7,5,4,0,6}) ==> return (74)

// Explanation:

//     The minimum sum obtained from summing each two integers product , 9*0 + 8*2 +7*4 +6*5 = 74

//p --> minSum({5,4,2,3})
//R -->  ==> return (22) 
//E --> minSum({9,2,8,7,5,4,0,6}) ==> return (74)
// you need to filter out  the highest number in an array
//you need to slice out the lowest number in the array
//you need to multiply the two together
//you need to add the two togeteher
//you need to repeat this for each high and low
//you need to add everything in the end.

//you could sort the array by lowest to highest.
//you could then grab the first and last ones.
//multiply them 

let arr = [9,2,8,7,5,4,0,6]


let minSum = arr => {
    let sum = 0
    const sortedArray = [...arr].sort((a, b) => a - b)
    console.log(sortedArray)
    for (let i = 0; i < sortedArray.length / 2; i++) {
      sum += sortedArray[i] * sortedArray[sortedArray.length - i - 1]
    }
    return sum
}

minSum()