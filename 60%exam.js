let a="webmaster"
 let b=a.split("")
//  console.log(b);
 let c=b.sort()
//  console.log(c);
 let d=c.join("")
 console.log(d);


function  getvowels(str) {
    var vowelsCount=0;
    var string=str.toString();
    for(var i=0;i<str.length;i++){
        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            vowelsCount += 1; 
    }
}
    return vowelsCount;
}
console.log(getvowels("the quick brown fox"));


const mySentence = "write a javascript program";
const words = mySentence.split(" ");

 let upperwords=words.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
}).join(" ");

console.log(upperwords);



