'use strict'

// Object destructuring
// 1 - Basic assignment

var info = { age: 42, score: 55, isAdmin: true }
var { age, isAdmin } = info
// console.log(`age: ${age}, isAdmin: ${isAdmin}`)

// 2 - Destructuring function parameters

// foo1(info)
// foo2(info)

function foo1(obj) {
    console.log(`foo1: age: ${obj.age}, isAdmin: ${obj.isAdmin}`)
}

function foo2({ age, isAdmin }) {
    console.log(`foo2: age: ${age}, isAdmin: ${isAdmin}`)
}

// 2 - Destructuring with defualt values

// j & k are being given default values
// ...but j is being overriden by assignment

const obj = { score: 8, isActive: true }
var { score = 10, age = 5 } = obj
// console.log(`score: ${score}, age: ${age}`)

// 3 - Renaming properties

const pet1 = {
    name: 'Charli',
    age: 5,
}

const pet2 = {
    // name: 'puki',
    age: 6,
}

var { name: petName, age: petAge } = pet1
// console.log(`petName: ${petName}, petAge: ${petAge}`)

// 4 - Renaming properties + default values

var { name: petName = 'Arik', age: petAge } = pet2
// console.log(`petName: ${petName}, petAge: ${petAge}`)

// 5 - More examples

// printAge(pet1, pet2)

function printAge({ name }, { age }) {
    // age = 8
    // console.log(`age: ${age}, name: ${name}`)
}

// Assignment without declaration needs paranthesis:
var s1, s2
({ s1, s2 } = { s1: 1, s2: 2 })
// console.log('s1, s2: ', s1, s2)

// Array Destructuring
// 1 - Basic syntax

var a, b
[a, b] = [11, 22, 33, 4, 5]
// console.log(`a: ${a}    b: ${b}`)

var [c, d] = [11, 22, 33, 4, 5]
// console.log(`a: ${c}    b: ${d}`)

// 2 - Swapping variables

var x = 6
var y = 2

// Must use semicolon here if not defining the vars here:
;[x, y] = [y, x]
// console.log(`x: ${x}    y: ${y}`)

// 3 - Ignoring some of the array's values

var [i, , , j] = [11, 22, 33, 44, 55]
// console.log(`i: ${i}    j: ${j}`)

// 3 - Taking the ...rest into an array

var [m, n, ...rest] = [1, 2, 3, 4, 5]
// console.log('Result:', m, n, rest)