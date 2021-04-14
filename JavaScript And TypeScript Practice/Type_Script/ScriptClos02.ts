function battingLineUp() {//ist function
    var nextPosition: string="BATTING POSITION: ";
    var currentPosition: string="CURRENT BATTING POSITION: ";
	var strikerAndNonStriker : number = 2;

	function battingOrder(){// 2nd function

        console.log(currentPosition+strikerAndNonStriker);

	function nextBatsmen(){ // 3rd function

         function nextBatters(){// 4th function

            return{
                next(){strikerAndNonStriker++},
                nextBatter(){return nextPosition+strikerAndNonStriker}
            };
        }
        return nextBatters();
     }
	
    return nextBatsmen();
	}
    
    return battingOrder();
    
}

let batters = battingLineUp();
batters.next();
console.log("Virat: "+batters.nextBatter());
batters.next();
console.log("Pant: "+batters.nextBatter());
batters.next();
console.log("Iyer: "+batters.nextBatter());




