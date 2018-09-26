let canvas = document.getElementById('can');
let gl = canvas.getContext('webgl2');
gl.viewport(0,0,canvas.width,canvas.height);

gl.clearColor(0, 0, 0, 0);
gl.clear(gl.COLOR_BUFFER_BIT);

let vertexShaderText = 'attribute vec3 c;void main(void){gl_Position=vec4(c, 1.0);}'
let fragmentShaderText = 'void main(void){gl_FragColor=vec4(1,0,0,1);}'

let vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertexShaderText);
gl.compileShader(vertexShader);
let fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragmentShaderText);
gl.compileShader(fragmentShader);
let program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);
gl.useProgram(program);


var triangleVertices = 
	[
		0.0,0.5,0.0,
		-0.5,-0.5,0.0,  
		0.5,-0.5,0.0 
	];

let vertexBuf = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuf);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);

let coord = gl.getAttribLocation(program, "c");
gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(coord);

gl.drawArrays(gl.TRIANGLES, 0, 3);