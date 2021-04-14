function profile(user) {
    return "Welcome, " + user.email;
}
var realUsers = {
    email: 'prudhvi@test.com'
};
console.log(profile(realUsers))