var books=[
    {title: 'Book1', body:'Java'},
    {title: 'Book2', body:'Jpa'}
]
var result = function() {
	setTimeout(() => {
		console.log('Query results');
	},3000);
    setTimeout(() =>{
        console.log('Sai Prudhvi');
    },1000);
    setTimeout(()=>{
        for(let book of books){
            console.log(book);
        }
    },1500);
    setTimeout(()=>{
        for (let index in books){
            console.log(index);
        }
    },500);
}

function loadPage(q : () => void) {
	console.log("Header");
	q();
	console.log("Sidebar");
	console.log("Footer");
}

loadPage(result);