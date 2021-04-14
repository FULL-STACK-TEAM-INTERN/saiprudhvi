var x1 = 0;
while (x1 < 10) {
    console.log(x1);
    x1++;
}
var players1 = [3, 10, 4, 5, 1];
// for in
console.log("For/In");
for (var player in players1) {
    console.log(player);
}
// for of
console.log("For/Of");
for (var _i = 0, players1_1 = players1; _i < players1_1.length; _i++) {
    var player = players1_1[_i];
    console.log(player);
}
