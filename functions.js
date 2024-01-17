// function maxtwo(num1,num2){
//     return num1>num2?num1:num2
// }

// console.log(maxtwo(10,20));

//console.log(add(10,20)); //hosting 
// function add(num1,num2){
//     return num1+num2
// }
// console.log(add(10,20)); 


// function nthdigit(num1,num2){
//     n1=num1%10
//     n2=num2%10
    
//     return n1>n2?num1:num2

// }
// console.log(nthdigit(127,870));



function isPrimeNum(num){
    let isPrimeNumber=true;
    for(let i=2;i<num;i++){
        if(num%i==0){
            isPrimeNumber=false;
            break;
        }
    }
    return isPrimeNumber
 }

 function nextPrimeNumber(num){
    let nextNum=num+1;
    while(!isPrimeNum(nextNum)){
        nextNum++;
    }
    return nextNum
 }

 console.log(nextPrimeNumber(14));






   




