"use strict";
// Postfix !
function giveMilisecondsOfDate(datum) {
    if (datum instanceof Date)
        return datum.getTime();
    else
        return null;
}
let einObjekt = { id: 1, methode: () => { } };
// let resultat = einObjekt?.methode(); // Property 'methode' does not exist on type 'never'.ts(2339)
// let resultat1 = einObjekt.adresse!.straße; // Fehler: 06-postfix.js:12 Uncaught TypeError: Cannot read property 'straße' of undefined
// console.log('resultat1 :>> ', resultat1);
// let resultat2 = einObjekt.adresse?.hausnummer;
// console.log('resultat2 :>> ', resultat2); // Wert undefined, ohne Fehlermeldung
//# sourceMappingURL=06-postfix.js.map