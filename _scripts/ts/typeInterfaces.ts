interface Animal {
    size: number;
}

class Rhino implements Animal {
    constructor(public size: number, public hornColor: string) {}
}

class Elephant implements Animal {
    constructor(public size: number, public trunkColor: string) {}
}

class Snake implements Animal {
    constructor(public size: number, public skinColor: string) {}
}

function createZoo() {
    return [new Rhino(1, "white"), new Elephant(2, "gray"), new Snake(0.5, "black")];
}

let zoo = createZoo();

console.log(zoo[0].size);
