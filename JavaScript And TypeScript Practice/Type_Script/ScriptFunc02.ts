function printAddress(street: string, streetTwo?: string, state = 'TN\n') {
	console.log(street);
	if (streetTwo) {
	console.log(streetTwo);
}
	console.log(state);
}
console.log("//First");
 printAddress('Chennai');
 console.log("//Second");
 printAddress('Chennai', 'Kelambakkam');
 console.log("//Third");
 printAddress('Chennai', 'Kelambakkam', 'AP\n');

function cricketMatch(team: string, ...players: string[]) {
	console.log('Team: ' + team);
	for (let player of players) {
		console.log(player);
	}
}
//cricketMatch('India', ['Dhoni', 'Virat', 'Rohith']);
cricketMatch('India', 'Dhoni', 'Virat', 'Rohith');