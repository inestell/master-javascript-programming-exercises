function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
  let lengthSum = word1.length + word2.length + word3.length;
  return lengthSum;
};

let output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output);