// Write your function here
function isEvenLength(word) {
    let wordLength = word.length;
    if(word.length % 2 === 0) return true; 
    else return false;
}
let output = isEvenLength('wow');
console.log(output);