// if(true){
// }
// if(false){

// }

const isUserLoggedIn=true
if(isUserLoggedIn){
    // console.log("isuserloggedin is true")
}

// <,>,<=,>=,==,!=,===,!==

const temperature=51
if(temperature ===41){
    console.log("temperature is less than 50")
}
else{
    console.log("temperature is more than 50")
}

const score=200
if(score>100){
   const power ="fly"
   console.log(` user power: ${power}`)
}
// console.log(`user power: ${power}`);

const balance=1000
if(balance>500){
    console.log("sahi hai")
}
if(balance<500){
    console.log("less than 500")
}
else if(balance<750){
    console.log("less than 750")
}
else if(balance<900){
    console.log("less than 900")
}
else{
    console.log("less than 1200")
}

// logical operator

const isUserLogged=true
const debitCard=true
const loggedInFromEmail=true
if(isUserLogged && debitCard ){
    console.log("allow to buy a course")
}
if(loggedInFromEmail || loggedFromGoogle){
    console.log("user logged in")
}

// nullish coalescing operator

let val1;
// val1=5 ?? 10
// val1=null ?? 10
// val1=undefined?? 15
val1=null ?? 10 ??20
console.log(val1)

// ternary operator

// condition ? true: false
const iceCream=100
iceCream<=80 ? console.log("less than 80"):console.log("more than 80")
