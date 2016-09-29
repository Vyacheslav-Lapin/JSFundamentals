/**
 * Created by admin on 29/09/16.
 */

let buffer = new ArrayBuffer(20),
    view = new DataView(buffer),
    value;

view.setUint32(0, 65536);

// 16 - разрядные целые числа занимают по 2 байта
view.setUint16(2, 50);
value = view.getUint32(0);
console.log(value); // 25