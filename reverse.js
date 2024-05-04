 function reverseString(str) {
    let reversed=" ";
    let reversesString=" ";
    for(let i=str.length-1;i>=0;i--){
        reversed+=str[i];

    }
    return reversed
 }
 const originalstring="hello word!";
 reverseString(originalstring);
 console.log(reverseString);