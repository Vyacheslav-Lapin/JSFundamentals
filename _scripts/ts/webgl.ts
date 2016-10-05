addEventListener("DOMContentLoaded", () => {

    // References to the document elements.
    const gl = getWebGLContext(document.createElement("canvas") as HTMLCanvasElement, {
        alpha: true,
        antialias: true,
        depth: true,
        premultipliedAlpha: true,
        preserveDrawingBuffer: false,
        stencil: false,
    });

    checkWebGlSupported();

    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

    // Set the clear color to darkish green.
    gl.clearColor(0.5, 1.0, 0.5, 0.2);

    // Clear the context with the newly set color. This is
    // the function call that actually does the drawing.
    gl.clear(gl.COLOR_BUFFER_BIT);

    function checkWebGlSupported() {
        document.querySelector("button").addEventListener("click", () =>
                document.querySelector("p").innerHTML = (gl && gl instanceof WebGLRenderingContext) ?
                    "Congratulations! Your browser supports WebGL." :
                    "Failed to get WebGL context. Your browser or device may not support WebGL."
            , false);
    }

}, false);

interface WebGLProperties {
    /**
     * Если это свойство равно true , для контекста создается буфер альфаканала.
     * @default true;
     */
    alpha: boolean;

    /**
     * если это свойство равно true , доступен 16-разрядный буфер глубины.
     * @default true;
     */
    depth: boolean;

    /**
     * если это свойство равно true, доступен 8-разрядный буфер трафарета.
     * @default false;
     */
    stencil: boolean;

    /**
     * если это свойство равно true, выполняется сглаживание с использованием механизма, предлагаемого по умолчанию.
     * @default true;
     */
    antialias: boolean;

    /**
     * если это свойство равно true, предполагается, что буфер рисования содержит предварительно умноженные
     * альфа-значения.
     * @default true.
     */
    premultipliedAlpha: boolean;

    /**
     * если это свойство равно true , буфер рисования сохраняется после завершения рисования. Изменяйте это
     * значение, только если хорошо понимаете, что делаете, иначе могут возникнуть проблемы с быстродействием.
     * @default false;
     */
    preserveDrawingBuffer: boolean;
}

function getWebGLContext(canvas: HTMLCanvasElement, webGlProperties: WebGLProperties): WebGLRenderingContext {
    return (canvas.getContext("webgl", webGlProperties) ||
    canvas.getContext("experimental-webgl", webGlProperties)) as WebGLRenderingContext;
}