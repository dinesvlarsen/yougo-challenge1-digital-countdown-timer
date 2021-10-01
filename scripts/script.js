'use strict';
const counterDom = document.querySelector('#countdown');

function reformatTime(time) {
	return String(time).padStart(2, 0);
}

function pasteTimerToDom(string) {
	counterDom.innerHTML = `<p>${string}</p>`;
}

function countDown() {
	let timeToConvert = Math.trunc(
		new Date('2021-10-30T12:59:00.501Z').getTime() - new Date().getTime()
	);
	let time = new Date(timeToConvert);

	const day = time.getDate();
	const hour = time.getHours();
	const min = time.getMinutes();
	const sec = time.getSeconds();

	let countDownString = `${reformatTime(day)} : ${reformatTime(
		hour
	)} : ${reformatTime(min)} : ${reformatTime(sec)}`;
	pasteTimerToDom(countDownString);
	timeToConvert -= 1000;
}

setInterval(countDown, 1000);
