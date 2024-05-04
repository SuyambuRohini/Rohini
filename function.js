function evenno(a) {
    if(a%2==0){
        console.log("even number")
       
    }
}
// console.log(evenno(12));
evenno(15);
// es6

// arrow function
const evennum=(a) =>{
    if(a%2==0){
        console.log("even number")
    }
}   
evennum(18);

// anonymous or iife(imidiate invoked)

let anonymous=(function(){
    console.log("when i am calling")
}())


function evennumber(a){
    let res=0;
    for(let i=0;i<4;i++){
        res+= a+i;
    }
    return res;

}
let result = evennumber(15);
console.log(evennumber(12))
console.log(result)


// function evennumber(a){

// let res=0;
//     for(let i=0;i<a.length;i++){
//         res+=parseInt(a[i])+i;


//     }
//     return res;
// }


// let result = evennumber("401");
// console.log(evennumber("402"))
// console.log(result)


let date = new Date()
console.log(date)

console.log(date.getDate())
console.log(date.getMonth())

date.setMonth(7);
date.setHours(date.getHours()+5)
console.log(date)

let formattedDate=date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
console.log(formattedDate)


let str="The lines are printed in reverse order";
let obj={}
let lengthofword=0;
    let word="";

for(let i=0;i<str.length;i++){
        word+= str[i];

    if(str[i]==" ") {
        lengthofword=word.trim().length
        obj[word]=lengthofword;
        lengthofword=0;
        word=""
    }
}
console.log(obj)