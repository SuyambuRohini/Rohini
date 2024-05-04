let arr=[4,6,7,8]

for(let o of arr){
console.log(o);
}
let  obj= {
    name:"rohini",
    class:"frontend"

}
for(let a in obj){
    // if(a=="name")
    console.log(obj[a])
}


let c="hello java script"
console.log(c.split(" "))
console.log(c.split(""))
console.log(c.split("a"))
console.log(c.charAt(1))

console.log(c.indexOf("a",11))                    
// to check index value (a) ,11 mean 11 index skip  then find the letter a the value false to display -1
console.log(c.lastIndexOf("a"))
// lastindexof to check the index starts from end of the array but the index value mention in the first of array
console.log(c.search("a"))
// to display the index of letter
console.log(c.search(/A/i))
// search(/a/i)  i means in case sensitive not check uppercase and lowercase using (/A/i)  this method only not use double cotaition"
console.log(c.match("c")) 
console.log(c.match(/a/gi))
// // to find a how much times reapted the letter a using gi that means gobal case sensitive this method not display index value
console.log(c.match(/a/i).input)
// // to call this is object so put .index or input 
console.log(c.matchAll("a"))
// // normal folder name print akum + display method and function

// // this method to change array formatting
let d=c.matchAll("a")
console.log(Array.from(d))
// //  to display a ka array display pannum
console.log(Array.from(d)[0])
// // [0] this simple to remove the late index anthor one time to use [0] ne remove next index to display one a
 let l=[[1,2,3],[4,5,6]]
console.log(Array.from(l)[0][0])
// // this method (l) represented the arr [0] represented index of array [0]represented index 0 involved 0 value is diplay

console.log(c.slice(7))
// //  slice means cut the before index value balance value to display

console.log(c.slice(7,9))
// //  7 means before index value cutted 9 means before index value display (between 7 to 9) after value cutted

let t="hello js"
console.log(t.padStart(8,"i"))
// padstart means the array length is 5 but i declare 8 so starting time +3 add akum value kudutha athu varum(i) illa na irukura value la 3 repeated akum 
// , ka aporum irukathu letter kudukalana space vittu varum

console.log(t.padEnd(9,"o"))

// padstart means the array length is 5 but i declare 8 so ending time +3 add akum value kudutha athu varum(o) illa na irukura value la 3 repeated akum

const t1=" "
console.log(t1.length==0)


console.log(t1.trim().length==0)

console.log(t1.trim().length)

console.log(t1.length)

t=t.replace("js","javascript")
console.log(t)

t=t.replace(/js/i,"javascript")
console.log(t)

// console.log(t.endsWith("he",)
console.log(t.slice(-4,-1))

console.log(t.substring(4,13))

console.log(t.substr(5,4))

let t3=5;
console.log(t3.valueOf()+5)

// string to array

let sum1="A3B4C2"
// console.log(parseInt("3"))
let a="aa"
console.log(isNaN(a))

let result=""
for(let i=0;i<sum1.length;i++){
    let isCount=0;
    if( !isNaN(parseInt(sum1.charAt(i)))) {
      isCount=parseInt(sum1.charAt(i));

}
for(let j=0;j<isCount;j++){
    result+=sum1.charAt(i-1)
}
}
console.log(result)



















