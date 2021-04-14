console.log(firstFullName('Sai', 'Prudhvi'));
// Function declaration
function firstFullName(first, last) {
    return first + " " + last;
}
// Function expression
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function (first, last) {
    return first + " " + last;
};
console.log(otherFullName('sai', 'prudhvi'));
console.log(thirdFullName('sai', 'prudhvi'));
