// 'use strict';

//noinspection JSValidateTypes
let /** @type HTMLImageElement */ img = document.getElementById("avatar-img");
img.addEventListener("click", event => console.log("!"), true);

let /** @type HTMLElement */ figure = document.getElementById("avatar");

let /** @type HTMLAnchorElement */ q = document.getElementById("q");
q.addEventListener("keypress", (/** @type KeyboardEvent */ event) => {
    console.log("keypress");
}, true);
q.addEventListener("keyup", (/** @type KeyboardEvent */ event) => {
    console.log("keyup");
}, true);
q.addEventListener("keydown", (/** @type KeyboardEvent */ event) => {
    console.log("keydown");
    console.log(event);
}, true);

Array.from(figure.childNodes).forEach(element => {
    "use strict";
    console.log(element);
});

// console.log(img.innerHTML);

// img.innerHTML += "<div>Мама мыла раму!!!</div>";

//noinspection JSValidateTypes
// let /** @type HTMLDivElement */ div = document.createElement("div");
// div.align = "right";
// let /** @type Text */ text = document.createTextNode("Мама мыла раму!!!");
// div.appendChild(text);
// img.appendChild(div);

// console.log(img.innerHTML);