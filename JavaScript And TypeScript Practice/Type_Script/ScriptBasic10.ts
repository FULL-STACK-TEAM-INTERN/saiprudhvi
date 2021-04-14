let email : string = "prudhvi@gmail.com";
let password : string = "asdfasdf";

 if (password == "asdfasdf" && email == "prudhvi@gmail.com") {
 	console.log('You are authorized');
 } else {
 	console.log('Permission denied');
 }

if (password == 'asdfasdf' || password == 'zxcvzxcv') {
    	console.log('You are authorized');
 } else {
	console.log('Permission denied');
}

 if(!(email == 'test@test.com')) {
	console.log('You are authorized');
}