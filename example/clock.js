let totalMinutes = 450;
let hours = Number.parseInt(totalMinutes / 60);
// hours.padStart(2, "0");
let minutes = totalMinutes - hours * 60;

let totalHours = `${hours.padStart(2, "0")}:${minutes}`;
