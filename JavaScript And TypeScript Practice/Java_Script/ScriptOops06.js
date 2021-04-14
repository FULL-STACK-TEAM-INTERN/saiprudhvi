var Admin1 = /** @class */ (function () {
    function Admin1(email) {
        this.email = email;
        this.role = email;
    }
    return Admin1;
}());
function profile2(user) {
    return "Welcome, " + user.email;
}
var prudhvi = new Admin1('Prudhvi@gmail.com');
console.log("ADMIN" + " : " + prudhvi.role);