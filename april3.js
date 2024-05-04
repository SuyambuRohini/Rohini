"use strict"

// let a;
d=56;
var d;
console.log(d)
  
console.log(isNaN('12'))
console.log(isNaN(true))
// true is mention value 1 so this is a number(display false)
console.log(typeof null)
console.log(typeof undefined)

let obj={
    name: "rohini",
    class: "second",
    name1:"okrk"

}

console.log(Object.entries(obj));
let arr=Object.entries(obj)
for(let i=0;i<arr.length;i++) {
        if(arr[i][1]=="second"){
           console.log(console.log(arr[i][0]))
        }
    }


    // if(4 instanceof Number){
        // console.log("hello num");
    // }

// shallow copy and deep copy
let a={c:"ab",b:{a:4}}
let b={...a}
console.log(b)
b.b.a="ba"
console.log(b)
console.log(a);


