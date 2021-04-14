function addNumber(firstNumber, secondNumber) {
    var name = "ADDITION OF TWO NUMBERS: ";
    function sum() {
        return name + (firstNumber + secondNumber);
    }
    //return sum();
    return sum;
}
var output = addNumber(50, 50)();
console.log(output);
//console.log(output());