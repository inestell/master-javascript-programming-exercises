// Write your function here
function isOddLength(word) {
    let wordLength = word.length;
    if(wordLength % 2 !== 0) return true;
    else return false;
}
let output = isOddLength('special');
console.log(output);