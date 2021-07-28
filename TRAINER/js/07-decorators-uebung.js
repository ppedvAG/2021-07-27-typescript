"use strict";
/*
Aufgabe Option 1
Mit Hilfe von einem Methodendekorator werden die Änderungen an dem Transportmittel geloggt.

Aufgabe Option 2
Mit Hilfe von einem Methodendekorator werden die Argumente von bremse und beschleunige geprüft, ob es keine negativen Zahlen sind
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// wird aufgerufen beim Instanziieren der Klasse
// todo #2
function LoggeDieGeschwindigkeit(target, propertyKey, propertyDescriptor // Beschreibung der Property
) {
    let geschwMeldung = propertyDescriptor.value();
    console.log('geschwMeldung :>> ', geschwMeldung);
}
class Transport {
    constructor(modell, preis, maxGeschwindigkeit) {
        this.maxGeschwindigkeit = maxGeschwindigkeit;
        this.istAn = false;
        this.aktuelleGeschwindigkeit = 0;
        this.stoppeMotor = () => 
        // in dieser Syntax wird entweder false oder 'transport......' zurückgegeben
        this.istAn ? this.istAn = false : 'Transportmittel war schon aus';
        this.modell = modell;
        this.preis = preis;
    }
    beschleunige(km) {
        if ((this.aktuelleGeschwindigkeit + km) < this.maxGeschwindigkeit) {
            this.aktuelleGeschwindigkeit = this.aktuelleGeschwindigkeit + km;
            return 'akt Geschw: ' + String(this.aktuelleGeschwindigkeit);
        }
        else {
            this.aktuelleGeschwindigkeit = this.maxGeschwindigkeit;
            return 'max Grenze erreicht, nämlich: ' + String(this.aktuelleGeschwindigkeit);
        }
    }
    bremse(km) {
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
            return 'Transportmittel war schon an';
        }
    }
    beschreibeMich() {
        return `
     modell: ${this.modell}
     preis: ${this.preis}
     aktuelleGeschwindigkeit: ${this.aktuelleGeschwindigkeit}
     `;
    }
}
__decorate([
    LoggeDieGeschwindigkeit
], Transport.prototype, "beschleunige", null);
__decorate([
    LoggeDieGeschwindigkeit
], Transport.prototype, "bremse", null);
let newTransportMittel = new Transport('modellString', 300000, 250);
// newTransportMittel.beschleunige(40);
// newTransportMittel.bremse(20);
//# sourceMappingURL=07-decorators-uebung.js.map