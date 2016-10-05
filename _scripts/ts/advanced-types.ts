// function padLeft(value: string, padding: string | number) {
//     if (typeof padding === "number") {
//         return Array(padding + 1).join(" ") + value;
//     }
//     if (typeof padding === "string") {
//         return padding + value;
//     }
//     throw new Error(`Expected string or number, got '${padding}'.`);
// }
//
// padLeft("Hello world", 4); // returns "    Hello world"
// console.log(padLeft("Hello world", true)); // passes at compile time, fails at runtime.

// interface Bird {
//     fly();
//     layEggs();
// }
//
// interface Fish {
//     swim();
//     layEggs();
// }
//
// function getSmallPet(): Fish | Bird {
//     return null;
// }
//
// let pet = getSmallPet();
// pet.layEggs(); // okay
// // pet.swim();    // errors
//
// // if ((<Fish> pet).swim) {
// //     (<Fish> pet).swim();
// // } else {
// //     (<Bird> pet).fly();
// // }
//
// function isFish(pet: Fish | Bird): pet is Fish {
//     return (<Fish> pet).swim !== undefined;
// }
//
// if (isFish(pet)) {
//     pet.swim();
// } else {
//     pet.fly();
// }

// function isNumber(x: any): x is number {
//     return typeof x === "number";
// }
//
// function isString(x: any): x is string {
//     return typeof x === "string";
// }
//
// function padLeft(value: string, padding: string | number) {
//     if (isNumber(padding)) {
//         return Array(padding + 1).join(" ") + value;
//     }
//     if (isString(padding)) {
//         return padding + value;
//     }
//     throw new Error(`Expected string or number, got '${padding}'.`);
// }

// function padLeft(value: string, padding: string | number) {
//     if (typeof padding === "number") {
//         return Array(padding + 1).join(" ") + value;
//     }
//     if (typeof padding === "string") {
//         return padding + value;
//     }
//     throw new Error(`Expected string or number, got '${padding}'.`);
// }

// console.log(padLeft("Hello world", 4) === "    Hello world");

// interface Padder {
//     getPaddingString(): string;
// }
//
// class SpaceRepeatingPadder implements Padder {
//     constructor(private numSpaces: number) { }
//     public getPaddingString() {
//         return Array(this.numSpaces + 1).join(" ");
//     }
// }
//
// class StringPadder implements Padder {
//     constructor(private value: string) { }
//     public getPaddingString() {
//         return this.value;
//     }
// }
//
// function getRandomPadder() {
//     return Math.random() < 0.5 ?
//         new SpaceRepeatingPadder(4) :
//         new StringPadder("  ");
// }
//
// // Type is 'SpaceRepeatingPadder | StringPadder'
// let padder: Padder = getRandomPadder();
//
// if (padder instanceof SpaceRepeatingPadder) {
//     padder; // type narrowed to 'SpaceRepeatingPadder'
// }
// if (padder instanceof StringPadder) {
//     padder; // type narrowed to 'StringPadder'
// }

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
    if (typeof n === "string") {
        return n;
    } else {
        //
        return n();
    }
}