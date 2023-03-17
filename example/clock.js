let totalMinutes = 0;
let hours = Number.parseInt(totalMinutes / 60);

let minutes = totalMinutes - hours * 60;

let totalHours = `${String(hours).padStart(2, '0')}:${String(minutes).padEnd(2, '0')}`;

function areArray(arrFirst, arrSecond) {
    if (arrFirst.length !== arrSecond.length) {
        return false;
    }
    for (i = 0; i <= arrFirst.length; i++) {
        if (arrFirst[i] !== arrSecond[i]) {
            return false;
        }
        return true;
    }
}

let innerText = document.getElementById('form_title');
console.log(innerText.innerHTML);
let newText = prompt("Уведіть новий текст.");
innerText.innerHTML = newText;