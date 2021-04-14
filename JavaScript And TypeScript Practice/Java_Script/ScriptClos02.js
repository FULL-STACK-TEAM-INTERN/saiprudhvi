function battingLineUp() {
    var nextPosition = "BATTING POSITION: ";
    var currentPosition = "CURRENT BATTING POSITION: ";
    var strikerAndNonStriker = 2;
    function battingOrder() {
        console.log(currentPosition + strikerAndNonStriker);
        function nextBatsmen() {
            function nextBatters() {
                return {
                    next: function () { strikerAndNonStriker++; },
                    nextBatter: function () { return nextPosition + strikerAndNonStriker; }
                };
            }
            return nextBatters();
        }
        return nextBatsmen();
    }
    return battingOrder();
}
var batters = battingLineUp();
console.log("Virat: " + batters.nextBatter());
batters.next();
console.log("Pant: " + batters.nextBatter());
batters.next();
console.log("Iyer: " + batters.nextBatter());
