// Postfix !

function giveMilisecondsOfDate(datum: Date): number | null {
    if (datum instanceof Date)
        return datum.getTime();
    else
        return null;
}


// let miliseconds: number = giveMilisecondsOfDate(new Date()); 
// Type 'number | null' is not assignable to type 'number'.
// Type 'null' is not assignable to type 'number'.ts(2322)


// let miliseconds: number = giveMilisecondsOfDate(new Date())!; // Option 'null' vom Uniontype 'number | null' ist weg




// Postfix ?
// wie beim ternären Operator '.. ? .. : ..' ist hier eine if-Abfrage versteckt

interface Person1 {
    id: number;
    methode(): void;
    adresse?: {straße: string, hausnummer: number}

}
let einObjekt: Person1 | null = {id: 1, methode: () => {}};

// let resultat = einObjekt?.methode(); // Property 'methode' does not exist on type 'never'.ts(2339)

// let resultat1 = einObjekt.adresse!.straße; // Fehler: 06-postfix.js:12 Uncaught TypeError: Cannot read property 'straße' of undefined
// console.log('resultat1 :>> ', resultat1);

// let resultat2 = einObjekt.adresse?.hausnummer;
// console.log('resultat2 :>> ', resultat2); // Wert undefined, ohne Fehlermeldung
