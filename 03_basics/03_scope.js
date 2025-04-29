//  global variable
 let a=100
 const b=200
 
 if(true){
    // scope variable
    let a=200
const b=9
// var cannot be scope variable
var c=10
}
console.log(a)
console.log(b)
// console.log(c)


function one (){
         const username="Rituraj"
         console.log()

         function two(){
            const age=18
            console.log(username)
         }
        //  console.log(age)

         two()
}
one()


if(true){
    const username="sprite"
    if(username==="sprite"){
        const website= "google.com"
        console.log(username + " "+ website)
    }

    // cannot access website beacuse website is not defined as global variable
    // console.log(website)

}
// cannot access username beacuse username is not defined as global variable
// console.log(username)

// Can access 'value' before initialization
console.log(counting(5))
function counting(num){
    return num+11
}

// Cannot access 'value' before initialization

const value=function(number){
    return number+2
}
console.log(value(2))


