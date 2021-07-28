"use strict";
/*
Programmieren Sie eine öffentliche Transportmittel-Klasse mit folgenden Eigenschaften (Properties):
-	Modell
-	Maximal-Geschwindigkeit
-	Preis
-	Aktuelle Geschwindigkeit
-	Zustand (aus/an)
und folgenden Methoden:
-	Beschleunige: Erhöht die Geschwindigkeit, darf aber Maximal-Geschwindigkeit nicht überschreiten
-	Bremse: Setzt die Geschwindigkeit runter, darf aber in den Minus-Bereich nicht reingehen
-	StarteMotor: Wechselt von Zustand aus zu an
-	StoppeMotor: Wechselt von Zustand an zu aus
-	BeschreibeMich: Gibt Informationen über das Transportmittel als String zurück
Überlegen Sie welche Datentypen die Eigenschaften am besten abbilden und welche Zugriffsmodifizierer (public/ private) geeignet sind. Programmieren Sie zudem einen oder mehrere Konstruktoren.

Legen Sie eine Instanz der Klasse Transport im FuhrparkKonsument an. Rufen Sie die Methode ‚BeschreibeMich‘ auf.
 */
class Transportmittel {
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
const newTransport = new Transportmittel('VW Polo', 15000, 190);
document.getElementById('transportMittelOutput').innerText = newTransport.beschreibeMich();
console.log('newTransport.stoppeMotor() :>> ', newTransport.stoppeMotor()); // Transportmittel war schon aus
