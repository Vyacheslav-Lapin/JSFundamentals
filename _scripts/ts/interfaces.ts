// interface Labelled {
//     label: string;
// }
//
// function printLabel(labelledObj: Labelled) {
//     console.log(labelledObj.label);
// }
//
// let myObj = {label: "Size 10 Object", size: 10};
// printLabel(myObj);

// interface SquareConfig {
//     readonly color?: string;
//     readonly width?: number;
// }
//
// function createSquare(config: SquareConfig): {color: string; area: number} {
//     let newSquare = {area: 100, color: "white"};
//     if (config.color)
//         newSquare.color = config.color;
//     if (config.width)
//         newSquare.area = config.width * config.width;
//     return newSquare;
// }
//
// console.log(createSquare({color: "black"}));

// interface Point {
//     readonly x: number;
//     readonly y: number;
// }
//
// let p1: Point = { x: 10, y: 20 };
// // p1.x = 5; // error!
//
// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!

// interface SearchFunc {
//     (source: string, subString: string): boolean;
// }
//
// let mySearch: SearchFunc = (src, sub) => {
//     let result = src.search(sub);
//     return result !== -1;
// };
//
// console.log(mySearch("5", "2"));

// interface StringArray {
//     [index: number]: string;
// }
//
// let myArray: StringArray = ["Foo", "Bar"];
//
// let myStr: string = myArray[0];
//
// console.log(myStr);

// interface NumberDictionary {
//     [index: string]: number;
//     length: number;    // ok, length is a number
//     // name: string;      // error, the type of 'name' is not a subtype of the indexer
// }

// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date): void;
// }
//
// class Clock implements ClockInterface {
//     public currentTime: Date;
//     constructor(private h: number, private m: number) {
//     }
//
//     public setTime(d: Date): void {
//         this.currentTime = d;
//     }
// }

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
    tick();
}

function createClock(clockConstructor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new clockConstructor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(private h: number, private m: number) { }
    public tick() {
        console.log(`beep beep! I\`m ${this.h}, ${this.m}`);
    }
}
class AnalogClock implements ClockInterface {
    constructor(private h: number, private m: number) { }
    public tick() {
        console.log(`tick tock! I\`m ${this.h}, ${this.m}`);
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

console.log(digital);
console.log(analog);
