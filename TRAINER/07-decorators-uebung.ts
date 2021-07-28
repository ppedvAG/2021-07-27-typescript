/*
Aufgabe Option 1
Mit Hilfe von einem Methodendekorator werden die Änderungen an dem Transportmittel geloggt.

Aufgabe Option 2
Mit Hilfe von einem Methodendekorator werden die Argumente von bremse und beschleunige geprüft, ob es keine negativen Zahlen sind
*/

// wird aufgerufen beim Instanziieren der Klasse
// todo #2
function LoggeDieGeschwindigkeit(
    target: Object,
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor // Beschreibung der Property
) {
    let geschwMeldung = propertyDescriptor.value();
    console.log('geschwMeldung :>> ', geschwMeldung);    
    
}

class Transport {
    istAn: boolean = false;
    private preis: number;
    private modell: string;
    private aktuelleGeschwindigkeit: number = 0;
    constructor(modell: string, preis: number, public maxGeschwindigkeit: number) {
        this.modell = modell;
        this.preis = preis;
    }

    @LoggeDieGeschwindigkeit
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

    @LoggeDieGeschwindigkeit
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

let newTransportMittel = new Transport('modellString', 300000, 250);
// newTransportMittel.beschleunige(40);
// newTransportMittel.bremse(20);