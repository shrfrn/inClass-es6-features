'use strict'

// --- In a regular function: 

// The value of 'this' is dynamic — depends on how the function is called.
// A regular function call to func() is actually window.func()
// this === window

// But with student.func1(), this === student

// In strict mode: this === undefined

// --- In an arrow function:

// The value of 'this' is static — it's "locked in" 
// based on where the arrow function was defined in the code

// The value of 'this' in an arrow function is determined by 
// where the function is defined, not where it's called.

// It inherits 'this' from the enclosing scope.
// Note that an object definition is not a scope, 
// it's just the same symbols {} used for scope definition

// Arrow functions don’t have their own this, 
// and strict mode doesn't change how this is inherited. 
// They always inherit this from their lexical scope.

// Never use arrow functions as object methods 
// when you need 'this' to refer to the object.

function func() {
    console.log('Hi from global function...')
    console.log(this)
    // console.log(this.name)
}

var student = {
    name: 'Dov',

    // function reference
    func1: func,
    
    // function expression
    func2: function () {
        console.log('Hi from function reference')
        console.log(this)
    },
    
    // arrow function
    func3: () => {
        console.log('Hi from arrow function')
        console.log(this)
    },
    
    // Method definition
    func4() {
        console.log('Hi from method function')
        console.log(this)
    },
}

// func()
student.func3()