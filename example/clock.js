let totalMinutes = 0;
let hours = Number.parseInt(totalMinutes / 60);

let minutes = totalMinutes - hours * 60;

let totalHours = `${String(hours).padStart(2, '0')}:${String(minutes).padEnd(2, '0')}`;