import { addQuote, deleteQuote, updateQuote, getAllQuotes } from "./quote.js";
// Lesson 3 - Events Starter

let quotes = [];

// Select DOM elements
const quoteList = document.getElementById("quote-list");
const form = document.getElementById("quoteForm");
const contentInput = document.getElementById("content");
const authorInput = document.getElementById("author");
const idInput = document.getElementById("quoteId");
const randomBtn = document.getElementById("randomBtn");
const randomDisplay = document.getElementById("randomQuoteDisplay");

function createQuoteElement(quote) {
	// a quote element example
	//<section id="quote-list">
	//  <div data-id="1">
	//    <p>x` from discipline and training</p>
	//    <p>Robert</p>
	//    <button class="edit-btn" data-id="1">
	//      Edit
	//    </button>
	//    <button class="delete-btn" data-id="1">
	//      Delete
	//    </button>
	//  </div>
	// </section>
	const quoteDiv = document.createElement("div");
	quoteDiv.setAttribute("data-id", quote.id);

	const quoteContent = document.createElement("p");
	quoteContent.textContent = quote.text;

	const quoteAuthor = document.createElement("p");
	quoteAuthor.textContent = quote.author;

	const quoteBtnEdit = document.createElement("button");
	quoteBtnEdit.textContent = "Edit";
	quoteBtnEdit.setAttribute("class", "edit-btn");
	quoteBtnEdit.setAttribute("data-id", quote.id);

	const quoteBtnDel = document.createElement("button");
	quoteBtnDel.textContent = "Delete";
	quoteBtnDel.setAttribute("class", "delete-btn");
	quoteBtnDel.setAttribute("data-id", quote.id);

	quoteDiv.appendChild(quoteContent);
	quoteDiv.appendChild(quoteAuthor);
	quoteDiv.appendChild(quoteBtnEdit);
	quoteDiv.appendChild(quoteBtnDel);

	return quoteDiv;
}

// Add, edit, delete quote functions

function addQuoteToDOM(quote) {
	const newQuote = createQuoteElement(quote);
	quoteList.appendChild(newQuote);
}
function updateQuoteInDOM(quote) {
	const quoteDiv = document.querySelector(`[data-id="${quote.id}"]`);
	if (!quoteDiv) return;
	const [quoteContent, quoteAuthor] = quoteDiv.querySelectorAll("p");
	quoteContent.textContent = quote.content;
	quoteAuthor.textContent = quote.author;
}
function deleteQuoteFromDOM(id) {
	const quoteDiv = document.querySelector(`[data-id="${quote.id}"]`);
	if (quoteDiv) {
		quoteDiv.remove();
	}
}
function renderQuotes() {
	quoteList.innerHTML = "";

	const allQuotes = getAllQuotes();

	allQuotes.forEach((quote) => {
		const quoteElement = createQuoteElement(quote);
		quoteList.appendChild(quoteElement);
	});
}
function showRandomQuote() {
	const allQuotes = getAllQuotes();

	const randomIndex = Math.floor(Math.random() * allQuotes.length);
	const content = allQuotes[randomIndex].content;
	const author = allQuotes[randomIndex].author;

	randomDisplay.innerHTML = `"${content}" — ${author}`;
}

// Event listeners for form submission, edit, and delete clicks
randomBtn.addEventListener("click", (e) => {
	e.preventDefault();
	showRandomQuote();
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const content = contentInput.value.trim();
	const author = authorInput.value.trim();

	const editingId = form.dataset.editingId;

	if (editingId) {
		const updated = updateQuote(Number(editingId), content, author);
		updateQuoteInDOM(updated);
		delete form.dataset.editingId;
	} else {
		const newQuote = addQuote(content, author);
		addQuoteToDOM(newQuote);
	}

	contentInput.value = "";
	authorInput.value = "";
});

quoteList.addEventListener("click", (e) => {
	const target = e.target;
	const id = Number(target.dataset.id);
	if (!id) return;

	if (target.classList.contains("edit-btn")) {
		const allQuotes = getAllQuotes();
		const quote = allQuotes.find((q) => q.id === id);
		if (!quote) return;
		contentInput.value = quote.content;
		authorInput.value = quote.author;

		form.dataset.editingId = id;
	}

	if (target.classList.contains("delete-btn")) {
		const sure = confirm("Do you want to delete this quote?");
		if (!sure) return;

		deleteQuote(id);
		const div = document.querySelector(`[data-id="${id}"]`);
		if (div) div.remove();
	}
});

window.addEventListener("DOMContentLoaded", () => {
	renderQuotes();
});