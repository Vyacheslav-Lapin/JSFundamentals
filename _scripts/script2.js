// 'use strict';

//noinspection JSValidateTypes
let /** @type HTMLElement */ element = document.getElementById("avatar");

element.addEventListener(
    "click",
    event => console.log('Меня зовут Вася!'),
    true);

console.log(element.innerHTML);

// element.innerHTML += "<div>Мама мыла раму!!!</div>";

//noinspection JSValidateTypes
let /** @type HTMLDivElement */ div = document.createElement("div");
div.align = "right";
let /** @type Text */ text = document.createTextNode("Мама мыла раму!!!");
div.appendChild(text);
element.appendChild(div);

console.log(element.innerHTML);
