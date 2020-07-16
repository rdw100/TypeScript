var Sex;
(function (Sex) {
    Sex[Sex["male"] = 0] = "male";
    Sex[Sex["female"] = 1] = "female";
})(Sex || (Sex = {}));
var Medical = /** @class */ (function () {
    function Medical(hematocrit, hemoglobin) {
        this.hematocrit = hematocrit;
        this.hemoglobin = hemoglobin;
    }
    Medical.prototype.hctTest = function (s) {
        if ((s == Sex.male) && (this.hematocrit >= 41 && this.hematocrit <= 50)) {
            return 'Normal levels of hematocrit for men range from 41% to 50%.';
        }
        else if ((s == Sex.female) && (this.hematocrit >= 36 && this.hematocrit <= 48)) {
            return 'Normal level for women is 36% to 48%.';
        }
        return 'Abnormal hematocrit.';
    };
    Medical.prototype.hgbTest = function (s) {
        if ((s == Sex.male) && (this.hemoglobin >= 13.5 && this.hemoglobin <= 17.5)) {
            return 'Normal hemoglobin for men ranges from 13.5 to 17.5 g/dL.';
        }
        else if ((s == Sex.female) && (this.hemoglobin >= 12.0 && this.hemoglobin <= 15.5)) {
            return 'Normal range for women is 12.0 to 15.5 g/dL.';
        }
        return 'Abnormal hemoglobin.';
    };
    return Medical;
}());
var b = new Medical(41, 14);
var resultHct = b.hctTest(Sex.male);
var resultHgb = b.hgbTest(Sex.male);
console.log(resultHct);
console.log(resultHgb);
//# sourceMappingURL=interfaceDemo.js.map