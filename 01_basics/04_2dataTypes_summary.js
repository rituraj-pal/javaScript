// primitive dataTypes
// 7 types: number ,String ,null, BigInt, undefined,symbol,boolean

const score=78
const scoreValue=100.78

const loggedIn=false;
const outSideTemp=null;
let userEmail;

const id= Symbol('123')
const anotherId=('123')

console.log(id==anotherId)

const bigNumber=1234834678523645435647547n

// reference (Non-primitive)
//  array ,object ,function

const heros= [ "bheem" ,"raju" ,"nobita"]

let myObj={
 name :"rituraj",
    age :18,
}

const myFunction=function(){
    console.log("hello World")
}

console.log(heros)


console.log("***************************************************************************");

// stack(Primitive) ,heap (Non-Primitive)

let youtubename="riturajbhaijii"
let anothername=youtubename
 anothername="bhaijio"

 console.log(youtubename);
 console.log(anothername);


 let userOne={
    email : "rituraj@gmail.com",
    upi : "paytmdotcom"
 }

 let  userTwo=userOne
 userTwo.email="hiteshbhai@gmail.com"

 console.log(userOne.email)
 console.log(userTwo.email)

//  console.log(userOne)
//  console.log(userTwo)