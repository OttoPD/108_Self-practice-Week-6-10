const quotes = [];
let nextId = 1;
function addQuote(content, author) {
	const quote = {
		id: nextId++,
		content: content,
		author: author,
	};
	quotes.push(quote);
	if (quotes.includes(quote)) {
		return quote;
	}
	return undefined;
}

function deleteQuote(id) {
	const index = quotes.findIndex((crr) => crr.id === id);
	if (index !== -1) {
		return quotes.splice(index, 1)[0];
	} else {
		return -1;
	}
}

function updateQuote(id, content, author) {
	const index = quotes.findIndex((crr) => crr.id === id);
	if (index !== -1) {
		quotes[index] = { id, content, author };
		return quotes[index];
	} else {
		return undefined;
	}
}

function getAllQuotes() {
    const quote = [...quotes]
    return quote
}

// Test your functions below
// TODO: Add 3 quotes using addQuote()
console.log(addQuote("Stay hungry, stay foolish.", "Steve Jobs"));
console.log(addQuote("Do or do not. There is no try.", "Yoda"));
console.log(
	addQuote("Simplicity is the ultimate sophistication.", "Leonardo da Vinci")
);

// TODO: Delete 1 quote using deleteQuote()
console.log(deleteQuote(2));

// TODO: Update 1 quote using updateQuote()
console.log(updateQuote(1, "Stay hungry. Stay foolish.", "Jobs"));

// TODO: Print all quotes using getAllQuotes()
console.log(getAllQuotes())