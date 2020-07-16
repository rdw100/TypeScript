class Customer {
    public firstName: string;
    public lastName: string;

    constructor(
        first: string,
        last: string,
    ){
        this.firstName = first;
        this.lastName = last;
    }

    GetCustomerDetails() {
        console.log(`Hello ${this.firstName}!`);
    }
}

let c = new Customer("John", "Smith");
c.GetCustomerDetails();