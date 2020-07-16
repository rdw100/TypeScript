function sumAddends(first, second, third) {
    var total = first + second;
    if (third != undefined) {
        total += third;
    }
    return total;
}
var answer = sumAddends(14, 23, 30);
console.log("Adding three numbers: " + answer);
answer = sumAddends(14, 23);
console.log("Adding two numbers: " + answer);
//# sourceMappingURL=optionalDemo.js.map