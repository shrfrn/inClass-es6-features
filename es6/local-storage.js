'use strict'

// 01 - Basics

localStorage.setItem('numOfApples', '3')
const numOfApples = localStorage.getItem('numOfApples')

console.log(numOfApples)

// 02 - Stringify arrays & objects

const pet = { 
    name: 'Bobbi', 
    age: 3, 
    nicknames: ['bob', 'doodoo'] 
}

// This will not work...

// localStorage.setItem('pet', pet)
// const petFromStorage = localStorage.getItem('pet')

// ...we need to stringify & parse

// var json = JSON.stringify(pet)
// localStorage.setItem('pet', json)

// jsonFromStorage = localStorage.getItem('pet')
// const petFromStorage = JSON.parse(jsonFromStorage)

// const students = [
//     { name: 'Arik', age: 10 },
//     { name: 'Palik', age: 10 },
//     { name: 'Malik', age: 10 },
// ]

// var json = JSON.stringify(students)
// localStorage.setItem('students', json)

// jsonFromStorage = localStorage.getItem('students')
// const StudentsFromStorage = JSON.parse(jsonFromStorage)

// Local Storage - Functional interface vs. dot notation
// When the key we are trying to retrieve doesn't exist...

var val = localStorage.getItem('babaPuki')
console.log('val: ', val) // returns null

var val = localStorage.babaPuki
console.log('val: ', val) // returns undefined

// When trying to use one of the LocalStorage objet's 
// predefined properties (There are six of these: 
// length, key, setItem, getItem, removeItem, and clear)

var val = localStorage.getItem('length')
console.log('val: ', val) // returns null - no such key in localStorage

var val = localStorage.length
console.log('val: ', val) // returns the number of entries in localStorage