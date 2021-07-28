// LEERE KLASSE OHNE KONSTRUKTOR

class Creature {
    // Ist eine Eigenschaft durch Konstruktor nicht befüllt, muss sie eine undefined-Option zulassen
    // Entweder durch Zuweisung vom Wert 'undefined'
    // oder durch Postfix '!'
    age!: number;
    height!: number;
    areal!: string;
    existingNow!: boolean;
}

const newCreature = new Creature();

console.log('newCreature.age :>> ', newCreature.age); // undefined
// const newCreature1 = new Creature(14); // automatisch angelegter Konstruktor erwartet keine Argumente
// Konstruktoren sind nötig



// KLASSE MIT KONSTRUKTOR
class Creature1 {
    // zum automatischen Anlegen von Props kann Modifizierer 'public' im Konstruktor verwendet werden
    // im Fall mit Konstruktor optionale Props können mit '?' angelegt werden    
    constructor(public age: number, public height: number, public areal: string, public existingNow?: boolean) {             
    }
}

const newCreature1_1 = new Creature1(23, 45, 'Europa');
const newCreature1_2 = new Creature1(13, 25, 'Afrika', true);


// KONSTRUKTOR FÜHRT BEIM INSTANZIIEREN BESTIMMTE OPERATIONEN AUS
class Creature2 {
    birthdate: number;   
    constructor(public age: number, public height: number, public areal: string, public existingNow?: boolean) {          
        console.log('Instanz von Creature2 wurde angelegt');
        this.birthdate = (new Date().getFullYear()) - age;  
    }
}

const newCreature2_1 = new Creature2(13, 25, 'Asien', true);
console.log('newCreature2_1.birthdate :>> ', newCreature2_1.birthdate); // 2008




// MODIFIER

// - public
// - private
// - static
// - readonly

// Member ohne Modifier sind public
class Creature3 {
    birthdate: number;
    private isCloned: boolean;   
    constructor(public age: number, public height: number, public areal: string, isCloned: boolean, public existingNow?: boolean) {          
        console.log('Instanz von Creature2 wurde angelegt');
        this.birthdate = (new Date().getFullYear()) - age;
        this.isCloned = isCloned;
    }
    giveAHintAboutCloned() {
        if (this.isCloned) {
            return 'some University studied this';
        }
    }
    static idOfCreatureDefinition: number = 3;
    static readonly idOfCreatureDefinitionNotChangable: number = 3;
}

const newCreature3_1 = new Creature3(13, 25, 'Australia', true, false);
// console.log('newCreature3_1.isCloned :>> ', newCreature3_1.isCloned); // Property 'isCloned' is private and only accessible within class 'Creature3'.ts(2341)
console.log('newCreature3_1.giveAHintAboutCloned() :>> ', newCreature3_1.giveAHintAboutCloned()); // some University studied this
console.log('Creature3.idOfCreatureDefinition :>> ', Creature3.idOfCreatureDefinition); // 3

// Darf man statische Eigenschaften ändern?
Creature3.idOfCreatureDefinition = 4;
console.log('Creature3.idOfCreatureDefinition :>> ', Creature3.idOfCreatureDefinition); // 4

// Ist das nicht gewünscht, dann: readonly
// Creature3.idOfCreatureDefinitionNotChangable = 4; // Cannot assign to 'idOfCreatureDefinitionNotChangable' because it is a read-only property.ts(2540)


// Frage zu Semikolon
// in solchen Fällen streng empfehlenswert, sonst optional
/* 
(function fctname() {
 console.log('fctname called');
})()
*/