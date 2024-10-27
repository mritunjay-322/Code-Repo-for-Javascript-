// Primitive Datatype

// 7 Primitive Datatypes ->
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score =100
const score_value = 100.33
const isLoggedIn = true
const outsideTemp = null
let name;
 
const Id = Symbol('123')
const AnotherId = Symbol('123')

console.log(Id === AnotherId)

const bigNumber = 12365545697965689974652n

// Reference (Non-Primitive)
// Array, Objects, Functions

const heroes = ["shaktiman", "naagraz", "krishna aur balram"]   //Array

let myObjet = {                 // Object
    age: 47,
    name: "Shivansh",
}

const myFunction = function(){          // Function
    console.log("Hello World")
}

console.log(typeof outsideTemp)

//  Stack(Primitive) & heap(Non-Primitive)

let myName = "Mritunjay"
let anotherName = myName
anotherName = "Shiv"
console.log(myName);
console.log(anotherName);


let userOne = {
    email: "shiv@google.com",
    upi: "shiv@ybl"
}

let userTwo = userOne
userTwo.email = "mri@google.com"

console.log(userOne.email);
console.log(userTwo.email);
