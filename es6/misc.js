function createPerson(fullName='Muki', score=parseInt(Math.random()*100), val=fullName.length) {
    return {
        id : 'p101',
        // Object properties shortcut:
        fullName,
        score,
        val
    }
}
// console.log('Person', createPerson())

// Returns a real Array:

Array.from(document.querySelectorAll('*')) 
// console.log('Also:', [...document.querySelectorAll('*')])

// func(1, 2, 3)

function func() {
    console.log(Array.from(arguments));
    // console.log([...arguments]);
}