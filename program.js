// var text="Quick brown fox jumped over the lazy dogs"
// var text1="abcdefghijklmnopqrstuvwxyz"
// var t2=text.toLowerCase()

// var ispanagram=true

// for (let ch of text1){
    
    
//     if (t2.indexOf(ch)==-1){
//         ispanagram=false
//         break

        
//     }
// }
// console.log(ispanagram);


// var firststring="ABC"
// var SecondString="PQR"
// var a=""
// var smallest=firststring.length<SecondString.length?firststring:SecondString
// var largest=firststring.length>SecondString.length?firststring:SecondString
// for(let i=0;i<smallest.length;i++){
//      a=a+firststring[i]+SecondString[i]
// }
// if(smallest.length!=largest.length){
//     a+=largest.slice(smallest.length,)
//     console.log(a);
// }
// else{
//     console.log(a);
// } 


// var a="malayalam"
// var b=""
// var len=a.length-1
// for (i=len;i>=0;i--){
//     let chr=a[i]
//     b+=chr
 

// }
// console.log(a==b?"yes":"no");
var a="malayalam"
var reversedstring=a.split("").reverse().join("")
console.log(a==reversedstring?"palindrome":"no");




