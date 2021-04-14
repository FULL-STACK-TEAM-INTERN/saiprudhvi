// Function expression
var employeeName;
employeeName = function (firstName, lastName) {
    return firstName + " " + lastName;
};
console.log(employeeName('Sai', 'Prudhvi'));
// Immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})('Raj', 'Kumar');
console.log(employeeName('Siva', 'Sai'));
