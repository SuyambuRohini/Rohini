let word="this is testing purpose"

let result=""
let arrofwords=word.split(" ")
console.log(arrofwords)

for(let i=0;i < arrofwords.length;i++) {

for(let j=0;j<arrofwords[i].length;j++) {
    if(j%2!==0) {
        result+=arrofwords[i].charAt(j).toUpperCase()
    }  else {
        result+=arrofwords[i].charAt(j)

    } 
    }
//    if( arrofwords[i].charAt(0)==arrofwords[i].charAt(0).toUpperCase()) {
//    result+=arrofwords[i].charAt(0).toLowerCase()+arrofwords[i].slice(1)
// } else {
//     result+=arrofwords[i].charAt(0).toUpperCase()+arrofwords[i].slice(1)
// } 

result+=" "
}
console.log(result)


