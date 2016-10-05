addEventListener("DOMContentLoaded", () => {

    // References to the document elements.
    const gl = getWebGLContext(document.querySelector("canvas") as HTMLCanvasElement, {
        alpha: true,
        antialias: true,
        depth: true,
        premultipliedAlpha: true,
        preserveDrawingBuffer: false,
        stencil: false
    });

    checkWebGlSupported();

    gl.viewport(0, 0, gl.drawingBufferWidth / 2, gl.drawingBufferHeight / 2);
    gl.clearColor(0.5, 1.0, 0.5, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // gl.viewport (0, 0, drawing.width, drawing.height ) ;
    // Set the clear color to darkish green.

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0.5, 1]), gl.STATIC_DRAW);

    // ...

    gl.deleteBuffer(buffer);

    // OpenGL Shading Language
    // Шейдер от Бартека Дроздзя ( Bartek Drozdz )
    const ogsl: string =
        `attribute vec2 aVertexPosition;
         void main () {
            gl_Position = vec4(aVertexPosition, 0.0, 1.0);
         }`;
    const vertexGlsl = (<HTMLScriptElement> document.getElementById("vertexShader")).text;
    const fragmentGlsl = (<HTMLScriptElement> document.getElementById("fragmentShader")).text;

    console.log(ogsl);

    const errors = execute(() => {
        console.log();
    });

    console.log(errors);

    function execute(action: () => void): number[] {
        action();
        const errors: number[] = [];
        for (let error of getErrors(gl.getError)) {
            errors.push(error);
        }
        return errors;
    }

    function* getErrors(getError: () => number) {
        while (true) {
            const error = getError();
            if (error !== gl.NO_ERROR) {
                yield error;
            } else {
                return error;
            }
        }
    }

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
