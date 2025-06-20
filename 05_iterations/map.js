const Mynums=[1,2,3,4,5,6,7,8]
let newNumber=Mynums.map((number)=>{
    return number*10
})
console.log(newNumber)

 newNumber=Mynums.map((number)=> number*10).map((number)=>number+1).filter((number)=> number>40)
console.log(newNumber)