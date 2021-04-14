var books = [
    { title: 'Book1', body: 'Java' },
    { title: 'Book2', body: 'Jpa' }
];
var result = function () {
    setTimeout(function () {
        console.log('Query results');
    }, 3000);
    setTimeout(function () {
        console.log('Sai Prudhvi');
    }, 1000);
    setTimeout(function () {
        for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
            var book = books_1[_i];
            console.log(book);
        }
    }, 1500);
    setTimeout(function () {
        for (var index in books) {
            console.log(index);
        }
    }, 500);
};
function loadPage(q) {
    console.log("Header");
    q();
    console.log("Sidebar");
    console.log("Footer");
}
loadPage(result);
