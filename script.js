const matrix1 = document.getElementById("matrix1");
const matrix2 = document.getElementById("matrix2");
const submit = document.getElementById("strassens-submit");
const solution = document.querySelector(".solution");

let a, b, c, d, e, f, g, h;
let p1, p2, p3, p4, p5, p6, p7;

const steps = document.createElement("div");

const getValues = () => {
    a = parseInt(document.getElementById("strassens-a").value);
    b = parseInt(document.getElementById("strassens-b").value);
    c = parseInt(document.getElementById("strassens-c").value);
    d = parseInt(document.getElementById("strassens-d").value);
    e = parseInt(document.getElementById("strassens-e").value);
    f = parseInt(document.getElementById("strassens-f").value);
    g = parseInt(document.getElementById("strassens-g").value);
    h = parseInt(document.getElementById("strassens-h").value);

    // console.log(a, b, c, d, e, f, g, h);
}


const showMatrixSolution = () => {
    const matrix = document.querySelectorAll("body > div > div > div > div:nth-child(3) > input[type=text]");
    matrix[0].value = p4 + p5 + p6 - p2;
    matrix[1].value = p1 + p2;
    matrix[2].value = p3 + p4;
    matrix[3].value = p1 + p5 - p3 - p7;
}



const showSolution = () => {

    solution.innerHTML = "";

    p1 = a * (f - h);
    p2 = h * (a + b);
    p3 = e * (c + d);
    p4 = d * (g - e);
    p5 = (a + d) * (e + h);
    p6 = (b - d) * (g + h);
    p7 = (a - c) * (e + f);

    steps.innerHTML = `
        p1 = a(f-h) = ${a}(${f}-${h}) = ${p1} <br/>
        p2 = h(a+b) = ${h}(${a}+${b}) = ${p2} <br/>  
        p3 = e(c+d) =  ${e}(${c}+${d}) = ${p3} <br/>  
        p4 = d(g-e) =  ${d}(${g}-${e}) = ${p4} <br/>  
        p5 = (a+d)(e+h) = (${a}+${d})(${e}+${h}) = ${p5} <br/>
        p6 = (b-d)(g+h) = (${b}-${d})(${g}+${h}) = ${p6} <br/>
        p7 = (a-c)(e+f) = (${a}-${c})(${e}+${f}) = ${p7} <br/>
    `;

    const matrixDiv = document.createElement("div");
    matrixDiv.setAttribute("class", "matrix matrix-c");

    const c1 = document.createElement("input");
    const c2 = document.createElement("input");
    const c3 = document.createElement("input");
    const c4 = document.createElement("input");

    c1.setAttribute("type", "text");
    c2.setAttribute("type", "text");
    c3.setAttribute("type", "text");
    c4.setAttribute("type", "text");

    c1.readOnly = true;
    c2.readOnly = true;
    c3.readOnly = true;
    c4.readOnly = true;

    c1.placeholder = 'p4 + p5 + p6 - p2';
    c2.placeholder = 'p1 + p2';
    c3.placeholder = 'p3 + p4';
    c4.placeholder = 'p1 + p5 - p3 - p7';

    matrixDiv.append(c1, c2, c3, c4);

    solution.append(steps, matrixDiv);
    // solution.innerHTML += " = ";
    solution.append(matrixDiv.cloneNode(true));

    showMatrixSolution();
}


submit.addEventListener("click", (e) => {
    e.preventDefault();
    getValues();
    showSolution();
});

document.getElementById("reset").addEventListener("click", () => solution.innerHTML = "");