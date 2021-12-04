function main() {
    // Access the canvas through DOM: Document Object Model
    var canvas = document.getElementById('myCanvas'); // The paper
    var gl = canvas.getContext('webgl'); // The brush and the paints
    // Define vertices data for three points
    /**
     * A (-0.5, -0.5), Red   (1.0, 1.0, 1.0)
     * B ( 0.5, -0.5), Green (1.0, 1.0, 1.0)
     * C (-0.5,  0.5), Blue  (1.0, 1.0, 1.0)
     * D ( 0.5,  0.5), White (1.0, 1.0, 1.0)
     */
    var vertices = [

        -0.35, 0.45, 1.0, 1.0, 1.0, // Point B green
        -0.40, 0.45, 1.0, 1.0, 1.0, // Point A Red
        -0.40, 0.2, 1.0, 1.0, 1.0, // Point C Blue
        -0.35, 0.2, 1.0, 1.0, 1.0, // Point D white
        -0.35, 0.45, 1.0, 1.0, 1.0, // Point B green
        -0.40, 0.2, 1.0, 1.0, 1.0, // Point C Blue

        0.35, 0.45, 1.0, 1.0, 1.0, // Point B green
        0.40, 0.45, 1.0, 1.0, 1.0, // Point A Red
        0.40, 0.2, 1.0, 1.0, 1.0, // Point C Blue
        0.35, 0.2, 1.0, 1.0, 1.0, // Point D white
        0.35, 0.45, 1.0, 1.0, 1.0, // Point B green
        0.40, 0.2, 1.0, 1.0, 1.0, // Point C Blue


        -0.25, 0.2, 1.0, 1.0, 1.0, // Point B
        -0.75, 0.2, 1.0, 1.0, 1.0, // Point A
        -0.5, 0.5, 1.0, 1.0, 1.0, // Point C

        0.75, 0.2, 1.0, 1.0, 1.0, // Point B
        0.25, 0.2, 1.0, 1.0, 1.0, // Point A
        0.5, 0.5, 1.0, 1.0, 1.0, // Point C


        -0.35, -0.3, 1.0, 1.0, 1.0, // Point B
        -0.65, -0.3, 1.0, 1.0, 1.0, // Point A
        -0.65, 0.2, 1.0, 1.0, 1.0, // Point C
        -0.35, 0.2, 1.0, 1.0, 1.0, // Point D
        -0.35, -0.3, 1.0, 1.0, 1.0, // Point B
        -0.65, 0.2, 1.0, 1.0, 1.0, // Point C

        0.35, -0.3, 1.0, 1.0, 1.0, // Point B
        0.65, -0.3, 1.0, 1.0, 1.0, // Point A
        0.65, 0.2, 1.0, 1.0, 1.0, // Point C
        0.35, 0.2, 1.0, 1.0, 1.0, // Point D
        0.35, -0.3, 1.0, 1.0, 1.0, // Point B
        0.65, 0.2, 1.0, 1.0, 1.0, // Point C



        // contoh
        // 0.0, 1.0, 1.0, 1.0, 0.0,
        // 0.0, 0.25, 1.0, 1.0, 1.0,
        // 0.075, 0.201, 1.0, 1.0, 1.0,

        // 0.0, 1.0, 1.0, 1.0, 0.0,
        // 0.075, 0.201, 1.0, 1.0, 1.0,
        // 0.12, 0.1, 1.0, 1.0, 1.0,

        // 0.0, 1.0, 1.0, 1.0, 0.0,
        // 0.12, 0.1, 1.0, 1.0, 1.0,
        // 0.125, 0.0, 1.0, 1.0, 1.0,


        // kuadaran 1
        -0.5, 0.0, 0.946, 0.960, 0.134, -0.5, 0.25, 0.946, 0.960, 0.134, -0.575, 0.201, 0.946, 0.960, 0.134,

        -0.5, 0.0, 0.946, 0.960, 0.134, -0.575, 0.201, 0.946, 0.960, 0.134, -0.62, 0.1, 0.946, 0.960, 0.134,

        -0.5, 0.0, 0.946, 0.960, 0.134, -0.62, 0.1, 0.946, 0.960, 0.134, -0.625, 0.0, 0.946, 0.960, 0.134,

        // kuadaran 2
        -0.5, -0.0, 0.946, 0.960, 0.134, -0.5, -0.25, 0.946, 0.960, 0.134, -0.575, -0.201, 0.946, 0.960, 0.134,

        -0.5, -0.0, 0.946, 0.960, 0.134, -0.575, -0.201, 0.946, 0.960, 0.134, -0.62, -0.1, 0.946, 0.960, 0.134,

        -0.5, -0.0, 0.946, 0.960, 0.134, -0.62, -0.1, 0.946, 0.960, 0.134, -0.625, -0.0, 0.946, 0.960, 0.134,

        // kuadaran 3
        -0.5, 0.0, 0.946, 0.960, 0.134, -0.5, 0.25, 0.946, 0.960, 0.134, -0.425, 0.201, 0.946, 0.960, 0.134,

        -0.5, 0.0, 0.946, 0.960, 0.134, -0.425, 0.201, 0.946, 0.960, 0.134, -0.38, 0.1, 0.946, 0.960, 0.134,

        -0.5, 0.0, 0.946, 0.960, 0.134, -0.38, 0.1, 0.946, 0.960, 0.134, -0.375, 0.0, 0.946, 0.960, 0.134,

        // kuadaran 4
        -0.5, -0.0, 0.946, 0.960, 0.134, -0.5, -0.25, 0.946, 0.960, 0.134, -0.425, -0.201, 0.946, 0.960, 0.134,

        -0.5, -0.0, 0.946, 0.960, 0.134, -0.425, -0.201, 0.946, 0.960, 0.134, -0.38, -0.1, 0.946, 0.960, 0.134,

        -0.5, -0.0, 0.946, 0.960, 0.134, -0.38, -0.1, 0.946, 0.960, 0.134, -0.375, -0.0, 0.946, 0.960, 0.134,


        -0.49, 0.25, 0.0288, 0.0300, 0.0289, // Point B green
        -0.52, 0.25, 0.0288, 0.0300, 0.0289, // Point A Red
        -0.52, 0.0, 0.0288, 0.0300, 0.0289, // Point C Blue
        -0.49, 0.0, 0.0288, 0.0300, 0.0289, // Point D white
        -0.49, 0.25, 0.0288, 0.0300, 0.0289, // Point B green
        -0.52, 0.0, 0.0288, 0.0300, 0.0289, // Point C Blue


        -0.40, 0.05, 0.0288, 0.0300, 0.0289, // Point B green
        -0.50, 0.05, 0.0288, 0.0300, 0.0289, // Point A Red
        -0.50, 0.0, 0.0288, 0.0300, 0.0289, // Point C Blue
        -0.40, 0.0, 0.0288, 0.0300, 0.0289, // Point D white
        -0.40, 0.05, 0.0288, 0.0300, 0.0289, // Point B green
        -0.50, 0.0, 0.0288, 0.0300, 0.0289, // Point C Blue


    ];
    // Create a linked-list for storing the vertices data
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            // gl_Position = vec4(aPosition + uChange, 0.0, 1.0);
            if(aPosition.x<=0.0) {
                gl_Position = vec4(aPosition.x  ,aPosition.y  , 0.0, 1.0);
            } else {
                gl_Position = vec4(aPosition.x  ,aPosition.y + uChange, 0.0, 1.0);
                // gl_Position = vec4(aPosition.x  ,aPosition.y, 0.0, 1.0);
            }
            
    vColor = aColor;
}
`;
    var fragmentShaderSource = `
precision mediump float;
varying vec3 vColor;
void main() {
    gl_FragColor = vec4(vColor, 1.0);
}
`;
    // Create .c in GPU
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);


    // Compile .c into .o
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);
    // Prepare a .exe shell (shader program)
    var shaderProgram = gl.createProgram();
    // Put the two .o files into the shell
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    // Link the two .o files, so together they can be a runnable program/context.
    gl.linkProgram(shaderProgram);
    // Start using the context (analogy: start using the paints and the brushes)
    gl.useProgram(shaderProgram);
    // Teach the computer how to collect
    //  the positional values from ARRAY_BUFFER
    //  to each vertex being processed
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        2,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
    );
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    var count = 0;
    var speedRaw = 0.0027 * 600;
    var speed = speedRaw / 600;
    var change = 0;
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");

    function render() {
        if (change >= 0.5 || change <= -0.7) speed = -speed;
        change = change + speed;
        gl.uniform1f(uChange, change);
        console.log(++count);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        var primitive = gl.TRIANGLES;
        var offset = 0;
        var nVertex = 162;
        gl.drawArrays(primitive, offset, nVertex);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}