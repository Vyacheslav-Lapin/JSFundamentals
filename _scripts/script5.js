"use strict";

const Shape = (() => {
    const Z = Symbol('z');
    return class {
        constructor(z=200) {
            this[Z] = z;
        }
        getZ () {
            return this[Z];
        }
    };
})();

const shape = new Shape(150);
console.log(shape.getZ());
console.log(shape.getZ());