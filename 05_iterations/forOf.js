
// for of

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings="hello world"

for(const greet of greetings){
    // console.log(greet)
}

// maps ->  in this for of loop is used

const map= new Map()
map.set('INR' , "india")
map.set('USA',"united state of america")
map.set('JPY',"japan")

for(const key of map){
    console.log(key);
}
for(const [key,value] of map){
    console.log(key, ':-', value);
}