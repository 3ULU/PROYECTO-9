function imc() {
const altura = parseFloat(document.getElementById("altura").value)
const peso = parseFloat(document.getElementById("peso").value)
  let indice = peso / (altura * altura)


if (indice <= 18) {
    document.getElementById("resultado").innerHTML = `<div class='alert alert-warning' role='alert'><strong>Tu masa de indice corporal es: bajo peso</strong></div>`
} else if (indice >= 18 && indice <= 24) {
    document.getElementById("resultado").innerHTML = `<div class='alert alert-success' role='alert'><strong>Tu masa de indice corporal es: Normal</strong></div>`
} else if (indice >= 25 && indice <= 29) {
    document.getElementById("resultado").innerHTML = `<div class='alert alert-warning' role='alert'><strong>Tu masa de indice corporal es: Sobre peso</strong></div>`
} else if (indice >= 30 && indice <= 34) {
    document.getElementById("resultado").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Tu masa de indice corporal es: Obesidad I</strong></div>`
} else if (indice >= 35 && indice <= 39) {
    document.getElementById("resultado").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Tu masa de indice corporal es: Obesidad II</strong></div>`
} else if (indice >= 40 && indice <= 49) {
    document.getElementById("resultado").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Tu masa de indice corporal es: Obesidad III</strong></div>`
} else if (indice >= 50) {
    document.getElementById("resultado").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Tu masa de indice corporal es: Obesidad VI</strong></div>`
} else {
    document.getElementById("resultado").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Erorr, Los campos no estan debidamente diligenciados</strong></div>`
}

}

function presionarterial() {
const precion = parseFloat(document.getElementById("presion").value)



if (precion <= 90) {
    document.getElementById("pre").innerHTML = `<div class='alert alert-warning' role='alert'><strong>su precion es: Baja</strong></div>`
} else if (precion <= 120) {
    document.getElementById("pre").innerHTML = `<div class='alert alert-success' role='alert'><strong>su precion es: Normal</strong></div>`
} else if (precion >= 120 && precion <= 139) {
    document.getElementById("pre").innerHTML = `<div class='alert alert-warning' role='alert'><strong>su precion es: Prehipertencsion</strong></div>`
} else if (precion >= 140 && precion <= 159) {
    document.getElementById("pre").innerHTML = `<div class='alert alert-danger' role='alert'><strong>su precion es: Alta Hipertension Fase 1 </strong></div>`
} else if (precion >= 160) {
    document.getElementById("pre").innerHTML = `<div class='alert alert-danger' role='alert'><strong>su precion es: Alta Hipertension Fase 2 </strong></div>`
} else {
    document.getElementById("pre").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Erorr, Los campos no estan debidamente diligenciados</strong></div>`
}
}


function edades() {
const edad = parseInt(document.getElementById("edad").value)

if (edad <= 12) {
    document.getElementById("resultado2").innerHTML = `<div class='alert alert-info' role='alert'><strong>Eres un niño</strong></div>`
} else if (edad >= 12 && edad <= 40) {
    document.getElementById("resultado2").innerHTML = `<div class='alert alert-info' role='alert'><strong>Eres un joven </strong></div>`
} else if (edad >= 40 && edad <= 60) {
    document.getElementById("resultado2").innerHTML = `<div class='alert alert-info' role='alert'><strong>Eres un adulto</strong></strong></div>`
} else if (edad >= 60) {
    document.getElementById("resultado2").innerHTML = `<div class='alert alert-info' role='alert'><strong>Eres un adulto mayor</strong></strong></div>`
} else {
    document.getElementById("resultado2").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Erorr, Los campos no estan debidamente diligenciados</strong></div>`
}
}


function tablaH() {
const edad1 = parseInt(document.getElementById("edad1").value)
const sexo = String(document.getElementById("sexo2").value)
let peso, altura;
  //const genero = ['M', 'F'];

if (sexo === "M") {
    if (edad1 >= 11 && edad1 <= 14) {
        peso = 45
        altura = 157
        document.getElementById("resultado3").innerHTML = `<div class='alert alert-info' role='alert'><strong>Su peso ${peso} y su altura es de ${altura} y es adecuado para su sexo y edad</strong></div>`
    } else if (edad1 >= 15 && edad1 <= 18) {
        peso = 66
        altura = 176
        document.getElementById("resultado3").innerHTML = `<div class='alert alert-info' role='alert'><strong>Su peso ${peso} y su altura es de ${altura} y es adecuado para su sexo y edad</strong></div>`
    } else if (edad1 >= 19 && edad1 <= 24) {
        peso = 72
        altura = 177
        document.getElementById("resultado3").innerHTML = `<div class='alert alert-info' role='alert'><strong>Su peso ${peso} y su altura es de ${altura} y es adecuado para su sexo y edad</strong></div>`
    } else if (edad1 >= 25 && edad1 <= 50) {
        peso = 79
        altura = 176
        document.getElementById("resultado3").innerHTML = `<div class='alert alert-info' role='alert'><strong>Su peso ${peso} y su altura es de ${altura} y es adecuado para su sexo y edad</strong></div>`
    } else if (edad1 > 50) {
        peso = 77
        altura = 173
        document.getElementById("resultado3").innerHTML = `<div class='alert alert-info' role='alert'><strong>Su peso ${peso} y su altura es de ${altura} y es adecuado para su sexo y edad</strong></div>`
    }
} else if ((sexo === "F")) {
    if (edad1 >= 11 && edad1 <= 14) {
        peso = 46
        altura = 157
        document.getElementById("resultado3").innerHTML = `<div class='alert alert-info' role='alert'><strong>Su peso ${peso} y su altura es de ${altura} y es adecuado para su sexo y edad </strong></div>`
    } else if (edad1 >= 15 && edad1 <= 18) {
        lpeso = 55
        laltura = 163
        ldocument.getElementById("resultado3").innerHTML = `<div class='alert alert-info' role='alert'><strong>Su peso ${peso} y su altura es de ${altura} y es adecuado para su sexo y edad </strong></div>`
    l} else if (edad1 >= 19 && edad1 <= 24) {
        lpeso = 58
        laltura = 164
        ldocument.getElementById("resultado3").innerHTML = `<div class='alert alert-info' role='alert'><strong>Su peso ${peso} y su altura es de ${altura} y es adecuado para su sexo y edad</strong></div>`
    l} else if (edad1 >= 25 && edad1 <= 50) {
    lpeso = 63
        altura = 163
        document.getElementById("resultado3").innerHTML = `<div class='alert alert-info' role='alert'><strong>Su peso ${peso} y su altura es de ${altura} y es adecuado para su sexo y edad</strong></div>`
    } else if (edad1 > 50) {
        peso = 65
        altura = 160
        document.getElementById("resultado3").innerHTML = `<div class='alert alert-info' role='alert'><strong>Su peso ${peso} y su altura es de ${altura} y es adecuado para su sexo y edad</strong></div>`
    }
} else if (!genero.includes(sexo)) {
    document.getElementById("resultado3").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Erorr, Los campos no estan debidamente llenados, recuerde que solo se aceptan los valores de Masculino (M) y Femenino(F)</strong></div>`
}
}

