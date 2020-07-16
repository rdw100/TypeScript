var phase;
(function (phase) {
    phase[phase["solid"] = 0] = "solid";
    phase[phase["liquid"] = 1] = "liquid";
})(phase || (phase = {}));
function getTemp(celsius) {
    return celsius > 32 ? phase.liquid : phase.solid;
}
var temp = getTemp(35);
switch (temp) {
    case phase.solid:
        console.log("The liquid is frozen solid.");
        break;
    case phase.liquid:
        console.log("The liquid is not frozen.");
        break;
}
//# sourceMappingURL=enumDemo.js.map