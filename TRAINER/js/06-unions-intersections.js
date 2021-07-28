"use strict";
function giveDate(dateArg) {
    if (typeof dateArg === 'string') {
        return new Date(dateArg);
    }
    else if (dateArg instanceof Date) {
        return dateArg;
    }
    else if (typeof dateArg === 'number') {
        return new Date(dateArg);
    }
    return 'param war kein gültiges Date, string oder number';
}
console.log("giveDate('20-07-2021') :>> ", giveDate('2021-07-20'));
console.log(" giveDate(new Date()) :>> ", giveDate(new Date()));
console.log(" giveDate(new Date()) :>> ", giveDate(100000000000));
let element = {
    // farbe: 'braun', 
    wert: 100,
    alter: 1000
};
// das gleiche Ziel könnte man auch mit einer Klasse erreichen:
class ChemischesElement {
    constructor() {
        this.wert = 0;
        this.alter = 0;
    }
}
