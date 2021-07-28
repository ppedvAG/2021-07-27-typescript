// KLASSEN DEKORATOR

function setIdTo100(target: Function) {
    // target.id = 100 // ohne prototype wird interfase 'Function' von TS angesprochen
    target.prototype.id = 100;
}

@setIdTo100
class TestClass {
    id?: number;
}

console.log("new TestClass().id:  ", new TestClass().id); // 100


// DEKORATOR FABRIK
interface Component {
    selector: string,
    templateUrl: string,
    styleUrls: string[]
}
function Component(options: Component) {
    return function (target: Function) {
        // target = target implements Component

        target.prototype.selector = options.selector;
        target.prototype.templateUrl = options.templateUrl;
        target.prototype.styleUrls = options.styleUrls;
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
class AppComponent implements Component {
    selector!: string;
    templateUrl!: string;
    styleUrls!: string[];
}

const neueKomponente = new AppComponent();
console.log('neueKomponente.selector :>> ', neueKomponente.selector);



// METHODEN DEKORATOR

function LoggeMethodenAufruf(
    target: Object,
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor // Beschreibung der Property
) {
    console.log('target :>> ', target); // gibt Klasse selbst aus: target :>>  {constructor: ƒ, printId: ƒ}
    console.log('propertyKey :>> ', propertyKey); // prop, an welcher Dekorator angwendet wurde: propertyKey :>>  printId
    console.log('propertyDescriptor.value :>> ', propertyDescriptor.value); // wert der Prop: ƒ printId(prefix = 'id von TestClass2-Instanz: ') {return prefix + this.id;}
    propertyDescriptor.value = function (...args: any[]) {
        return `args Vom Methodendekorator: ${args}`;
    }
}

class TestClass2 {
    private id: string | undefined;

    @LoggeMethodenAufruf
    printId(prefix: string = 'id von TestClass2-Instanz: ') {
        return prefix + this.id;
    }
}

let newTestClass2 = new TestClass2();
console.log('newTestClass2.printId("wert für Dekorator Args") :>> ', newTestClass2.printId('wert für Dekorator Args')); // args Vom Methodendekorator: wert für Dekorator Args