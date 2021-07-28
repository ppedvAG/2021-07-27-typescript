"use strict";
/*
Fragen Sie vom Benutzer 3 2D-Koordinaten ab.
Verwenden Sie diese, um ein SVG-Polygon zu zeichnen.
*/
function drawPolygon() {
    let coordInputs = document.querySelectorAll('div#coordinates input');
    console.log('coordInputs :>> ', coordInputs);
    let coordInputs2 = [...coordInputs];
    let coord1 = [0, 0];
    let coord2 = [0, 0];
    let coord3 = [0, 0];
    for (let i = 0; i < coordInputs2.length; i++) {
        console.log('schleife');
        (i === 0) ? coord1[0] = +coordInputs2[i].value : 'coord1[0] = 0';
        (i === 1) ? coord1[1] = +coordInputs2[i].value : 'coord1[1] = 0';
        (i === 2) ? coord2[0] = +coordInputs2[i].value : 'coord2[0] = 0';
        (i === 3) ? coord2[1] = +coordInputs2[i].value : 'coord2[1] = 0';
        (i === 4) ? coord3[0] = +coordInputs2[i].value : 'coord3[0] = 0';
        (i === 5) ? coord3[1] = +coordInputs2[i].value : 'coord3[1] = 0';
        console.log('coord1 :>> ', coord1);
        console.log('coord2 :>> ', coord2);
        console.log('coord3 :>> ', coord3);
    }
    let mySVG = document.getElementById('svgForPolygon');
    let htmlString = `
    <polygon points="
    ${coord1}
    ${coord2}
    ${coord3}
    " style="fill: lime; stroke: purple; stroke-width: 3" />`;
    mySVG.innerHTML = htmlString;
}
document.getElementById('draw').onclick = drawPolygon;
let numb1 = Number('4');
let numb2 = +'4';
//# sourceMappingURL=02-tuples-uebung.js.map