"use strict";
// KLASSEN DEKORATOR
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function setIdTo100(target) {
    // target.id = 100 // ohne prototype wird interfase 'Function' von TS angesprochen
    target.prototype.id = 100;
}
let TestClass = class TestClass {
};
TestClass = __decorate([
    setIdTo100
], TestClass);
console.log("new TestClass().id:  ", new TestClass().id); // 100
function Component(options) {
    return function (target) {
        // target = target implements Component
        target.prototype.selector = options.selector;
        target.prototype.templateUrl = options.templateUrl;
        target.prototype.styleUrls = options.styleUrls;
    };
}
let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
const neueKomponente = new AppComponent();
console.log('neueKomponente.selector :>> ', neueKomponente.selector);
// METHODEN DEKORATOR
function LoggeMethodenAufruf(target, propertyKey, propertyDescriptor // Beschreibung der Property
) {
    console.log('target :>> ', target); // gibt Klasse selbst aus: target :>>  {constructor: ƒ, printId: ƒ}
    console.log('propertyKey :>> ', propertyKey); // prop, an welcher Dekorator angwendet wurde: propertyKey :>>  printId
    console.log('propertyDescriptor.value :>> ', propertyDescriptor.value); // wert der Prop: ƒ printId(prefix = 'id von TestClass2-Instanz: ') {return prefix + this.id;}
    propertyDescriptor.value = function (...args) {
        return `args Vom Methodendekorator: ${args}`;
    };
}
class TestClass2 {
    printId(prefix = 'id von TestClass2-Instanz: ') {
        return prefix + this.id;
    }
}
__decorate([
    LoggeMethodenAufruf
], TestClass2.prototype, "printId", null);
let newTestClass2 = new TestClass2();
console.log('newTestClass2.printId("wert für Dekorator Args") :>> ', newTestClass2.printId('wert für Dekorator Args')); // args Vom Methodendekorator: wert für Dekorator Args
//# sourceMappingURL=07-decorators.js.map