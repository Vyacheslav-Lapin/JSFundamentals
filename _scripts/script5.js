/**
 * Created by admin on 30/09/16.
 */

function f(x, y, ...a) {
    return (x + y) * a.length
}

console.log(f(1, 2, "hello", true, 7) === 9);