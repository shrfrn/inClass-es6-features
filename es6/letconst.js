'use strict'

var a = 9
a = 11

// console.log('a: ', a)

// 1 - Changing const is not allowed:
const num = 9
// num = 11

// 2 - const is shallow, this works fine:
const nums = [4, 8]

nums.push(11)
nums.splice(1, 1)

// ...but changing the pointer is not allowed:
// nums = [3, 5]
// console.log(nums)

// Again -  const is shallow, this works fine:
const pet = { name: 'Bobi', age: 4 }

pet.age++
pet.score = 100

// ...but changing the pointer is not allowed:
// pet = null
// console.log(pet)

// 3 - Differences between var, let & const

// Global vars defined by "var" get hoisted to the entire file
// Local vars defined by "var" get hoisted to the entire function
// The minimal scope of "var" is the whole function

// let & const are never hoisted 
// let & const are recognized only in the scope in which they were defined
// let & const can't be redefined in the same scope

// func1()
function func1() {
    const y = 10
    if (true) {
        {
            var x = 10      // Change x to let and see whats happens
            // var y = 100
            const y = 100
        }
    }
    console.log('X:', x)
    console.log('Y:', y)
}

// func2()
function func2() {
    {
        const name1 = 'Puki'
        {
            let boo = true
            const name1 = 'Muki'
            console.log('name1:', name1)
        }
        console.log('name1:', name1)
    }
    console.log('name1:', name1)
    // console.log('typeof:', typeof name1)
}

// This var decleration will get hoisted (not the assignment)
// var gg = 90

// func3()

function func3() {
    {
        let x = 9
        {
            // let x = 'bamia' // okay, block scoped name
            
            // const x = "sneaky" // error, x already defined in this scope
            // x = "foo" // won't work if x is a const
            console.log(x)
        }
        // x = 10
        console.log(x)

        // The last line will cause an error, 
        // becuase x is already defined in this block

        // let x = "inner"
    }
}