"use strict";
/*

Übung 1.

Implementieren Sie ein Interface, welches die Fähigkeit eines Transportmittels beschreibt,
andere Transportmittel mitzutransportieren (z.B. Schiffe die Autos transportieren).
Überlegen Sie, welche Methoden so eine Klasse implementieren sollte und
implementieren Sie dann für die Klassen Schiff und Flugzeug das Interface.
Erweitern Sie die Klassen Schiff und Flugzeug zudem so, dass es ein Transportmittel-Objekt aufnehmen und
in seiner BeschreibeMich()-Methode Informationen darüber ausgeben kann.

Schreiben Sie danach eine neue Methode, welche als Parameter zwei Transportmittelobjekte übernimmt und
nach Prüfung der Interfaces entweder ein Objekt auf das andere belädt oder eine Fehlermeldung ausgibt.
*/
// ===========================
// Klasse aus Ü 04 zu Klassen
// ===========================
class Transportmittel1 {
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
// teste andere Methoden aus
const newTransport1 = new Transportmittel1('VW Polo', 15000, 190);
document.getElementById('transportMittelOutput').innerText = newTransport.beschreibeMich();
console.log('newTransport.stoppeMotor() :>> ', newTransport1.stoppeMotor()); // Transportmittel war schon aus
class Auto extends Transportmittel1 {
    constructor(modell, preis, maxGeschwindigkeit, produzent) {
        super(modell, preis, maxGeschwindigkeit);
        this.maxGeschwindigkeit = maxGeschwindigkeit;
        this.produzent = produzent;
    }
}
class Schiff extends Transportmittel1 {
    constructor(modell, preis, maxGeschwindigkeit, wasserVerdrängung, maxAnzahlVonGeladenen) {
        super(modell, preis, maxGeschwindigkeit);
        this.maxGeschwindigkeit = maxGeschwindigkeit;
        this.wasserVerdrängung = wasserVerdrängung;
        this.maxAnzahlVonGeladenen = maxAnzahlVonGeladenen;
        this.aktuellGeladen = [];
        this.anzahlVonAktGeladenen = 0;
    }
    belade(technikZuLaden) {
    }
    entlade(technikZuEntladen) {
        throw new Error("Method not implemented.");
    }
}
