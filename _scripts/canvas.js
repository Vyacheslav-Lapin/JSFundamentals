/**
 * Created by admin on 28/09/16.
 */
'use strict';

addEventListener("DOMContentLoaded", () => {
    let c = document.getElementById("my_canvas_id").getContext('2d');

    c.fillStyle = "#0f0";

    c.beginPath(); // Новый контур
    c.moveTo(100, 100); // Новый фрагмент контура с начальной точкой (100,100)
    c.lineTo(200, 200); // Добавить линию, соединяющую точки (100,100) и (200,200)
    c.lineTo(100, 200); // Добавить линию, соединяющую точки (200,200) и (100,200)
    c.lineTo(100, 100); // Добавить линию, соединяющую точки (200,200) и (100,200)

    c.fill(); // Залить область треугольника
    c.stroke(); // Нарисовать две стороны треугольника
}, true);