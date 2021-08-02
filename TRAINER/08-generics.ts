function identity<T>(arg: T): T { return arg; }
let output = identity<string>("myString");
output = String(identity<number>(3));

interface Person {
    firstName: string; 
    lastName: string;
}
// Wenn das Interface nur mit dem Ziel von Objektstrukturvorlage angelegt wurde, dann kann man so eine Typvorlage direkt als Datentyp anlegen
type PersonType = {
    firstName: string; 
    lastName: string;
}
// extending types
const addFullNameToPerson = <T extends Person>(obj: T) => {
// oder:
// const addFullNameToPersonAndItsAncestors = <T extends PersonType>(obj: T) => {
    return {...obj, fullName: obj.firstName + " " + obj.lastName}
}

const personWithFullName = addFullNameToPerson({firstName: "Max", lastName: "Müller", age: 25});
/* 
Neu gebildeter Datentyp: 

const personWithFullName: {
    firstName: string;
    lastName: string;
    age: number;
} & {
    fullName: string;
} */
console.log('personWithFullName.fullName :>> ', personWithFullName.fullName); // Max Müller



// Key Of an objecttype : operator keyof
type transportKeys = keyof TransportMtl1;
// Hinter dem neu angelegten Datentyp 'transportKeys' steht ein Union aus den public Transport-Props. Ohne private Props!
let keyOfTransportMtl: transportKeys = 'beschleunige';
keyOfTransportMtl = 'bremse';


// Eine Methode wird angelegt, die einen Wert von einer Property von einem Objekt zurückgibt.
// Es ist nicht vordefiniert, welches Objekt es ist und welche Props es hat. Diese Parameter bleiben generisch.
function getProperty<T, K extends keyof T>(obj: T, key: K) { 
    return obj[key]; 
}
// Siehe die Verwendung der Funktion getProperty nach der Klasse

//#region classDefinition
class TransportMtl1 {
    istAn: boolean = false;
    private preis: number;
    private modell: string;
    private aktuelleGeschwindigkeit: number = 0;
    constructor(modell: string, preis: number, public maxGeschwindigkeit: number) {
        this.modell = modell;
        this.preis = preis;
    }
    beschleunige(km: number): string {        
        if ((this.aktuelleGeschwindigkeit + km) < this.maxGeschwindigkeit) {
            this.aktuelleGeschwindigkeit = this.aktuelleGeschwindigkeit + km;
            return 'akt Geschw: ' + String(this.aktuelleGeschwindigkeit);
        }
        else {
            this.aktuelleGeschwindigkeit = this.maxGeschwindigkeit
            return 'max Grenze erreicht, nämlich: ' + String(this.aktuelleGeschwindigkeit)
        }
    }
    bremse(km: number): string {
        if (this.aktuelleGeschwindigkeit - km > 0) {
            this.aktuelleGeschwindigkeit = this.aktuelleGeschwindigkeit - km;
            return 'akt Geschw: ' + String(this.aktuelleGeschwindigkeit);
        }
        else {
            this.aktuelleGeschwindigkeit = 0;
            return 'akt Geschw: ' + String(this.aktuelleGeschwindigkeit);
        }
    }
    starteMotor() {
        if (!this.istAn) {
            this.istAn = true;
            return 'ist an';
        }
        else {
            return 'Transportmittel war schon an'
        }
    }
    stoppeMotor = () =>
        // in dieser Syntax wird entweder false oder 'transport......' zurückgegeben
        this.istAn ? this.istAn = false : 'Transportmittel war schon aus';

    beschreibeMich() {
        return `
     modell: ${this.modell}
     preis: ${this.preis}
     aktuelleGeschwindigkeit: ${this.aktuelleGeschwindigkeit}
     `
    }
}
//#endregion classDefinition
let newTransportMtl = new TransportMtl1('modellString', 300000, 250);
let returnOfProp1 = getProperty(newTransportMtl, "starteMotor"); // 
console.log('returnOfProp1 :>> ', returnOfProp1); // ƒ starteMotor() { ... }
// let returnOfProp2 = getProperty(newTransportMtl, "preis"); // Fehler: Argument of type '"preis"' is not assignable to parameter of type 'keyof TransportMtl'.ts(2345)
