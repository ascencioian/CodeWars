//https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript

//The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used). If the score < 0, return 0.

function checkExam(array1, array2) {
    let score = 0;
    for (let i = 0 ; i<array1.length ; i++){
       if (array1[i] === array2[i]){
        score+= 4
         console.log(score + "went up by 4")
      }else if (array1[i] !== array2[i] && array2[i] !== ''){  //if array one does not equal array two and array two is empty
        score-= 1
         console.log(score + "went down by 1")
      }else{   //all other options
        score+= 0
        console.log(score + "did not change")
      }
      
    }
  if( score<0 ){
     score= 0
     }    //if score is negative turn score to 0
  console.log(score)
  return score
}

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])