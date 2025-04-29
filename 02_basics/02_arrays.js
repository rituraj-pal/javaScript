const Boy =["Rituraj" ,"Rahul", "Ashish" ,"Deepak"]
const girl=["Nehu" ,"Ruhi" ,"Supriya" ,"Anu"]
// Boy.push(girl)
// console.log(Boy);
console.log("**********************************")
Boy.push(girl[1])
console.log(Boy);

// Boy.concat(girl)
// console.log(Boy)
//   const together =Boy.concat(girl)
// console.log(together);

const allBoyGirl=[...Boy,...girl]
console.log(allBoyGirl);


const boyGirl=[2,5,6,8,[49,48,5,63,[0,1,2,3,4,[8,3,5,7,3]]]]
const numberBoyGirl=boyGirl.flat(Infinity)
console.log(numberBoyGirl)

console.log(Array.isArray("Rituraj"))
console.log(Array.from("Rituraj"))
console.log(Array.from(
   {
    name: "Rituraj"
   }))


   const score1=100
   const score2=100
   const score3=100
   console.log(Array.of(score1,score2,score3))
   