'use strict'

var user1 = {
    name: "Shaul",
    score: 90,
    address: { city: 'Tel Aviv', street: 'Nahmani' },
    // ?pets: ['charlie', 'bobbi', 'rorri'],
}

// Pointer assignment
var user2 = user1

// Shallow copy
var user3 = { ...user1 }

// Deep 'manual' copy
var user4 = { ...user1, address: { ...user1.address }}
// ?var user4 = { ...user1, address: { ...user1.address }, pets: [...user1.pets]}

// Deep copy
var user5 = JSON.parse(JSON.stringify(user1))
var user6 = structuredClone(user1)