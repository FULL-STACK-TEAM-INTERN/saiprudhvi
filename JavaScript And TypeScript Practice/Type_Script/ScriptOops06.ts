// Loosely connected Interface with Class
interface User {
	email: string;
	firstName? : string;
	lastName? : string;
}

class Admin1 {
	role : string;
	constructor(public email : string) {
		this.role = email;
	}
	
}

function profile2(user: User) : string {
	return `Welcome, ${user.email}`;
}

var prudhvi= new Admin1('Prudhvi@gmail.com');
console.log("ADMIN"+" : "+prudhvi.role);


