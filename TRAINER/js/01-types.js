"use strict";
console.info('\n ANY');
// ANY MIT TYPENANPASSUNG
var myAny; // ohne Datentypenangaben und ohne Initialisierung ist die Variable vom Typ 'any', der Datentyp wird bei der Zuweisung aber angepasst.
var myString1 = 'string1wert';
myAny = myString1;
console.log('typeof myAny: ', typeof myAny); // string, aber string ist es in js
var myNumber1 = 34;
// myNumber1 = myAny; // Type 'string' is not assignable to type 'number'.ts(2322)
// let myNumber1: number = myAny; // Type 'string' is not assignable to type 'number'.ts(2322)
// ANY FEST GESETZT
var myAny1; // ohne Datentypenangaben und ohne Initialisierung ist die Variable vom Typ 'any'
myAny1 = 'string';
var myNumber2 = 456;
myNumber2 = myAny1; // keine Fehlermeldung
var myNumber3 = myNumber2;
console.log('myNumber3: ', myNumber3); // string, obwohl intellisense hier 'number' zeigt. Kompiliert wird es auch ohne Probleme.
console.info('\n UNKNOWN');
// let myUnknown: unknown = unknown; // Es gibt kein Schlüsselwort für den Wert von unknown
var myUnknown;
myUnknown = undefined;
myUnknown = null;
myUnknown = 'string';
// Bei Zuweisungen von unknown zu anderen Datentypen ist TypeChecking an
// let myString2: string = myUnknown; // Type 'unknown' is not assignable to type 'string'.ts(2322)
// let myUndefined: undefined = myUnknown; // nicht kompatibel
// let myNull: null = myUnknown; // nicht kompatibel
console.info('\n VOID');
// let myVoid: void = void; // Expression expected.ts(1109), auch hier kein Schlüsselwort für den Wert void
var myVoid;
var myFct1 = function () { }; // Datentyp von myFct1: () => void
var myFct2 = function () { }; // das gleiche wie oben
var myFct3 = function () {
    // return 'string'; // Type 'string' is not assignable to type 'void'.ts(2322)
    // return myVoid; // funktioniert
    return; // das gleiche wie Zeile davor
};
myVoid = undefined; // kompatibel
// myVoid = null; // nicht kompatibel, Type 'null' is not assignable to type 'void'.ts(2322)
console.info('\n NULL');
var myNull = null;
// myNull = undefined; // Type 'undefined' is not assignable to type 'null'.ts(2322)
// let myUndefined: undefined = myNull; // Type 'null' is not assignable to type 'undefined'.ts(2322)
console.info('\n NEVER');
// let myNever: never = never; // 'never' only refers to a type, but is being used as a value here.ts(2693)
var myNever;
// BEI FUNKTIONEN
var myFct4 = function () {
    throw new Error();
    console.log('object'); // Unreachable code detected.ts(7027)
};
function myFct5() {
    myFct5();
    return 5;
}
// let etwas1 = myFct5();
// BEI LEEREN ARRAYS
var myArray = []; // any[]
var etwas = [][0]; // never
etwas = [][1]; // never
// KOMPATIBILITÄT
// myNever = undefined; // Type 'undefined' is not assignable to type 'never'.ts(2322)
// myNever = null; // Type 'null' is not assignable to type 'never'.ts(2322)
// myNever = myVoid; // Type 'void' is not assignable to type 'never'.ts(2322)
myNever = [][0];
var myNumber4 = myNever; // funktioniert bei Zuweisung zu anderen Datentypen
console.log('myNumber4 :>> ', myNumber4); // undefined
console.info('\n LITERAL TYPES');
// Literale Datentypen akzeptieren nur die Werte, die diese Literale erzeugen
var myGrößenEinheit;
myGrößenEinheit = 'cm';
var test;
test = 3;
// AUCH FÜR LITERAL FÜR LEERES ARRAY
var test1;
// test1 = [1, 4]; // Type '[number, number]' is not assignable to type '[]'. Source has 2 element(s) but target allows only 0.ts(2322)
// ABER NICHT FÜR LITERAL FÜR LEERES OBJEKT
var test2;
test2 = { a: 'a', b: 'b' };
// ANWENDUNGSBEISPIEL FÜR LITERAL TYPES:
var myUnits;
