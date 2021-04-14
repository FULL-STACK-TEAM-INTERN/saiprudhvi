interface User {
	email : string;
	firstName? : string;
	lastName? : string;
}

function profile(user: User) : string {
	return `Welcome, ${user.email}`;
}

var realUsers = {
	email: 'prudhvi@test.com'
};

console.log(profile(realUsers));