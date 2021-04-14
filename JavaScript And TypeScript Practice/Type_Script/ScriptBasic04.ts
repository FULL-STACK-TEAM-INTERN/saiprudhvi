// Boolean
let paidAccount1 : boolean = true;

// Number
let age: number = 33;
var taxRate : number = 7.5;

// String
var fullName : string = "Sai Prudhvi";

// Array
var ages : number[] = [33, 28, 11];

// Tuple
let cricket: [number, string, number, number];
cricket = [3, 'Virat', .333, 33];

// Enum
enum stage{writtenRound, technicalRound , hrRound};
let job : stage = stage.technicalRound;
console.log(job);//1

// Any
var apiData : any[] = [123, 'Jordan', false];

// Void
function printOut1(msg: string) : void {
	console.log(msg);
}