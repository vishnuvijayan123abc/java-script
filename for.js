// for(let i=100;i>=50;i--){
//     console.log(i);
// }



// var n1=12
// var n2=24
// var min=n1<n2?n1:n2
// var gcd=0

// for(i=2;i<=12;i++){
//     if(n1%i==0 && n2%i==0){
//         gcd=i
//     }

// }
// console.log(gcd);


var num=14
var is_prime=true

for(let i=2;i<num;i++){
    if (num%i==0){
        is_prime=false
        break
    }

}
console.log(is_prime);