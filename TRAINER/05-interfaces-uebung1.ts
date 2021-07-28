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
  istAn: boolean = false;
  private preis: number;
  private modell: string;
  private aktuelleGeschwindigkeit: number = 0;
  constructor(modell: string, preis: number, public maxGeschwindigkeit: number) {
      this.modell = modell;
      this.preis = preis;
  }
  beschleunige(km: number): string {
      if (this.aktuelleGeschwindigkeit + km < this.maxGeschwindigkeit) {
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
// teste andere Methoden aus
const newTransport1 = new Transportmittel1('VW Polo', 15000, 190);
document.getElementById('transportMittelOutput')!.innerText = newTransport.beschreibeMich();

console.log('newTransport.stoppeMotor() :>> ', newTransport1.stoppeMotor()); // Transportmittel war schon aus



// ===========================
// Lösung zur aktuellen Aufgabe
// ===========================

interface IKannAndereTransportieren {
  aktuellGeladen: Transportmittel1[];
  anzahlVonAktGeladenen: number;
  maxAnzahlVonGeladenen: number;
  belade(technikZuLaden: Transportmittel1): number;
  entlade(technikZuEntladen: Transportmittel1): number;
}

class Auto extends Transportmittel1 {
  constructor(modell: string, preis: number, public maxGeschwindigkeit: number, public produzent: string) {
    super(modell, preis, maxGeschwindigkeit);    
  }
}

class Schiff extends Transportmittel1 implements IKannAndereTransportieren {
  constructor(modell: string, preis: number, public maxGeschwindigkeit: number, public wasserVerdrängung: number, public maxAnzahlVonGeladenen: number) {
    super(modell, preis, maxGeschwindigkeit);    
  }
  public aktuellGeladen: Transportmittel1[] = [];
  public anzahlVonAktGeladenen: number = 0;

  belade(technikZuLaden: Transportmittel1): number {
    
   
  }
  entlade(technikZuEntladen: Transportmittel1): number {
    throw new Error("Method not implemented.");
  }
}