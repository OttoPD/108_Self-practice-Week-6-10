const input = document.getElementById("keyInput");
const keyLog = document.getElementById("keyLog");

input.addEventListener("keydown", function (event) {
	const p = document.createElement("p");

	p.textContent = `Key pressed: ${event.key}`;

	if (event.key === "Enter") {
		p.style.color = "blue";
	} else {
		p.style.color = "black";
	}

	keyLog.appendChild(p);
});