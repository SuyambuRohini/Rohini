let a=[4,6,[6,7,[8,9]],true,"15",{name:"hello"}]
let arrflat=a.flat(4)
console.log(arrflat);

let res =0;
let rej=0;

for(let i=0;i<arrflat.length;i++)
if(arrflat[i]==true){
    res +=arrflat[i];

}else if(!isNaN(arrflat[i])){
    rej+=parseInt(arrflat[i]);
}
sum=res+rej;
console.log(sum)
