var students : string[] = ['Sai', 'Prudhvi', 'Prasad','Ram'];
var counter : number = 0;

(function() {
	for (let name in students) {
		counter++;
	}
})();

console.log(counter)