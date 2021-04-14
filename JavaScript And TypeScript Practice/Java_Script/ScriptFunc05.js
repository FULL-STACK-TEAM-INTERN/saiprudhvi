var students = ['Sai', 'Prudhvi', 'Prasad', 'Ram'];
var counter = 0;
(function () {
    for (var name_1 in students) {
        counter++;
    }
})();
console.log(counter);