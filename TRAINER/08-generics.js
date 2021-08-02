var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function identity(arg) { return arg; }
var output = identity("myString");
output = String(identity(3));
// extending types
var addFullNameToPerson = function (obj) {
    // oder:
    // const addFullNameToPersonAndItsAncestors = <T extends PersonType>(obj: T) => {
    return __assign({}, obj, { fullName: obj.firstName + " " + obj.lastName });
};
var personWithFullName = addFullNameToPerson({ firstName: "Max", lastName: "Müller", age: 25 });
/*
Neu gebildeter Datentyp:

const personWithFullName: {
    firstName: string;
    lastName: string;
    age: number;
} & {
    fullName: string;
} */
console.log('personWithFullName.fullName :>> ', personWithFullName.fullName);
// Hinter dem neu angelegten Datentyp 'transportKeys' steht ein Union aus den public Transport-Props. Ohne private Props!
// das heißt:
// 'istAn' | 'beschleunige' | 'bremse' | 'starteMotor' | 'stoppeMotor' | 'beschreibeMich'
var modellkey = 'beschleunige';
modellkey = 'istAn';
// Eine Methode wird angelegt, die einen Wert von einer Property von einem Objekt zurückgibt.
// Es ist nicht vordefiniert, welches Objekt es ist und welche Props es hat. Diese Parameter bleiben generisch.
function getProperty(obj, key) { return obj[key]; }
var newTransportMittel2 = new Transport('modellString', 300000, 250);
var returnOfProp1 = getProperty(newTransportMittel2, "istAn"); // false
var returnOfProp2 = getProperty(newTransportMittel2, "bremse"); // 
/* const giveValueFromProp = <T, K = keyof T>(obj: T, prop: K): T & 'fullName' => { // entspricht dem Typ: type T = 'firstName' | 'lastName'
    
    return {...obj, fullName: obj.firstName + " " + obj.lastName}
} */
// function getKeyOfs<T>(obj: T) {
//     type neu = keyof T;
//     let varbl: neu
//     return typeof neu;
// }
