'use strict';
const counterDom = document.querySelector('#countdown');

function getTime() {
	let time = new Date(renderTime());
	const day = time.getDate();
	const hour = time.getHours();
	const min = time.getMinutes();
	const sec = time.getSeconds();
	return [day, hour, min, sec];
}

function reformatTime(time) {
	return String(time).padStart(2, 0);
}

function pasteTimerToDom(string) {
	counterDom.innerHTML = `<p>${string}</p>`;
}

function renderTime() {
	return Math.trunc(
		new Date('2021-10-30T00:01:00.501Z').getTime() - new Date().getTime()
	);
}

function countdownStringCreator(day, hour, min, sec) {
	return `${reformatTime(day)} : ${reformatTime(hour)} : ${reformatTime(
		min
	)} : ${reformatTime(sec)}`;
}

function countDown() {
	pasteTimerToDom(
		countdownStringCreator(
			getTime()[0],
			getTime()[1],
			getTime()[2],
			getTime()[3]
		)
	);
}

pasteTimerToDom(
	countdownStringCreator(getTime()[0], getTime()[1], getTime()[2], getTime()[3])
);

setInterval(countDown, 1000);
