/**
 * Created by admin on 29/09/16.
 */

// создание представления для всего буфера
let buffer = new ArrayBuffer(20),

    //хранение 8- и 16- раз рядных целых чисел в одном буфере
    int8s = new Int8Array(buffer, 0, 9),
    uIntL6s = new Uint16Array(buffer,
        int8s.length * int8s.constructor.BYTES_PER_ELEMENT + 1);

console.log(int8s.length * int8s.constructor.BYTES_PER_ELEMENT + 1);
console.log(uIntL6s.length);