// Write your function here
function computeAverageLengthOfWords (word1, word2) {
    let word1L = word1.length;
    let word2L = word2.length;
    let average = (word1L + word2L)/2;
    return average;
};

let output = computeAverageLengthOfWords('code', 'programs');
console.log(output);