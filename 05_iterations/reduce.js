const myNum=[1,2,3,4]

// const myTotal=myNum.reduce((acc,curr)=>acc+curr,0)
// console.log(myTotal)

const myTotal=myNum.reduce((acc,curr)=>{
    return acc+curr},
    0)
console.log(myTotal)

const shoppingCard=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"full stack dev",
        price: 6999
    }
]
const totalPrice=shoppingCard.reduce((acc,currPrice)=> acc+currPrice.price,0)
console.log(totalPrice)