console.log("Funcionando..");

const seleccion = document.getElementById("selectColor");
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

    let colorFinal = `hsl(${tonoAlAzar}, 80%, 50%)`;
    return colorFinal;

}

