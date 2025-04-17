const myArr=[6,7,8,90,29]
console.log(myArr)

const players=["dhoni" ,"virat", "rohit" ]
console.log(players)

const newArray=new Array(1,2,3,4,5,6,7,8,9);
console.log(newArray)

// array method
newArray.push(0)
console.log(newArray)
newArray.pop()
newArray.pop()
console.log(newArray)
newArray.unshift(100)
console.log(newArray)
newArray.shift()
console.log(newArray)

console.log(newArray.includes(0))
console.log(newArray.indexOf(5))

const newestArray =newArray.join();
console.log(newestArray)
console.log(typeof newestArray)

// slice and splice
console.log("A" ,newArray)
const ny1=newArray.slice(2,5)
console.log(ny1)

console.log("B" ,newArray)
const ny2=newArray.splice(2,5)
console.log(ny2)