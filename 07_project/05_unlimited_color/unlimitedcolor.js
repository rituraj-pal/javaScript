const randomNumber=function(){
    const hex='0123456789ABCDEF'
    let color='#' ;
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color
}
// console.log(randomNumber)

let setValue
const startChangingColor=function(){
    if(!setValue){
        setValue= setInterval( changeBGC,1000);
    }
  function changeBGC(){
      document.body.style.backgroundColor=randomNumber();
  }
};
document.querySelector('#start').addEventListener('click',startChangingColor)


document.querySelector('#stop').addEventListener('click',
function stopBGC(){
    console.log("I STOPPED")
  clearInterval(setValue);
  setValue=null;
}

)