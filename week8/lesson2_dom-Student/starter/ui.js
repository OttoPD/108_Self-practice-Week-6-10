import { addQuote } from "./quote.js";

// Step 1: Create an array to hold quote objects
let quotes = [];

// Step 2: Select the DOM element where quotes will be rendered
const quoteList = document.getElementById("quote-list");

function addNewQuote(content, author) {
	const newQuote = addQuote(content, author);
	quotes.push(newQuote);
}

// Step 3: Define a function called renderQuotes()
// This function should:
// - Clear the quoteList element
// - Loop through the quotes array
// - For each quote, create a <p> element with content and author
// - Append each <p> to quoteList

function renderQuotes() {
    quoteList.innerHTML = ""
	quotes.forEach((value) => {
        const pElement = document.createElement("p");
        pElement.textContent = `"${value.content}" — ${value.author}`
        quoteList.appendChild(pElement)
    });
}

// Step 4: Add test quotes manually and call renderQuotes()
// Example:
addNewQuote("Stay hungry, stay foolish.", "Steve Jobs");
renderQuotes();