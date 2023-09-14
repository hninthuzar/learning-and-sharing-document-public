const Person = {
	name: "HTZ",
	age: 26,
	showName() {
		console.log(this.name)
	},
	showAge() {
		const self = this;
		console.log(self.age)
	}
}

Person.showName(); 
Person.showAge();
// this is class


function Person2(name, age) {
	this.name = name;
	this.age = age;
	this.showName = () => {
		console.log(this.name)
	}
}
const person = new Person2("Hnin Hnin", 26);
person.showName();  // this is constructor\

//
class PersonCon {
	constructor(name) {
		console.log("constructor", name)
	}
}
let p = new PersonCon("main htz")
class People extends PersonCon {
	constructor(name) {
		super(name)
		console.log("People constructor")
	}
}
let people = new People(" people htz ");
///
const personLiteral = (name) => {
	let prefix = "mr";
	return {
		[prefix+name]: name
	}
}
console.log(personLiteral("htz"))

// for of => show value / for in => show index

const name = "htz";
for (n of name) { // value
	console.log("for of " + n);
}
for (n in name) { // index
	console.log("for in " + n);
}

// 

const personPromise = new Promise((resolve, reject)=>{
	// resolve({name : 'htz', promise: true});
	reject("Error ")
})
personPromise.then(result => console.log(result))
.catch(error => console.log(error))


//find unique by reduce method

let numbers = [1, 1, 2, 3, 4, 4, 5, 2];
let uniqueArray = numbers.reduce((uniqueNumber, number)=>{
	if(uniqueNumber.indexOf(number) === -1) {
		uniqueNumber.push(number)
	}
	return uniqueNumber
}, [])

console.log(uniqueArray)

let numberSort = numbers.sort((a, b)=> {return b-a});  // 5, 4, 3, 2, 1
console.log(numberSort)