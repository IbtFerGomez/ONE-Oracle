function validarTexto(texto) {
    let esMinusculas = texto === texto.toLowerCase();
    let sinCaracteresEspeciales = /^[a-z\s]*$/.test(texto);

    if (!esMinusculas) {
        alert("El texto debe estar en minúsculas.");
        return false;
    }

    if (!sinCaracteresEspeciales) {
        alert("El texto no debe contener caracteres especiales.");
        return false;
    }
}

function encriptar() {
    let texto = document.getElementById("user_input").value;

    validarTexto(texto);

    let textoEncriptado = texto
        .trim()
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "<p>" + textoEncriptado + "</p>";
}

function desencriptar() {
    let texto = document.getElementById("user_input").value;

    validarTexto(texto);
    
    let textoDesencriptado = texto
        .trim()
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "<p>" + textoDesencriptado + "</p>";
}