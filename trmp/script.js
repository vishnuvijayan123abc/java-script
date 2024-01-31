function fconverter(){
    let num1=document.querySelector("#box1").value
    let num2=Number(num1)
   
    let result=(9/5*num2)+32
    // document.querySelector("#result").innerHTML=result
    box2.value=result
}
function ceconverter(){
    let num2=document.querySelector("#box2").value
    let num1=Number(num2)
    let result=(num1-32)*5/9
    // document.querySelector("#result1").value=result
    box1.value=result

}