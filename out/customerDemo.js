var Customer = /** @class */ (function () {
    function Customer(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    Customer.prototype.GetCustomerDetails = function () {
        console.log("Hello " + this.firstName + "!");
    };
    return Customer;
}());
var c = new Customer("John", "Smith");
c.GetCustomerDetails();
//# sourceMappingURL=customerDemo.js.map