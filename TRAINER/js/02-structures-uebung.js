"use strict";
/*
Wenden Sie an allen Elementen mit der Klasse 'red' folgende Stile dynamisch (in TS) an:
color: 'red';
background-color: 'pink';

Fügen Sie den Elementen auch den Text 'Klasse angewendet' hinzu.
*/
let myRedElements = document.getElementsByClassName('red');
for (const iterator of myRedElements) {
    iterator.style.color = 'red';
    iterator.style.backgroundColor = 'pink';
    if ('value' in iterator) {
        iterator.value = 'Klasse angewendet';
    }
    else if ('textContent' in iterator) {
        iterator.textContent = 'Klasse angewendet';
    }
}
