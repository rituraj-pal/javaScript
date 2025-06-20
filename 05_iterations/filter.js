const coding=["java","javascript","c++","python","react"]

const value=coding.forEach((item)=>{
    // console.log(item)
    return item;
})
// console.log(value)

// filter ->using

const mynums=[1,2,3,4,5,7,8,9]

// const newNums=mynums.filter((num)=>{
// return num>4
// })

// const newNums=mynums.filter((num)=> num>3)
// console.log(newNums)

// using for Each loop

const newNumber=[]
const newNums=mynums.forEach((item)=>{
    if(item>2){
        newNumber.push(item)
    }
})
console.log(newNumber)


const books=[
    {
        title: "Book One",
        genere:"Fiction",
        publish: 1981,
        edition:2004
    },
    {
         title: "Book two",
        genere:"Non-Fiction",
        publish: 1981,
        edition:2008
    },
    {
         title: "Book Three",
        genere:"History",
        publish: 2001,
        edition:2007
    }
]

const userBook=books.filter((kitab)=> kitab.genere="History" && kitab.publish>2000)
console.log(userBook)