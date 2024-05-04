let a=[4,3,2]
let reduceEx=a.reduce((a,b)=>{
return a+b
})
console.log(reduceEx)
let reducEx=a.map((a,b)=>{
    return a+b
    })
    console.log(reducEx)
    
    // synchorous and asynchorous

    let newPromise= new Promise((res,rej)=>{
        if(4>7){
            res("yes its corrext")

        }else{
              rej("its wrong")
        }
    }) 
       
    newPromise.then((res)=>{
        console.log(res)

    }).catch((err)=>{
        console.log(err)
    })
    // console.log(newPromise)
    console.log("hello")

async function getDate() {
    try{
    let data=await newPromise
    console.log(date)

       } catch(e){
    console.log(e)
}
}

//class,constructor
let sub="react"
class nineAm{
    sub="angular"

    constructor(a) {
        this. sub=a;
    }

}
let newc1=new nineAm("is it")
console.log(newc1.sub)
console.log(sub)