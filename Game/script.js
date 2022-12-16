// 1. зробити клік по першій кнопці - ok

// 2. Збільшити лічильник на одиницю
// 2.1. збільшити лічильник-змінну - ok
// 2.2. змінити спан - ok

countClick = 0;
blockCount = document.querySelector('#count');

function btnClick() {
    countClick = countClick + 1;
    blockCount.innerText = countClick;
    console.dir(countClick);
}

btn2 = document.querySelector("#btn2");
btn2.onclick = function () {
    p2 = document.querySelector("#p2");
    p2.style.background = 'red';
}

audioGun = document.querySelector("#audioGun");
btn3 = document.querySelector('#btn3');

btn3.onclick = function () {
    audioGun.play();
}

