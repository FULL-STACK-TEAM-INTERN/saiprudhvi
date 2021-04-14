class Report {
	companyProfile : string;

	constructor(public name : string) {
		this.companyProfile = name;
	}
}

class Company extends Report {
  constructor(public name : string, public total : number) { super(name); }

  printInvoice() {
  	return this.name + ", " + this.total;
  } 
}

class Company1 extends Report {
	constructor(public name : string, public city : string, public state : string) { super(name); }

	printBol() {
  	return this.name + ", " + this.city + ", " + this.state;
  } 
}

var invoice = new Company('Google', 200);
var bol = new Company1('Google', 'Scottsdale', 'AZ');

console.log(invoice.printInvoice());
console.log(bol.printBol());