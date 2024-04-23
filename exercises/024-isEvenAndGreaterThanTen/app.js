// Write your function here
function isEvenAndGreaterThanTen(num) {
    if(num <= 10) return false;
    else if (num % 2 !== 0) return false;
    else return true;
};
let output = isEvenAndGreaterThanTen(13);
console.log(output);