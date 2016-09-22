/**
 * Created by admin on 08/09/16.
 */

function m1(x) {

    console.log(arguments[0]);
    x = 200;
    console.log(arguments[0]);

    console.log(arguments.length);
    console.log(m1.length);

    console.log(arguments.length === arguments.callee.length);

    var obj = { /*...*/ };
    var z = 5;
}

m1(150);