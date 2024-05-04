console.log("hello")

//variables let
let a=1;
console.log(a)
let b=15;
console.log(b)

// variables const
const c=1;
console.log(c)

//variables const and let
//  let f=25;
//  console.log(b)
let e=15;
 e=16;
 console.log(e)
 
 
 
 let r='rohini';
 console.log(r)

 let a1=[15,49,67]
console.log(a1)
console.log(a1[1])
a1[3]=33
console.log(a1)
a1[12]=55
console.log(a1)
console.log(a1[5])

let obj = {
    name:"aarthi",
    class:"second",
    
    
}
console.log(obj.class)
console.log(obj["name"])
obj["name"]="React"
obj.class="undo"
console.log(obj)
obj["name1"]="React"
console.log(obj)

console.log("-------------------")
// Object.freeze(obj)
obj["name1"]="Red"
Object.seal(obj)
obj["name2"]="React"
obj["name1"]="java"
console.log(obj)
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))













