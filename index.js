document.addEventListener('DOMContentLoaded', () => {
	const deadline = '2023-01-01 00:00:00';

	function getTimeRemaining(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date()),
			days = Math.floor(t / (1000 * 60 * 60 * 24)),
			hours = Math.floor((t / (1000 * 60 * 60)) % 24),
			minutes = Math.floor((t / (1000 * 60)) % 60),
			seconds = Math.floor((t / 1000) % 60);

		return {
			total: t,
			days, hours, minutes, seconds
		};
	}

	function getZero(num) {
		return (num >= 0 && num < 10) ? `0${num}` : num;
	}

	function setTimer(selector, endtime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateTimer, 100);

		updateTimer();

		function updateTimer() {
			const t = getTimeRemaining(endtime);

			if (t.total <= 0) {
				clearInterval(timeInterval);
				days.textContent = '00';
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';
				return;
			}
			days.textContent = getZero(t.days);
			hours.textContent = getZero(t.hours);
			minutes.textContent = getZero(t.minutes);
			seconds.textContent = getZero(t.seconds);
		}
	}

	setTimer('.timer', deadline);
});