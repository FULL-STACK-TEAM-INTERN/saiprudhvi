class Invoice {
	companyProfile : string;

	constructor(public name, public city:string, state:string, owner?:string) {
		this.companyProfile = name + ", " + city + ", " + state+", "+owner;
	}
}

var googleInvoice = new Invoice('Google', 'Mountain View', 'TN');
var yahooInvoice = new Invoice('soft', 'SF', 'AP','sai');


console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);