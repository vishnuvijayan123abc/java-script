var num=1634
var n=num
var digitlen=String(num).length
var sum=0

while(num!=0){
    let digit=num%10
    let pow=digit**digitlen
    sum=sum+pow
    num=Math.floor(num/10)
}
console.log(sum);

// if (sum==n){
//     console.log(`${n} is amstrong`);
// }
// else{
//     console.log(`${n} is not amstrong`);
// }
console.log(sum==n?"anstrong":"not amstrong");
