function addAddends(first: number, second: number, third: number = 0) : number {
    let total = first + second + third;
    return total;
}

let sum: number = addAddends(7, 25, 40);
console.log(`Adding 3 numbers ${sum}`);

sum = addAddends(7, 25);
console.log(`Adding 2 numbers ${sum}`);