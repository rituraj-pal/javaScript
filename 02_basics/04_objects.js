// const Instagram= new Object()
// console.log(Instagram);

const Instagram={}
// console.log(Instagram)

Instagram.Id="123456"
Instagram.name="Rituraj"
Instagram.isLoggedIn=true

// console.log(Instagram)

const regularUser={
    email: "prituraj2015@gmail.com" ,
    fullname : {
        userFullName: {
            firstname: "rituraj",
            lastname: "pal"
        }
    }
}
// console.log(regularUser.fullname.userFullName.firstname)

const obj1={
    1: "a",
    2: "b"
}
const obj2={
    3: "a",
    4: "b"
}
const obj3={
    5: "a",
    6: "b"
}

// console.log({},obj1,obj2) 

// const obj4=Object.assign(obj1,obj2)
// console.log(obj4)

const obj4= {...obj1, ...obj2,...obj3}
console.log(obj4)

console.log(Instagram)
console.log(Object.keys(Instagram))
console.log(Object.values(Instagram))
console.log(Object.entries(Instagram))

console.log(Instagram.hasOwnProperty('isLoggedIn'))

const course=
{
   "name": "js in hindi",
   "price" : "999",
   "courseinstructor" : "hitesh chaudhary"
}
console.log(course.courseinstructor);

const {courseinstructor} =course
console.log(courseinstructor)

// api call
{
    "name": "js in hindi",
   "price" : "999",
   "courseinstructor" : "hitesh chaudhary"

}

[
    {},
    {},
    {}
]