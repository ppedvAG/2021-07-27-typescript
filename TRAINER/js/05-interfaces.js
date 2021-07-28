"use strict";
// NUTZEN 1: INTERFACE ALS DATENTYPVORLAGE
// Typ Person bestätigt, dass das anonyme Objekt dem gewünschten Shape entspricht
const somePerson = { age: 44, firstName: 'Peter', lastName: 'Schulz' };
class Creature4 {
    constructor(age, height, areal, isCloned, existingNow) {
        this.age = age;
        this.height = height;
        this.areal = areal;
        this.existingNow = existingNow;
        console.log('Instanz von Creature2 wurde angelegt');
        this.birthdate = (new Date().getFullYear()) - age;
        this.isCloned = isCloned;
    }
    giveAHintAboutCloned() {
        if (this.isCloned) {
            return 'some University studied this';
        }
    }
}
Creature4.idOfCreatureDefinition = 3;
Creature4.idOfCreatureDefinitionNotChangable = 3;
class Animal {
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
    constructor(hasLegs, isInBirthAge, birthdate, age, height, areal, isCloned) {
        this.hasLegs = hasLegs;
        this.isInBirthAge = isInBirthAge;
        this.birthdate = birthdate;
        this.age = age;
        this.height = height;
        this.areal = areal;
        this.isCloned = isCloned;
    }
    giveAHintAboutCloned() {
        if (this.isCloned) {
            return 'some University studied this';
        }
    }
}
//# sourceMappingURL=05-interfaces.js.map