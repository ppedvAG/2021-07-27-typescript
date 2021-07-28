"use strict";
/*
# Aufgabe 'login form'

Erstellen Sie eine Mini-Anwendung, die nach einem Benutzernamen und nach einem Passwort fragt und dann den Benutzer begrüßt.
Jedes Passwort wird erstmal akzeptiert.
Viel Erfolg!
*/
function login() {
    // let u: string = (document.getElementById('user')!).value; // Property 'value' does not exist on type 'HTMLElement'.
    // let u: string = (<HTMLInputElement> document.getElementById('user')).textContent!; // mit Assertion zu HTMLInputElement ist die Option mit null weg
    // aber textContent ist 'string | null'
    // und textContent ist bei HTMLInputElement leer.
    let u = document.getElementById('user').value;
    document.getElementById('hi').textContent = "Hello " + u;
}
//# sourceMappingURL=00-intro-uebung.js.map