const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const message = document.querySelector("form p");
const button = document.querySelector('button[type=submit]')

button.addEventListener("click", function (e) {
	e.preventDefault();

	message.textContent = "";
	message.style.color = "";

	const userVal = username.value.trim();
	const emailVal = email.value.trim();
	const passVal = password.value.trim();
	const confirmPassVal = confirmPassword.value.trim();

	if (!userVal || !emailVal || !passVal || !confirmPassVal) {
		message.textContent = "All fields are required.";
		message.style.color = "red";
	} else if (passVal !== confirmPassVal) {
		message.textContent = "Passwords do not match.";
		message.style.color = "red";
	} else {
		message.textContent = "Account created successfully!";
		message.style.color = "green";
	}
});