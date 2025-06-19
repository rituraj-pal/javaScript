const userEmail="banarsiaswagmusci##@gmail.com"

if(userEmail){
    console.log("got user email")
}
else{
    console.log("don't have a email")
}

// falsy values
// false,0,-0,BigInt 0n, "",null,undefined,NaN

// truthy values
// "0",'false' ," ",[],{},function(){}

const AnyArray=[]
if(AnyArray.length===0){
    console.log("Array is Empty")
}

const emptyObj={}
if(Object.keys(emptyObj.length===0)) console.log("object is empty");


