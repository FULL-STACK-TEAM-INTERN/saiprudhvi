var Invoice = /** @class */ (function () {
    function Invoice(name, city, state, owner) {
        this.name = name;
        this.city = city;
        this.companyProfile = name + ", " + city + ", " + state + ", " + owner;
    }
    return Invoice;
}());
var googleInvoice = new Invoice('Google', 'Mountain View', 'TN');
var yahooInvoice = new Invoice('soft', 'SF', 'AP', 'sai');
console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);
