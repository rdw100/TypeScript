function sumAddends(first: number, second: number, third?: number): number 
{
    let total = first + second;
    if (third != undefined) 
    {
        total += third;
    }
    
    return total;
}

let answer = sumAddends(14, 23, 30);
console.log("Adding three numbers: " + answer);
answer = sumAddends(14, 23);
console.log(`Adding two numbers: ${answer}`);