// Accept an unknown number of parameters
function addWithRest(num1: number, num2: number, ...numbers: number[]) : number {
    let result = num1 + num2;

    for (let i = 0; i< numbers.length; i++) {
        result += numbers[i];
    }

    return result;
}

let restAnswer = addWithRest(0,1,1,2,3,5,6,13,21,34);

console.log(restAnswer);