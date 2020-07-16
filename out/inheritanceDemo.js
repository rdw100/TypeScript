var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(first, last, email, age) {
        this.first = first;
        this.last = last;
        this.email = email;
        this.age = age;
    }
    Person.prototype.getStatus = function () {
        console.log(this.first + " is a patient.");
    };
    return Person;
}());
var Mother = /** @class */ (function (_super) {
    __extends(Mother, _super);
    function Mother(firstName, lastName, email, age, registered) {
        var _this = _super.call(this, firstName, lastName, email, age) || this;
        _this.registered = registered;
        return _this;
    }
    Mother.prototype.getStatus = function () {
        _super.prototype.getStatus.call(this);
        console.log(this.first + " is " + (this.registered ? 'registered.' : 'not registered.') + " ");
    };
    return Mother;
}(Person));
var mother = new Mother('Jane', 'Smith', 'test@test.com', 30, true);
mother.getStatus();
//# sourceMappingURL=inheritanceDemo.js.map