'use strict'

// Spreading arrays
// 1 - SPREAD: Passes each element of an array as separate argument

var nums = [3, 7, 2]

var max = Math.max(...nums)
// console.log('EXPECTED: max=7, ACTUAL: max=', max)

var res = func1(...nums)
// console.log('EXPECTED: 12 ACTUAL:', res)

function func1(x, y, z) {
  return x + y + z    
}    

// 2 - Shallow copy - with SPREAD:

var copy = [...nums]
copy.pop()
copy[0]++

// console.log(nums)
// console.log(copy)

// 3 - Try with or without spreading the sent array

// func2(...[9, 5], 'shmupi')

function func2(...args) {    // ...rest
  console.log('args', args)
}

// Spreading objects
// 01 - Shallow Copy

var student = {
    name: 'Arik',
    age: 19,
    city: 'Ashkelon',
}

var studentCopy = { ...student }
var studentCopy = { ...student, balance: 100 }
var studentCopy = { ...student, age: 20 }
var studentCopy = { ...student, age: 21, city: 'Ashdod' }

// console.log(studentCopy)

const pet = { name: 'Bobbi', age: 3, nicknames: ['bob', 'doodoo'] }
const petCopy = { ...pet }

// console.log('petCopy: ', petCopy)

// 02 - Changing a value in the original

pet.age++
// console.log('pet: ', pet)
// console.log('petCopy: ', petCopy)

// 03 - Changing a referenced value in original

pet.nicknames.push('bobo')
// console.log('pet: ', pet)
// console.log('petCopy: ', petCopy)

const petCopy2 = { ...pet, nicknames: [ ...pet.nicknames ]}

pet.nicknames.push('yamyam')
// console.log('pet: ', pet)
// console.log('petCopy: ', petCopy2)

const students = [
    { name: 'Roni', score: 90 },
    { name: 'Moni', score: 83 },
    { name: 'Joni', score: 70 },
]

var copy = [...students]
copy.pop()
copy[0].score++

console.log(students)
console.log(copy)
