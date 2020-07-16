function anyDemo() {
    // Avoid unsafe type
    let variable: any;
    variable = 81;
    console.log(`Test variable is nummeric = ${variable}`);
    variable = "catalog run floppy";
    console.log(`Test variable is string = ${variable}`);
}

anyDemo();