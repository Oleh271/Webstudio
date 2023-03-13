const words = ['computer', 'javascript', 'notebook', 'coffee', 'tesla', 'work', 'tea', 'money'];
const word = words[Math.floor(Math.random() * words.length)];

console.log(word);
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = ' _ ';
}
let remainingLetters = word.length;
let numberRemaining = 11;
while (remainingLetters > 0 && numberRemaining > 0) {
  alert(answerArray.join(' '));
  let guess = prompt('Вгадайте букву, чи нажміть Скасувати для вихода із ігри. У вас 10 спроб, щоб вгадати!');
  numberRemaining--;
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert('Уведіть будь ласка одну букву');
  } else {
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess.toLowerCase() && answerArray[j] === ' _ ') {
        answerArray[j] = guess.toLowerCase();
        remainingLetters--;
      }
    }
  }
}
if (numberRemaining > 0) {
  alert(answerArray.join(' '));
  alert('Супер! Було загадано слово ' + word);
} else {
  alert('Нажаль ви програли!');
}
