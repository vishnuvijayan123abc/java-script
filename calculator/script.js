function performddition(){
    let num1=document.querySelector("#box1").value
    let num2=document.querySelector("#box2").value
    let result=Number(num1)+Number(num2)
    document.querySelector("#resultbox").innerHTML= `Addition result of ${num1}+${num2}= ${result}`}
function Performsub(){
    let num1=+box1.value
    let num2=+box2.value
    let result=num1-num2
    document.querySelector("#resultbox").innerHTML=`sub result of ${num1}-${num2}=${result}`


}  
function Performmul(){
    let num1=+box1.value
    let num2=+box2.value
    let result=num1*num2
    document.querySelector("#resultbox").innerHTML=`mul result of ${num1}*${num2}=${result}`
} 

function Performdiv(){
    let num1=+box1.value
    let num2=+box2.value
    let result=num1/num2
    document.querySelector("#resultbox").innerHTML=`div result of ${num1}/${num2}=${result}`
}
