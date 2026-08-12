console.log("Funcionando..");

const seleccion = document.getElementById("selectColor");
const formato = document.getElementById("selectFormato");
const contenedor = document.getElementById("contenedorColores");


const generarPaleta = () => {

    seleccion.addEventListener("change", () => {

        let cantidadSeleccionada = seleccion.value;
        console.log("El usuario eligio: " + cantidadSeleccionada);
    })
};

generarPaleta();


const generarColorHSL = () => {

    let tonoAlAzar = Math.floor(Math.random() * 361);
    let saturacionAlAzar = Math.floor(Math.random() * 101);
    let luminosidadAlAzar = Math.floor(Math.random() * 101);

    const colorFinalHSL = `hsl(${tonoAlAzar}, ${saturacionAlAzar}, ${luminosidadAlAzar})`;

    return colorFinalHSL;

}

const generarColorRGBA = () => {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let a = Math.floor(Math.random() * 256);

    const colorFinalRGBA = `rgba(${r}, ${g}, ${b}, ${a})`;
    return colorFinalRGBA;

}
