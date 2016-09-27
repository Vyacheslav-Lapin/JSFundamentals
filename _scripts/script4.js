/**
 * Created by admin on 26/09/16.
 */

setTimeout(() => {
    console.log(1);
}, 0);
for (var i = 0; i < 50000000; i++);
setTimeout(() => {
    console.log(i - 1);
    for (i = 0; i < 1000000001; i++);
    setTimeout(() => {
        console.log(i + 1);
        for (i = 0; i < 1000000002; i++);
        setTimeout(() => {
            console.log(i);
            for (i = 0; i < 1000000008; i++);
            setTimeout(() => {
                console.log(i + 2);
            }, 0);
        }, 0);
    }, 0);
}, 0);