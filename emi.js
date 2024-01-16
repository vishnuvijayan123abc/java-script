var loanamount=200000
var interest=9
var tenure=20


var r=interest/12
var i=r/100
var n=tenure*12


var oneplusi=(1+i)**n
var emi=(loanamount*i*oneplusi)/(oneplusi-1)
// emi=(loanamount*i*(1+i)**n)/(1+i)**n-1
console.log(Math.round(emi))
