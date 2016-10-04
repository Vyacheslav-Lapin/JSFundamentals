function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U> {};
    Object.keys(first)
        .forEach(key => result[key] = first[key]); // (<any> result)[key] = (<any> first)[key];

    Object.getOwnPropertyNames(Object.getPrototypeOf(second))
        .filter(key => !result.hasOwnProperty(key))
        .filter(key => key !== `constructor`)
        .forEach(key => result[key] = second[key]);
    return result;
}

class Person {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    public log() {
        console.log("12345");
    }
}

const consoleLogger2 = new ConsoleLogger();
let jim = extend(new Person("Jim"), consoleLogger2);

//noinspection UnnecessaryLocalVariableJS
let n = jim.name;
console.log(n);

jim.log();
