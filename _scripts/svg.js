/**
 * Создает элемент <svg> и рисует в нем круговую диаграмму.
 * @param {Array<number>} data массив чисел для диаграммы, по одному для каждого
 * сектора.
 * @param {number} width ,
 * @param {number} height размеры SVG-изображения в пикселах
 * @param {number} centerX ,
 * @param {number} centerY ,
 * @param {number} r координаты центра и радиус круга
 * @param {Array<number>} colors массив цветов в формате HTML, по одному для
 * каждого сектора
 * @param {Array<number>} labels массив меток для легенды, по одной для каждого
 * сектора
 * @param {number} legendX ,
 * @param {number} legendY координаты левого верхнего угла легенды диаграммы
 *
 * @returns {SVGSVGElement} Элемент <svg>, хранящий круговую диаграмму.
 * Вызывающая программа должна вставить возвращаемый элемент в документ.
 **/
function pieChart({data, width, height, centerX, centerY, r, colors, labels, legendX, legendY}) {

    // Пространство имен XML для элементов svg
    /** @type string */
    let svgns = 'http://www.w3.org/2000/svg';

    // Создать элемент <svg>, указать размеры в пикселах и координаты
    /** @type SVGSVGElement */
    let chart = document.createElementNS(svgns, "svg:svg");
    chart.setAttribute("width", width);
    chart.setAttribute("height", height);
    chart.setAttribute("viewBox", "0 0 " + width + " " + height);

    // Сложить вместе все значения, чтобы получить общую сумму всей диаграммы
    let total = data.reduce((x,y)=> x + y, 0);

    // Определить величину каждого сектора. Углы измеряются в радианах.
    let angles = data.map(i => i / total * Math.PI * 2);

    // Цикл по всем секторам диаграммы.
    let startAngle = 0;
    for (let i = 0; i < data.length; i++) {
        // Точка, где заканчивается сектор
        let endAngle = startAngle + angles[i];

        // Вычислить координаты точек пересечения радиусов, образующих сектор,
        // с окружностью. В соответствии с выбранными формулами углу 0 радиан
        // соответствует точка в самой верхней части окружности,
        // а положительные значения откладываются от нее по часовой стрелке.
        let x1 = centerX + r * Math.sin(startAngle);
        let y1 = centerY - r * Math.cos(startAngle);
        let x2 = centerX + r * Math.sin(endAngle);
        let y2 = centerY - r * Math.cos(endAngle);

        // Это флаг для углов, больших половины окружности.
        // Он необходим SVG - механизму рисования дуг
        let big = endAngle - startAngle > Math.PI ? 1 : 0;

        // Мы описываем сектор с помощью элемента <svg:path> .
        // Обратите внимание, что он создается вызовом createElementNS()
        /** @type SVGPathElement */
        let path = document.createElementNS(svgns, "path");

        // Эта строка хранит информацию о контуре, образующем сектор
        /** @type string */
        let d = "M " + centerX + "," + centerY + // Начало в центре окружности
            " L " + x1 + "," + y1 + // Нарисовать линию к точке (x1, y1)
            " A " + r + "," + r + // Нарисовать дугу с радиусом r
            " 0 " + big + " 1 " + // Информация о дуге
            // ...
            x2 + "," + y2 + // Дуга заканчивается в точке (x2, y2)
            " Z"; // Закончить рисование в точке (centerX, centerY)

        // Теперь установить атрибуты элемента <svg:path>
        path.setAttribute("d", d); // Установить описание контура
        path.setAttribute("fill", colors[i]); // Установить цвет сектора
        path.setAttribute("stroke", "black"); // Рамка сектора - черная
        path.setAttribute("stroke-width", "2"); // 2 единицы толщиной
        chart.appendChild(path); // Вставить сектор в диаграмму

        // Следующий сектор начинается в точке, где закончился предыдущий
        startAngle = endAngle;

        // Нарисовать маленький квадрат для идентификации сектора в легенде
        /** @type SVGRectElement */
        let icon = document.createElementNS(svgns, "rect");
        icon.setAttribute("x", legendX); // Координаты квадрата
        icon.setAttribute("y", legendY + 30 * i);
        icon.setAttribute("width", 20); // Размер квадрата
        icon.setAttribute("height", 20);
        icon.setAttribute("fill", colors[i]); // Тем же цветом, что и сектор
        icon.setAttribute("stroke", "black"); // Такая же рамка.
        icon.setAttribute("stroke-width", "2");
        chart.appendChild(icon); // Добавить в диаграмму

        // Добавить метку правее квадрата
        /** @type SVGTextElement */
        let label = document.createElementNS(svgns, "text");
        label.setAttribute("x", legendX + 30); // Координаты текста
        label.setAttribute("y", legendY + 30 * i + 18);

        // Стиль текста можно также определить посредством таблицы CSS-стилей
        label.setAttribute("font-family", "sans-serif");
        label.setAttribute("font-size", "16");

        // Добавить текстовый DOM-узел в элемент <svg:text>
        label.appendChild(document.createTextNode(labels[i]));
        chart.appendChild(label); // Добавить текст в диаграмму
    }
    return chart;
}