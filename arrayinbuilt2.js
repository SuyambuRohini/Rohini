let arr=[2,4,5,67,8]
arr.fill(14,0,2)
console.log(arr)

// let resmap=arr.map((a)=> {
//     return a+5;
// })
// console.log(resmap)


// let resmap=arr.map((a,i)=> {

//     console.log(i)
//     return a+5;
// })

// let resmap=arr.map((a,i,arri)=> {
//     console.log(i)
//     console.log(arri)

//     return a+5;
// })
// console .log(resmap)


// let resfilter=arr.filter((a)=> {
//     return a>8;

// })

// console.log(resfilter)

// let resfilter=arr.filter((a,i,arr1)=> {
//     return arr1.indexOf(a)==arr1.lastIndexOf(a);
// })
// console.log(resfilter)


// let findfilter=arr.find((a,i,arr1)=> {
//     return arr1.indexOf(a)!=arr1.lastIndexOf(a);
// })
// console.log(findfilter)

// let ressome=arr.some((a,i,arr1)=> {
//     return arr1.indexOf(a)!=arr1.lastIndexOf(a);
// })
// console.log(ressome)

// let ressome=arr.some((a,i,arr1)=> {
//     return a>66;
// })
// console.log(ressome)

let ressome=arr.every((a,i,arr1)=> {
    return arr1.indexOf(a)!=arr1.lastIndexOf(a);
})
console.log(ressome)
console.log(".....................................")

let arr2=[4,5,6,[12,13,14,[5,6,7,7,[51,6,7]]]]

console.log(arr2.flat(3))


// let resflat=arr2.flatMap((e) => {
//     return [e*2]
// })
// console.log(resflatmap)
let resflatmap=arr.flatMap((e) => {
    return [e*2]
})
console.log(resflatmap)













