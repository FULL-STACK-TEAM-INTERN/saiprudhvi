// Function expression
var employeeName : (firstName : string, lastName : string) => string;

employeeName= function(firstName : string, lastName : string) {
	return firstName + " " + lastName;
}
console.log(employeeName('Sai', 'Prudhvi'));


// Immediately invoked version
(function(first : string, last : string) {
	console.log(first + " " + last);	
})('Raj', 'Kumar');

console.log(employeeName('Siva', 'Sai'));