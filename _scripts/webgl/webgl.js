'use strict';

// Run everything inside window load event handler, to make sure
// DOM is fully loaded and styled before trying to manipulate it.
window.addEventListener("DOMContentLoaded", () => {
    var paragraph = document.querySelector("p"),
        button = document.querySelector("button");

    // Adding click event handler to button.
    button.addEventListener("click", detectWebGLContext, false);

    function detectWebGLContext() {
        // Create canvas element. The canvas is not added to the
        // document itself, so it is never displayed in the
        // browser window.
        var canvas = document.createElement("canvas");

        // Get WebGLRenderingContext from canvas element.
        var gl = canvas.getContext("webgl")
            || canvas.getContext("experimental-webgl");

        // Report the result.
        paragraph.innerHTML = (gl && gl instanceof WebGLRenderingContext) ?
            "Congratulations! Your browser supports WebGL." :
            "Failed to get WebGL context. Your browser or device may not support WebGL.";
    }
}, false);

// Run everything inside window load event handler, to make sure
// DOM is fully loaded and styled before trying to manipulate it,
// and to not mess up the global scope. We are giving the event
// handler a name (setupWebGL) so that we can refer to the
// function object within the function itself.
window.addEventListener("DOMContentLoaded", () => {

    // References to the document elements.
    var paragraph = document.querySelector("p"),
        canvas = document.querySelector("canvas");

    // Getting the WebGL rendering context.
    var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    paragraph.innerHTML =
        "Congratulations! Your browser supports WebGL. ";

    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

    // Set the clear color to darkish green.
    gl.clearColor(0.5, 1.0, 0.5, 0.2);

    // Clear the context with the newly set color. This is
    // the function call that actually does the drawing.
    gl.clear(gl.COLOR_BUFFER_BIT);

}, false);