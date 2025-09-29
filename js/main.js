const crearNota = document.querySelector("#botonAdd");
const clearNotas = document.querySelector("#botonDel");
const main = document.querySelector("#main");

crearNota.addEventListener("click", function() {
    generarNota();
});

clearNotas.addEventListener("click", function() {
    eliminarCache();
});

function eliminarCache() {
    const eliminador = document.querySelectorAll(".nota");

    if (eliminador.length === 0) {
        Swal.fire("No hay notas en caché para eliminar");
    } else {
        Swal.fire({
            title: "¿Realmente desea borrar sus notas en caché?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Si",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed){
                eliminador.forEach(eliminar => {
                    eliminar.remove();
                });
                localStorage.clear();
                Swal.fire("Todas las notas en caché han sido borradas");
            } else if (result.isDenied) {
                Toastify({
                    text: "Operación cancelada",
                    duration: 5000,
                    close: true,
                    gravity: 'bottom',
                    position: 'left',
                    stopOnFocus: true,
                    style: {
                        background: "linear-gradient(to right, #74da00ff, #a7a7a7)",
                        color: "black",
                        fontSize: "15px",
                    }
                }).showToast();
            }
        })
    }
}

const generarNota = (texto = "", titulo = "") => {
    const nota = document.createElement("div");
    nota.classList.add("nota");
    nota.innerHTML = `
    <div class="icono">
        <i class="save fas fa-save" style="color:green" title="Guardar nota"></i>
        <i class="trash fas fa-trash" style="color:red" title="Eliminar nota"></i>
    </div>
    <div class="titulo-div">
        <textarea class="titulo-txt" placeholder="Insertar título">${titulo}</textarea>
    </div>
    <textarea class="main-txt" placeholder="Escriba notas aquí">${texto}</textarea>
    `;

    function limpiarNota(){
        Swal.fire({
            title:'¿Realmente quieres limpiar la nota en proceso?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Si",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed){
                nota.remove();
                Toastify({
                    text: "Nota eliminada",
                    duration: 5000,
                    close: true,
                    gravity: 'bottom',
                    position: 'left',
                    stopOnFocus: true,
                    style: {
                        background: "linear-gradient(to right, #b10000ff, #1b1b1b)",
                        color: "white",
                        fontSize: "15px",
                    },
                }).showToast();
                guardarNota();
            } else if(result.isDenied){
                Toastify({
                    text: "Operación cancelada",
                    duration: 5000,
                    close: true,
                    gravity: 'bottom',
                    position: 'left',
                    stopOnFocus: true,
                    style: {
                        background: "linear-gradient(to right, #74da00ff, #a7a7a7)",
                        color: "black",
                        fontSize: "15px",
                    }
                }).showToast();
            }
        })
    }

    function actNota(){
        Toastify({
            text: "Nota guardada con éxito",
            duration: 5000,
            close: true,
            gravity: 'bottom',
            position: 'left',
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #45aff7, #a7a7a7)",
                color: "black",
                fontSize: "15px",
            },
        }).showToast();
        guardarNota();
    }

    const btnBorrar = nota.querySelector(".trash");
    const btnGuardar = nota.querySelector(".save");
    const txtArea = nota.querySelectorAll("textarea");

    btnBorrar.addEventListener("click", limpiarNota);
    btnGuardar.addEventListener("click", actNota);
    main.appendChild(nota);
    guardarNota();
}

const guardarNota = () => {
    const notitas = document.querySelectorAll(".nota .main-txt");
    const titulos = document.querySelectorAll(".nota .titulo-txt");
    const arrayNota = [];

    notitas.forEach((notas, index) => {
        const mainTxt = notas.value;
        const titTxt = titulos[index].value;
        if(mainTxt.trim() !== ""){
            arrayNota.push({ titTxt, mainTxt });
        }
    });

    const dataTitulos = arrayNota.map((item) => item.titTxt);
    const dataTxt = arrayNota.map((item) => item.mainTxt);
    localStorage.setItem("Titulos", JSON.stringify(dataTitulos));
    localStorage.setItem("Contenido", JSON.stringify(dataTxt));
}

function cargarNota(){
    const dataTitulos = JSON.parse(localStorage.getItem("Titulos")) || [];
    const dataTxt = JSON.parse(localStorage.getItem("Contenido")) || [];
    for(let i = 0; i < Math.max(dataTitulos.length, dataTxt.length); i++){
        generarNota(dataTitulos[i],dataTxt[i]);
    }
}
cargarNota();