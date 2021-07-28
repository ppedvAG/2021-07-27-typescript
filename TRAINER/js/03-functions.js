"use strict";
// TIMING FUNCTIONS
// setInterval(() => {}, 1000);
// setTimeout(() => {}, 1000);
// OPTIONALE ARGUMENTE
// function buildName (firstName: string, middleName?: string, lastName: string): string { // A required parameter cannot follow an optional parameter.ts(1016)
function buildName(firstName, lastName, middleName) {
    return `${firstName} ${middleName} ${lastName}`;
}
console.log("buildName('Max', 'Mustermann') :>> ", buildName('Max', 'Mustermann')); // Max undefined Mustermann
// DEFAULT VALUES
function buildName2(firstName, lastName, middleName = "") {
    return `${firstName} ${middleName} ${lastName}`;
}
console.log("buildName2('Max', 'Mustermann') :>> ", buildName2('Max', 'Mustermann')); //  Max  Mustermann
console.log("buildName2('Max', 'Mustermann', 'Peter') :>> ", buildName2('Max', 'Mustermann', 'Peter')); //  Max Peter Mustermann
// UNDIFINED NUMBER OF ARGS
function giveNodeNames(...args) {
    console.log('args :>> ', args);
    let arrayOfNodeNames = [];
    if (args[0].nodeName) {
        arrayOfNodeNames.push(args[0].nodeName);
    }
    else {
        for (const iterator of args[0]) {
            arrayOfNodeNames.push(iterator.nodeName);
        }
    }
    return arrayOfNodeNames;
}
let nodeNamesOfClassTest = giveNodeNames(document.getElementsByClassName("test"));
console.log('nodeNamesOfClassTest :>> ', nodeNamesOfClassTest);
// JS: funktionen mit zuweisung in return:
console.log((function testReturn(testArg) {
    return testArg = 40;
})(30)); // ausgabe: 40
/* todo #1 */
