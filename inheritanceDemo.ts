class Person {
    constructor(
        public first: string,
        public last: string,
        public email: string,
        private age: number
    ) { }

    getStatus() {
        console.log(`${this.first} is a patient.`);
    }
}

class Mother extends Person {
    constructor(
        firstName: string,
        lastName: string,
        email: string,
        age: number,
        private registered: boolean
     ) {
         super(firstName, lastName, email, age);
     }
     getStatus(){
         super.getStatus();
         console.log(`${this.first} is ${this.registered ? 'registered.' : 'not registered.'} `);
     }
}

let mother = new Mother('Jane', 'Smith', 'test@test.com', 30, true);
mother.getStatus();