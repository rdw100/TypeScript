function randomInteger(min, max) {
    var input = Math.floor(Math.random() * (max - min + 1)) + min;
    var classify;
    if (input >= 0) {
        classify = "nonnegative";
    }
    else {
        classify = "negative";
    }
    classify = (input >= 0) ? "nonnegative" : "negative";
    console.log(classify);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var randomNumber = randomInteger(-1, 23);
console.log(randomNumber);
//# sourceMappingURL=ternaryDemo.js.map