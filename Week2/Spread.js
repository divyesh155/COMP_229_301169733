var myval= Math.max(1,2,3,4,5,6);
console.log(myval);

var myObj ={}

Object.assign(myObj, {a:1, b:2, c:3}, { x:9, y:10, z:10});
console.log(myObj);

function sum(a,b) { return a+b; }
console.log(sum(99,100,11));

function sumRest (...b){ //Rest operator = Changes arguments into arrays.
    let sum=0;
    for(const arg of b){
        sum=sum+arg;
    }
    return sum;
    }
console.log(sumRest(3,4,3));

var myArray = [5,4];
console.log(sum(myArray)); //without Spread operator
console.log(sum(...myArray)); //Spread Operator = changes array into arguments.