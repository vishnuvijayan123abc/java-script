// add
var add=(n1,n2)=>n1+n2
//sub
var sub=(n1,n2)=>n1-n2
//square
var square=(n1)=>n1**2
//mintow
var mintwo=(n1,n2)=>n1<n2?n1:n2
//maxtwo
var maxtwo=(n1,n2)=>n1>n2?n1:n2
//cube 
var cube=(n1)=>n1**3
//is even
var even=(n1)=> {
    if (n1 %2==0){
        return("true")

    }
    else{
        return false
    }
}


console.log(add(2,5));
console.log(sub(10,5));
console.log(square(2));
console.log(mintwo(5,10));
console.log(maxtwo(10,5));
console.log(cube(3));
console.log(even(5));