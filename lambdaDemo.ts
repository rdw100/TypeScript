// function
var multiply = function (
    a: number,
    b: number,
) : number { 
    return a * b;
}

// lambda function
var multiplyLambda = (a: number, b: number) => a * b; 

// declared lambda function
var declaredFunction : (a: number) => void;

declaredFunction = function(a: number) {
    console.log(a);
}

console.log(multiply(9,9));
console.log(multiplyLambda(9,9));
declaredFunction(81);