var person = {
	firstname: 'John',
	lastname: 'Doe',
	greet: function() {
		console.log('Hello, ' + this.firstname + ' ' + this.lastname);
	}
};

person.greet();

console.log(person['firstname']);
var greet = person['greet'];
greet();
console.log(person['greet']);
