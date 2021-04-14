var x1 : number = 0;

while (x1< 10) {
    console.log(x1);
    x1++;
}

let players1 : number[] = [3, 10, 4, 5, 1];

// for in
console.log("For/In");
for (let player in players1) {
   console.log(player);
}

// for of
console.log("For/Of");
for (let player of players1) {
   console.log(player);
}