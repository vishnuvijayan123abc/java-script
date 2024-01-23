// var language=["python","java","c++","js"]
// console.log(language[1]);

// for(i=0;i<language.length;i++){
//     console.log(language[i]);
// }


// language[1]="php" //update
// language.push("c#")// add last
// language.unshift("c") // add starting point
// language.pop()//remove last element from array
// language.shift() //remove the first element
// language.reverse()
// console.log(language);

var arr=[10,11,20,21,30,31,40,41,50,51]

var squares=arr.map((n)=>n**2)
var cube=arr.map((n)=>n**3)
console.log(squares);
console.log(cube);



var even=arr.filter((n)=>n%2==0)
console.log(even);
var greater=arr.filter((n)=>n>40)
console.log(greater);
var totalsum=arr.reduce((n1,n2)=>n1+n2)
console.log(totalsum);
var maxnum=arr.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(maxnum);
var minnum=arr.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(minnum);
var srt=arr.sort((n1,n2)=>n2-n1)
console.log(srt);
var srt1=arr.sort((n1,n2)=>n1-n2)
console.log(srt1);