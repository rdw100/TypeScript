enum phase{
    solid, 
    liquid
}

function getTemp(celsius: number): phase {
    return celsius > 32 ? phase.liquid : phase.solid;
}

let temp = getTemp(35);

switch (temp) {
    case phase.solid:
        console.log("The liquid is frozen solid.");
        break;
    case phase.liquid:
        console.log("The liquid is not frozen.")
        break;
}