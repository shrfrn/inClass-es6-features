'use strict'

// Expression bodies
var nums = [8, 3, 7, 10]
var odds = nums.filter(n => n % 2)
var mults = nums.map(n => n * n)

// Reducer needs to wrap returned object in prenthesis
var sum = nums.reduce((acc, n) => ({ total: acc.total + n }), { total: 0 })

// console.log('Odds: ', odds)
// console.log('Mults: ', mults)
// console.log('sum is: ', sum)

// Statement bodies
// nums.forEach(v => {
//   console.log('v is: ', v)
//   if (v % 5 === 0) console.log('devided by 5: ', v)
// })

// ********************************************
// Arrow function and 'this'
// ********************************************

// By default, the this of a global function is the window
// in strict mode it is set to undefined

// pooo()

function func1() {
    console.log(this)
    this.papa = 'rolling stone'
    return 17
}

var obj = {
    name: 'Albert',
    func: func1, // func1() is assigned to an object preperty
}

// obj.func() // When activated in the context of obj, this becomes obj
// console.log('obj', obj)
// console.log('External this', this)

var person = {
    fullName: 'Muki',
    age: 19,
    speak() {
        console.log('this inside speak() -', this)
        console.log(this.fullName + ' is Speaking')
        // var _this = this
        // the 'this' in arrow function is bound to the containing scope
        setTimeout(() => {
            console.log(this, this.fullName + ' is Speaking')
        }, 1000)
    },
}
// person.speak()

var bob = {
    _name: 'Bob',
    _friends: ['Puki', 'Muki'],
    printFriends(promo) {
        console.log(promo)
        console.log('this inside printFriends', this)
        // var that = this
        // In arrow functions the "this" is lexically bound
        this._friends.forEach(f => {
            // console.log('INSIDE FOREACH THIS', this)
            console.log(this._name + ' knows ' + f)
        })
    },
}
bob.printFriends('Tadam!')