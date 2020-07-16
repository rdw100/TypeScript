function patient(value) {
    switch (typeof value) {
        case "string":
            return "My name is " + value + ".";
        case "number":
            return "My age is " + value + ".";
        case "boolean":
            return value ? "I'm registered." : "I'm not registered.";
    }
}
console.log(patient('Mark'));
console.log(patient(42));
console.log(patient(true));
//# sourceMappingURL=overloadDemo.js.map