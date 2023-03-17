function pickWord() {
  const words = ['computer', 'javascript', 'notebook', 'coffee', 'tesla', 'work', 'tea', 'money'];
  return words[Math.floor(Math.random() * words.length)];
}
function setupAnswerArray(word) {
  const answerA = [];
  for (let i = 0; i < word.length; i++) {
    answerA[i] = ' _ ';
  }
  return answerA;
}
function showPlayerProgress(answerArray) {
  alert(answerArray.join(' '));
}
function getGuess() {
  numberRemaining--;
  return prompt(
    `Вгадайте букву, чи нажміть Скасувати для вихода із ігри. У вас ${numberRemaining} спроб, щоб вгадати!`
  );
}
function updateGameState(guess, word, answerArray) {
 let newCorrect = 0;
  for (let j = 0; j < word.length; j++) {
    if (word[j] === guess.toLowerCase() && answerArray[j] === ' _ ') {
      answerArray[j] = guess.toLowerCase();
      newCorrect++;
    }
  }
  return newCorrect;
}
function showAnswerAndCongratulatePlayer(answerArray) {
  if (numberRemaining > 0) {
    alert(answerArray.join(' '));
    alert('Супер! Було загадано слово ' + word);
  } else {
    alert('Нажаль ви програли!');
  }
}

const word = pickWord();
console.log(word);
const answerArray = setupAnswerArray(word);
let remainingLetters = word.length;
let numberRemaining = 11;
while (remainingLetters > 0 && numberRemaining > 0) {
  showPlayerProgress(answerArray);
  const guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert('Уведіть будь ласка одну букву');
  } else {
    let correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
}
showAnswerAndCongratulatePlayer(answerArray);