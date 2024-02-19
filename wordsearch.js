const transpose = require('./transpose');

const wordSearch = (letters, word) => {

  // check valid, non-empty matrix
  // check that it has rows
  if (!Array.isArray(letters) || letters.length === 0) return false;
  // check that first row is Array
  if (!Array.isArray(letters[0])) return false;
  // check that the first row has cols
  const numCols = letters[0].length;
  if (numCols === 0) return false;





  //checking to see if each row is an array and has the same amount of chars
  for (const row of letters) {
    if (!Array.isArray(row) || row.length !== numCols) return false;
    for (const ele of row) {
      if (typeof ele !== "string" || ele.length > 1) return false;
    }
  }



  // look for the word backwards
  const reversedWord = word.split('').reverse().join('');

  const horizontalJoin = letters.map(ls => ls.join(''));

  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
    if (l.includes(reversedWord)) return true;
  }

  const transposedLetters = transpose(letters);
  const verticalJoin = transposedLetters.map(ls => ls.join(''));

  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
    if (l.includes(reversedWord)) return true;
  }

  return false;
};

module.exports = wordSearch;


// Lucas Stephenson and Thomas Azran collaborated on this pair programming exercise