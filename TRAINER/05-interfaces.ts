// NUTZEN 1: INTERFACE ALS DATENTYPVORLAGE

interface IPerson {
    age: number;
    firstName: string;
    lastName: string;
}

// Typ Person bestätigt, dass das anonyme Objekt dem gewünschten Shape entspricht
const somePerson: IPerson = { age: 44, firstName: 'Peter', lastName: 'Schulz' };




// NUTZEN 2: INTERFACE ALS VORLAGE FÜR KLASSEN
// Klassen, die so ein Interface implementieren, müssen zumindest die angegebenen Props auch beinhalten

// Restrictions:
// - Wenn eine Klasse eine private Prop hat, kann sie nicht im Interface vorgegeben werden
// - Modifier public ist auch nicht erlaubt. Einfach ohne Modifier deklarieren
// - static als Modifier auch nicht erlaubt
// - statische Member können generell nicht in Interface vorgegeben werden
interface ICreature4 {
    // readonly ist erlaubt
    readonly birthdate: number;

    // isCloned: boolean;
    // Class 'Creature4' incorrectly implements interface 'ICreature4'.
    // Property 'isCloned' is private in type 'Creature4' but not in type 'ICreature4'.ts(2420)
    // private isCloned: boolean; // 'private' modifier cannot appear on a type member.ts(1070)

    // public age: number; // 'public' modifier cannot appear on a type member.ts(1070)
    age: number;
    height: number,
    areal: string,

    // Optionale Member sind erlaubt
    existingNow?: boolean
    // giveAHintAboutCloned(): string {}; // ';' expected.ts(1005)
    giveAHintAboutCloned(): "some University studied this" | undefined; // nur Name, Argumente und Rückgabetyp können vorgegeben werden

    // static idOfCreatureDefinition: number; // 'static' modifier cannot appear on a type member.ts(1070)
    // idOfCreatureDefinition: number;

    // readonly idOfCreatureDefinitionNotChangable: number;

    // Class 'Creature4' incorrectly implements interface 'ICreature4'.  
    // Type 'Creature4' is missing the following properties from type 'ICreature4': idOfCreatureDefinition, idOfCreatureDefinitionNotChangablets(2420)
}


class Creature4 implements ICreature4 {
    readonly birthdate: number;
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



// NUTZEN 3: MIT INTERFACES KANN MAN AUCH EINE VERERBUNGSKETTE VON OOP ABBILDEN
interface IAnimal extends ICreature4 {
    hasLegs: boolean;
    isInBirthAge: boolean;
}
class Animal implements IAnimal {
    // lässt man ein Interface durch QuickFix automatisch implementieren, bekommt man folgende Struktur
    // hasLegs: boolean;
    // isInBirthAge: boolean;
    // birthdate: number;
    // age: number;
    // height: number;
    // areal: string;
    // existingNow?: boolean | undefined;
    // giveAHintAboutCloned(): "some University studied this" | undefined {
    //     throw new Error("Method not implemented.");
    // }

    constructor(
        public hasLegs: boolean,
        public isInBirthAge: boolean,
        public birthdate: number,
        public age: number,
        public height: number,
        public areal: string,
        isCloned: boolean
    ) {
        this.isCloned = isCloned;
    }
    private isCloned: boolean;
    existingNow?: boolean | undefined;
    giveAHintAboutCloned(): "some University studied this" | undefined {
        if (this.isCloned) {
            return 'some University studied this';
        }
    }
}