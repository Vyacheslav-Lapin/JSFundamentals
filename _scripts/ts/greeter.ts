interface Person {
    firstName: string;
    lastName: string;
    readonly fullName: string;
}

class Student implements Person {

    constructor(public firstName, public middleInitial, public lastName) {
    }

    get fullName() {
        return `${this.firstName} ${this.middleInitial} ${this.lastName}`;
    }
}

function greeter(person: string) {
    return "Hello, " + person;
}

let user = "123";
let student: Person = new Student("Иванов", "Иван", "Иванович");

document.body.innerHTML = greeter(user);
document.body.innerHTML = greeter(student.fullName);

// // Declare a tuple type
// let x: [string, number];
//
// // Initialize it
// x = ["hello", 10]; // OK
//
// // Initialize it incorrectly
// // x = [10, "hello"]; // Error
//
// console.log(x[0].substr(1)); // OK
// // console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
//
// x[3] = "world"; // OK, 'string' can be assigned to 'string | number'
//
// console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'

// x[6] = true; // Error, 'boolean' isn't 'string | number'

// enum Color { RED = 1, GREEN, BLUE = 4, YELLOW }
// let c: Color = Color.GREEN;
// console.log(c);
// console.log(Color.YELLOW);
//
// let colorName: string = Color[3];
// console.log(colorName);

// let notSure: any = 4;
// notSure = "maybe a string instead";
// notSure = false; // okay, definitely a boolean
// notSure = Symbol("any"); // okay, definitely a boolean
//
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
// notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
//
// let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

// function warnUser(): void {
//     alert("This is my warning message");
// }
//
// let unusable: void = undefined;

let someValue: any = "this is a string";
let strLength: number = (<string> someValue).length;

strLength = (someValue as string).length;

type C = {a: string, b?: number}

function f({a, b}: C): void {
    // ...
}
console.log(f({a: "5"}));

function f1({a, b} = {a: "default", b: -1}): void {
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
}
f1(); // ok, default to {a: "", b: 0}
