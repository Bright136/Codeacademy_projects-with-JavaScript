const input = 'a whale of a deal!'
const vowels = ['a', 'e', 'i', 'o', 'u']
let resultArray = []
for (let i = 0; i < input.length; i++){
 // console.log(i)
 for (let j = 0; j < vowels.length; j++){
   if (input[i] === vowels[j]){
     resultArray.push(input[i])
   }
 }if (input[i] === 'e'){
     resultArray.push(input[i])
   }if (input[i] === 'u'){
     resultArray.push(input[i])
   }   //console.log(j) 
}
console.log(resultArray)
const resultString = resultArray.join('')
console.log(resultString.toUpperCase())
