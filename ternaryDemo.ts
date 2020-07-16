function randomInteger(min: number, max: number) : number
{        
    let input: number = Math.floor(Math.random() * (max - min + 1)) + min;
    let classify: string;

    if (input >= 0)
    {
        classify = "nonnegative";
    }
    else
    {
        classify = "negative";
    }
    
    classify = (input >= 0) ? "nonnegative" : "negative";

    console.log(classify);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber: number = randomInteger(-1,23);
console.log(randomNumber);