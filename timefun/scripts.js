function generaterandomnumbers(){
   console.log(Math.floor(Math.random()*100));
}
let intr=setInterval(generaterandomnumbers,500)
// setTimeout(generaterandomnumbers,500)

function stop(){
    clearInterval(intr)
}

setTimeout(stop,5000)