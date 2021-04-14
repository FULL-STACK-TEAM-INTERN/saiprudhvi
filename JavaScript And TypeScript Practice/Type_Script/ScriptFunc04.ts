console.log(firstFullName('Sai', 'Prudhvi'));
;

// Function declaration
function firstFullName(first : string, last : string) : string {
	return first + " " + last;
}


// Function expression
var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last : string) {
	return first + " " + last;	
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
	return first + " " + last;	
}
console.log(otherFullName('sai', 'prudhvi'));
console.log(thirdFullName('sai', 'prudhvi'));