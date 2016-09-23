"use strict";

function addMixins(object, miscConstructors) {
    miscConstructors = Array.from(arguments).slice(1);
    for (let miscConstructor of miscConstructors) {
        miscConstructor.apply(object);
        for (let prop in miscConstructor.prototype)
            if (!(prop in object)) {
                //noinspection JSUnfilteredForInLoop
                object[prop] = miscConstructor.prototype[prop];
            }
    }
    return object;
}

/** @interface */
function Shape() {
    this.height = 0;
    this.width = 0;
}

/** @returns {number} */
Shape.prototype.square = function () {
};

/**
 * @param height
 * @param width
 * @constructor
 * @extends Shape
 */
function Rectangle(height, width) {
    // Shape.call(this, height);
    this.height = height;
    this.width = width;
}

// Rectangle.prototype = Object.create(Shape.prototype);
// Rectangle.prototype.constructor = Rectangle;
/** @returns {number} */
Rectangle.prototype.square = function () {
    return this.height * this.width;
};

/** @returns {String} */
Rectangle.prototype.info = function () {
    return this.constructor.name;
};

let /** @type Shape */ shape = new Rectangle(2, 5);
console.log("Площадь прямоугольника =", shape.square());
// console.log(shape.info());

/**
 * @param radius
 * @extends Shape
 */
function Circle(radius) {
    this.radius = radius;
}
Circle.prototype.square = function () {
    return Math.pow(this.radius, 2) * Math.PI;
};
Object.defineProperties(Circle.prototype, {
    height: {
        get: () => this.radius,
        set: radius => this.radius = radius,
        enumerable: true, configurable: false
    },
    width: {
        get: () => this.radius,
        set: radius => this.radius = radius,
        enumerable: true, configurable: false
    }
});

let /** @type Shape */ circle = new Circle(2);
console.log("Площать круга =", circle.square());
console.log("Высота круга =", circle.height = 20);
console.log("Площать круга =", circle.square());

// let b = new Rectangle(2, 3);
// console.log(b.square());
// console.log(b.square());
//
// console.log(Rectangle.prototype.constructor === Rectangle);
// console.log(Shape.prototype.constructor === Shape);
// console.log(shape instanceof Shape);
// console.log(shape instanceof Rectangle);
// console.log(b instanceof Shape);
// console.log(b instanceof Rectangle);
//
// function C() {
//     this.f = 90;
// }
// C.prototype.m3 = function () {
//     return "Я миск!";
// };
//
// function D() {
//     this.l = 100;
// }
// D.prototype.m4 = function () {
//     return "А я - второй миск!";
// };
//
// let bcd = addMisc(new Rectangle(5, 6), C, D);
//
// console.log(bcd.square());
// console.log(bcd.square());
// console.log(bcd.m3());
// console.log(bcd.m4());