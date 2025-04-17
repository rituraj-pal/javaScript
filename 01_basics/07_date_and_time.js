// dates

let myDate=new Date
console.log(myDate)
console.log(typeof myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

let createdDate=new Date(2003,6,22)
let newcreatedDate=new Date(2003,6,22,5,37)
console.log(createdDate.toDateString())
console.log(newcreatedDate.toLocaleString())

console.log("****************************************************************************")

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(newcreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate=new Date
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getDate())

//  ` & {newDate.getDay()} and the time &{newDate.getTime()} `

newDate.toLocaleString('default' , {
    weekday : 'long',
    timeZone :  'Asia/Kolkata'
});