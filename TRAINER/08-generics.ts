function identity<T>(arg: T): T { return arg; }
let output = identity<string>("myString");
output = String(identity<number>(3));


// extending
const addFullNameToPersonAndItsAncestors = <T extends { firstName: string; lastName: string}>(obj: T) => {
    return {...obj, fullName: obj.firstName + " " + obj.lastName}
}

const personWithFullName = addFullNameToPersonAndItsAncestors({firstName: "Max", lastName: "Müller", age: 25});
/* 
Neu gebildeter Datentyp: 

const personWithFullName: {
    firstName: string;
    lastName: string;
    age: number;
} & {
    fullName: string;
} */

// KeyOf
// const addFullNameToPersonAndItsAncestors2 = <keyof { firstName: string; lastName: string}>(obj: 'firstName' | 'lastName') => {
    // return {...obj, fullName: obj.firstName + " " + obj.lastName}
// }

function getProperty<T, K extends keyof T>(obj: T, key: K) { return obj[key]; }

let newTransportMittel2 = new Transport('modellString', 300000, 250);

// let returnOfProp = getProperty<Transport, string>(newTransportMittel2, "modell")

// function getKeyOfs<T>(obj: T) {
//     type neu = keyof T;
//     let varbl: neu
//     return typeof neu;
// }