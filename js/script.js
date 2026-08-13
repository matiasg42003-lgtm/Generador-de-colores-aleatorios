console.log("Funcionando..");

const seleccion = document.getElementById("selectColor");
const formato = document.getElementById("selectFormato");
const contenedor = document.getElementById("contenedorColores");
const generarTodo = document.getElementById("generarPaleta");

const generarColorHSL = () => {

    let tonoAlAzar = Math.floor(Math.random() * 361);
    let saturacionAlAzar = Math.floor(Math.random() * 101);
    let luminosidadAlAzar = Math.floor(Math.random() * 101);

    const colorFinalHSL = `hsl(${tonoAlAzar}, ${saturacionAlAzar}%, ${luminosidadAlAzar}%)`;

    return colorFinalHSL;
}

const generarColorRGBA = () => {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    const colorFinalRGBA = `rgba(${r}, ${g}, ${b}, 1)`;
    return colorFinalRGBA;

}

const generarPaleta = () => {
    generarTodo.addEventListener("click", () => {
        const seleccionElegida = Number(seleccion.value);
        const formatoElegido = (formato.value);

        if (!seleccionElegida || formatoElegido === "") return;
        contenedor.innerHTML = "";
        for (let i = 0; i < seleccionElegida; i++) {
            const color = formatoElegido === "hsl" ? generarColorHSL() : generarColorRGBA();

            const divColor = document.createElement("div");
            divColor.className = "color-card";
            divColor.style.backgroundColor = color;
            divColor.innerText = color;

            contenedor.appendChild(divColor);

        };
    })
}

generarPaleta();


