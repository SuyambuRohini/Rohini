let arr=[8,7,9]

arr.push(9)
console.log(arr)
arr.push(8,9)
console.log(arr)
arr.push([7,8])

console.log(arr)
arr.pop()
console.log(arr)
arr.unshift(15)
console.log(arr)
arr.shift()
console.log(arr)
console.log("-----------------------")

console.log(arr.slice(0,1))

arr.splice(1,1)
console.log(arr)

arr.splice(1,2,5,'k',6)
console.log(arr)


console.log(arr.indexOf(9))
console.log(arr.indexOf(8,5))
console.log("---------------------")

arr.copyWithin(2,1,2)
console.log(arr)
console.log(arr.join("%"))

console.log(arr.includes(5))

arr.sort((a,b)=>{
    return a-b
})
console.log(arr)





