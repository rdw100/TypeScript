// Accept an unknown number of parameters
function addWithRest(num1, num2) {
    var numbers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        numbers[_i - 2] = arguments[_i];
    }
    var result = num1 + num2;
    for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}
var restAnswer = addWithRest(0, 1, 1, 2, 3, 5, 6, 13, 21, 34);
console.log(restAnswer);
//# sourceMappingURL=restDemo.js.map