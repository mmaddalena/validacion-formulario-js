const submitFunction = (event) => {
    event.preventDefault();
    if (validarFormulario()) {
        alert(
            "Los datos enviados fueron:\n" +
                "Nombre: " +
                document.getElementById("nombre").value +
                "\n" +
                "Apellido: " +
                document.getElementById("apellido").value +
                "\n" +
                "Documento: " +
                document.getElementById("documento").value +
                "\n" +
                "Email: " +
                document.getElementById("email").value +
                "\n" +
                "Edad: " +
                document.getElementById("edad").value +
                "\n" +
                "Actividad: " +
                document.getElementById("actividad").value +
                "\n" +
                "Nivel de estudio: " +
                document.getElementById("nivelEstudio").value +
                "\n"
        );
    }
};

document
    .getElementById("formulario")
    .addEventListener("submit", submitFunction);

function validarFormulario() {
    // validacion campos de texto
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach((campo) => {
        let errorCampo = document.getElementById(
            "error" + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)
        );
        if (campo.value.length == "") {
            mostrarError(errorCampo, "Este campo es requerido");
            validacionCorrecta = false;
        } else if (campo.value.length > 0 && campo.value.length < 3) {
            mostrarError(
                errorCampo,
                "Este campo debe tener al menos 3 caracteres!"
            );
            validacionCorrecta = false;
        } else {
            ocultarError(errorCampo);
        }
    });

    // validacion campo de email
    const email = document.getElementById("email");
    let errorEmail = document.getElementById("errorEmail");

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        ocultarError(errorEmail);
    } else {
        mostrarError(errorEmail, "El email no es válido");
        validacionCorrecta = false;
    }

    // validacion campo de edad
    const edad = document.getElementById("edad");
    let errorEdad = document.getElementById("errorEdad");

    if (edad.value < 18) {
        mostrarError(
            errorEdad,
            "Debes ser mayor de edad para poder registrarte"
        );
        validacionCorrecta = false;
    } else {
        ocultarError(errorEdad);
    }

    // validacion de campo de actividad
    const actividad = document.getElementById("actividad");
    let errorActividad = document.getElementById("errorActividad");

    if (actividad.value == "") {
        mostrarError(errorActividad, "Por favor, selecciona una actividad");
        validacionCorrecta = false;
    } else {
        ocultarError(errorActividad);
    }

    // validacion de campo de nivel de estudio
    const nivelEstudio = document.getElementById("nivelEstudio");
    let errorNivelEstudio = document.getElementById("errorNivelEstudio");
    if (nivelEstudio.value == "") {
        mostrarError(
            errorNivelEstudio,
            "Por favor, selecciona un nivel de estudio"
        );
        validacionCorrecta = false;
    } else {
        ocultarError(errorNivelEstudio);
    }

    // validacion de terminos y condiciones
    const aceptoTerminos = document.getElementById("aceptoTerminos");
    let errorAceptoTerminos = document.getElementById("errorAceptoTerminos");

    if (!aceptoTerminos.checked) {
        mostrarError(
            errorAceptoTerminos,
            "Debes aceptar los términos y condiciones"
        );
        validacionCorrecta = false;
    } else {
        ocultarError(errorAceptoTerminos);
    }

    return validacionCorrecta;
}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
};

const ocultarError = (elemento) => {
    elemento.textContent = "";
    elemento.style.display = "none";
};
