const greet = (name, formatter) => formatter(name);

const shout = (text) => text.toUpperCase() + "!!!";

const sayHi = (text) => `Hello ${text}`;

console.log(greet("Alice", sayHi));

const idGenerator = () => {
	let num = 0;
	return function idGen() {
		return ++num;
	};
};

const idGen = idGenerator();
console.log(idGen()); // 1
console.log(idGen()); // 2
console.log(idGen()); // 3

const outerFunction = (x) => {
	return function innerFuncion(y) {
		return x + y;
	};
};

const addFive = outerFunction(5);
console.log(addFive(3)); // 8
const addTen = outerFunction(10);
console.log(addTen(2)); // 12