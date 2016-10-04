class Greeter {
    constructor(private greeting: string) {
    }
    public greet() {
        return `Hello, ${this.greeting}`;
    }
}

let greeter2 = new Greeter("world");
