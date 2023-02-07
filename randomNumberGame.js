function randomNumber(){
let num;
let times = 0;
let timer = setInterval( function()
  {num= Math.random();
  times++;
  if (num > .75){
    clearInterval(timer);
    console.log('It took '+ times + ' tries!');
  }
},1000)
}

randomNumber();