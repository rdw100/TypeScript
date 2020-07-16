function evaluateEquality(value: number) 
{
    console.log(" a == 10 " + (value == 10));
    console.log(" a === 10 " + (value === 10));
    let stringValue = value.toString();
    console.log(" a == 10 " + (stringValue == "10"));
    console.log(" a === 10 " + (stringValue === "10"));
}

evaluateEquality(10);