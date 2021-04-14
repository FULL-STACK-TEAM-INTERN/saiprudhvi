function printAddress(street, streetTwo, state) {
    if (state === void 0) { state = 'TN\n'; }
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
function cricketMatch(team) {
    var players = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        players[_i - 1] = arguments[_i];
    }
    console.log('Team: ' + team);
    for (var _a = 0, players_1 = players; _a < players_1.length; _a++) {
        var player = players_1[_a];
        console.log(player);
    }
}
//cricketMatch('India', ['Dhoni', 'Virat', 'Rohith']);
cricketMatch('India', 'Dhoni', 'Virat', 'Rohith');
