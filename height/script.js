let interval;
function start(){
    interval=setInterval(getrandonumbers,500)
}



function getrandonumbers(){
  
  
  let boxes=document.querySelectorAll(".box")
  for (let b of boxes){
    let height=Math.floor(Math.random()*1000)
    b.style.width=`${height}px`;
    b.style.height=`${height}px`;
   }

 

}



function stop(){
    clearInterval(interval)
}
