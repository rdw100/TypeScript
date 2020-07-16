// inferred object literal
var circle = {
    pi: Math.PI,
    radius: 15,
    area: function () { return (this.pi) * this.radius * this.radius; }
};
console.log("area of a circle = " + circle.area());
var newSquare = {
    side: 20,
    area: function () { return this.side * this.side; }
};
console.log("area of a square = " + newSquare.area());
//# sourceMappingURL=literalDemo.js.map