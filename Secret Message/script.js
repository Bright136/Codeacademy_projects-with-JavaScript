let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// remove the last string of the array
secretMessage.pop()

// log the new length of the arrayu on the console
console.log(secretMessage.length)

//Add 'to' and 'Program' to the end of the array
secretMessage.push('to', 'Program')
console.log(secretMessage.length)

// Change the word 'easily' to 'right'
// First check the index of 'easily'
console.log(secretMessage.indexOf('easily'))
secretMessage[7] = 'right'

// Remove the first  item in the array and confirm 
secretMessage.shift()
console.log(secretMessage.length)

//  remove string and replace with a single string
  //1. get index for the first string, 'get'
console.log(secretMessage.indexOf('get'))
  //.2 get index for the last string, 'time'
console.log(secretMessage.indexOf('time,'))
secretMessage.splice(5, 5, 'know')
  //.3 Confirm changes 
console.log(secretMessage)
console.log(secretMessage.length)

// Use join to combine the strings in secretMessage
console.log(secretMessage.join())

