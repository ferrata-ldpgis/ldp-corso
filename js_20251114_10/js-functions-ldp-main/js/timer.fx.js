//Dichiarazione variabili con scope globale
let elapsedMilli = 0;
let elapsedSeconds = 0;
let elapsedTimerID;


function startTimer(event) {

	console.log(event.target);
	console.log(event.currentTarget);

	elapsedTimerID = setInterval(() => {

		elapsedMilli = elapsedMilli + 33;

		if (elapsedMilli >= 1000) {
			elapsedMilli = 0;
			elapsedSeconds++;
		}

		document.getElementById("msg").innerText = `Trascorsi: ${elapsedSeconds}s ${elapsedMilli.toPrecision(3)}ms`;

	}, 33); //30fps = 1s / 30 = 33ms
}
function stopTimer(event) {
	clearInterval(elapsedTimerID);
}

function resetTimer(event) {
	elapsedMilli = 0;
	elapsedSeconds = 0;

	document.getElementById("msg").innerText = `Timer fermo`;
}