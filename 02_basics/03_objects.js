// singleton
// object literals

const mysym= Symbol("key1")

const jsUser={
    name : "Rituraj" ,
    "Full name" : "Rituraj pal",
    [mysym] : "SINCE 2000",
    age: 18 ,
    email: "prituraj2015@gmail.com",
    isloggedIn : true,
    lastloggedIn :["thursday"]
}

console.log(jsUser.age);
console.log(jsUser["email"]);
console.log(jsUser["Full name"]);
console.log( jsUser[mysym]);
console.log( typeof jsUser[mysym]);

jsUser.email="banarsiaswagmusic33@gmail.com"
// Object.freeze(jsUser)
jsUser["Full name"]="paul jii"

console.log(jsUser)

jsUser.greeting=function () {
    console.log("hello my name is rakka");
}
jsUser.greeting1=function () {
    console.log(`hello my name is ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting);
console.log(jsUser.greeting1());



