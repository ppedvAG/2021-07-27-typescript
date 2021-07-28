// Union
// Variablen vom angegebenen Datentyp werden entweder 
// alle Werte vom Typ string oder 
// alle Werte vom Typ Date oder 
// alle Werte vom Typ number akzeptieren
type stringDateNamberUnion = string | Date | number;

function giveDate(dateArg: stringDateNamberUnion): Date | string {
    if (typeof dateArg === 'string') {
        return new Date(dateArg);
    } else if (dateArg instanceof Date) {
        return dateArg;
    } else if (typeof dateArg === 'number') {
        return new Date(dateArg);
    }
    return 'param war kein gültiges Date, string oder number'
}

console.log("giveDate('20-07-2021') :>> ", giveDate('2021-07-20'));
console.log(" giveDate(new Date()) :>> ", giveDate(new Date()));
console.log(" giveDate(new Date()) :>> ", giveDate(100000000000));


// Intersection
// Damit lassen sich Eigenschaften von mehreren Datentypen / Strukturen in einem neuen Datentyp vereinen
interface Metall {
    wert: number;
    // farbe: string;
}

interface Stein {
    // farbe: string;
    alter: number;
}

type metallSteinIntersection = Metall & Stein;

let element: metallSteinIntersection = {
    // farbe: 'braun', 
    wert: 100, 
    alter: 1000}

// das gleiche Ziel könnte man auch mit einer Klasse erreichen:

class ChemischesElement implements Metall, Stein {
    wert: number = 0;
    alter: number = 0;
}
