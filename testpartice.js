let arr=[2,4,6,8,10]
  let resmap=arr.map((a)=>{
    return a*2;
  })
console.log(resmap);

const user={
    name:'alice',
    age:'25',
    address:{
        city:'wonderland',
        country:'operation'
    }

}
console.log(user.name);
console.log(user.address.city);

const  number=[1,2,3,4,5]
let res= number.map((a)=>{
    return a*a
})
console.log(res);

console.log(x);
var x=5;
console.log(x);

let filternum=number.some((e)=>{
    return e>3;
})
console.log(filternum);
console.log(number);


const color=['red','green','blue']
for (let o of color){
    console.log(o);
}

let newPromise= new Promise((res,rej)=>{
    if(6>8){
        res("hello world")
    }else{
        rej("welcome")
    }
})
//  async function getDate(){
//     try{
//     let date=await newPromise
//     console.log(date)
//   } catch(e){
// console.log(e);
//   } 
// }
// async function getDate() {
//     try{
//     let data=await newPromise
//     console.log(date)

//        } catch(e){
//     console.log(e)
// }
// }

newPromise.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})


// let newPromise= new Promise((res,rej)=>{
//     if(4>7){
//         res("yes its corrext")

//     }else{
//           rej("its wrong")
//     }
// }) 
   
// newPromise.then((res)=>{
//     console.log(res)

// }).catch((err)=>{
//     console.log(err)
// })



