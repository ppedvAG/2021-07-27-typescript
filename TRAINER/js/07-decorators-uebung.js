"use strict";
/*
Aufgabe Option 1
Mit Hilfe von einem Methodendekorator werden die Änderungen an dem Transportmittel geloggt.

Aufgabe Option 2
Mit Hilfe von einem Methodendekorator werden die Argumente von bremse und beschleunige geprüft, ob es keine negativen Zahlen sind
*/
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
        if (this.aktuelleGeschwindigkeit + km < this.maxGeschwindigkeit) {
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
//# sourceMappingURL=07-decorators-uebung.js.map