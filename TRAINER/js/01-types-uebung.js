"use strict";
/*
 * Password-Confirm:
Wenn der Benutzer in zwei Input-Feldern den gleichen Text eingegeben hat,
wird eine Meldung für Erfolg gezeigt, sonst ein Fehlerhinweis.
 */
const inp1 = document.getElementById('pw1');
const inp2 = document.getElementById('pw2');
const outp = document.getElementById('hint');
function handleInput() {
    if (inp1.value && inp2.value && inp1.value === inp2.value) {
        outp.textContent = 'Bestätigt';
    }
    else {
        outp.textContent = 'Eingaben fehlen oder sind falsch';
    }
}
document.getElementById('confirm').onclick = handleInput;
