interface Bloodwork {
    hematocrit: number;
    hemoglobin: number;
    hctTest(s: Sex, percent: number): string;
    hgbTest(s: Sex, grams: number): string;
}

enum Sex {
    male,
    female
}

class Medical implements Bloodwork {
    public hematocrit: number;
    public hemoglobin: number;

    constructor(
        hematocrit: number,
        hemoglobin: number
    ) { 
        this.hematocrit = hematocrit;
        this.hemoglobin = hemoglobin
    }
    
    hctTest(s: Sex) : string {
        if ((s == Sex.male) && (this.hematocrit >= 41 && this.hematocrit <= 50)) {
            return 'Normal levels of hematocrit for men range from 41% to 50%.';
        } else if ((s == Sex.female) && (this.hematocrit >= 36 && this.hematocrit <= 48)) {
            return 'Normal level for women is 36% to 48%.';
        }
        return 'Abnormal hematocrit.';  
    }

    hgbTest(s: Sex) : string { 
        if ((s == Sex.male) && (this.hemoglobin >= 13.5 && this.hemoglobin <= 17.5)) {
            return 'Normal hemoglobin for men ranges from 13.5 to 17.5 g/dL.';
        } else if ((s == Sex.female) && (this.hemoglobin >= 12.0 && this.hemoglobin <= 15.5)) {
            return 'Normal range for women is 12.0 to 15.5 g/dL.';
        }
        return 'Abnormal hemoglobin.'; 
    }
}

let b = new Medical(41, 14);
let resultHct: string = b.hctTest(Sex.male);
let resultHgb: string = b.hgbTest(Sex.male);
console.log(resultHct);
console.log(resultHgb);