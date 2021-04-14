// Boolean
var paidAccount1 = true;
// Number
var age = 33;
var taxRate = 7.5;
// String
var fullName = "Sai Prudhvi";
// Array
var ages = [33, 28, 11];
// Tuple
var cricket;
cricket = [3, 'Virat', .333, 33];
// Enum
var stage;
(function (stage) {
    stage[stage["writtenRound"] = 0] = "writtenRound";
    stage[stage["technicalRound"] = 1] = "technicalRound";
    stage[stage["hrRound"] = 2] = "hrRound";
})(stage || (stage = {}));
;
var job = stage.technicalRound;
console.log(job);
// Any
var apiData = [123, 'Jordan', false];
// Void
function printOut1(msg) {
    console.log(msg);
}