// Abhängig davon, an welchem Konstrukt der Dekorator angewendet wird,
// bekommt man automatisch unterschiedliche Argumente für den Dekorator mit

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

// Methodendekoratoren haben Zugriff auf:
/* 
1. Either the constructor function of the class for a static member, or the prototype of the class for an instance member.
2. The name of the member.
3. The Property Descriptor for the member. 
*/
// wird aufgerufen beim Instanziieren der Klasse
function LoggeMethodenAufruf(
    target: Object,
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor // Beschreibung der Property
) {
    console.log('target :>> ', target); // gibt Klasse selbst aus: target :>>  {constructor: ƒ, printId: ƒ}
    console.log('propertyKey :>> ', propertyKey); // prop, an welcher Dekorator angwendet wurde: propertyKey :>>  printId
    console.log('propertyDescriptor.value :>> ', propertyDescriptor.value); // wert der Prop: ƒ printId(prefix = 'id von TestClass2-Instanz: ') {return prefix + this.id;}
    console.log('propertyDescriptor.value(): >>', propertyDescriptor.value())
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



// Prop Dekorator
// Prop Dekoratoren haben Zugriff auf:
/* 
1. Either the constructor function of the class for a static member, or the prototype of the class for an instance member.
2. The name of the member. 
*/

// hier werden getter und setter hinzugefügt
function Prop(target: Object, propertyName: string) {
    let value: number;
    const getter = () => {
      console.log('Getting value ...');
      return value;
    };
    const setter = (newVal: number) => {
      console.log(`Setting value to ${newVal}`);
      value = newVal;
    };
  
    Object.defineProperty(target, propertyName, {
      get: getter,
      set: setter
    });
  }
  class TestClass3 {
    @Prop // wird aufgerufen, wenn diese Prop gesetzt wird
    private id: string | undefined;

    
    printId(prefix: string = 'id von TestClass2-Instanz: ') {
        return prefix + this.id;
    }
}
  


  // PARAM DEKOR
  // Index von Param wird ausgegeben
  function Param(_target: Object, propertyName: string, index: number) {
    console.log(propertyName, index);
  }


  class TestClass4 {  
    // static elementId: string;
    private id: string | undefined;

    printId(@Param prefix: string = ''): string {
      return prefix + this.id;
    }
  }