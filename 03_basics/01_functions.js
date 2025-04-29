function sayMyNme() {
    console.log("R")
    console.log("I")
    console.log("T")
    console.log("U")
}
// sayMyNme()

function addTwoNumber(number1,number2){

        // console.log(number1+number2)
       let result =number1 +number2
       return result
}
// const result= addTwoNumber(3,4)
// console.log(result)

const result= addTwoNumber(3,4)
console.log("result=" ,result)

function loginUserName (username){

    if(username==undefined){
        console.log("plese enter a username")
        return;
    }
    return ` ${username} just loggedIn`
}
// console.log(loginUserName("rituraj"))
console.log(loginUserName())


