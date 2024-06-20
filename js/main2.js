document.getElementById("Form_pesoIdeal").addEventListener("submit", function (event) {
    event.preventDefault();

    const genero = document.getElementById("sexo1").value;
    const edadEnAnios = parseFloat(document.getElementById("edadp").value);
    const pesoEnKilogramos = parseFloat(document.getElementById("pesoActual1").value);
    const alturaEnCentimetros = parseFloat(document.getElementById("altura1").value);

    let indiceMasaCorporal, diferenciaDePesoEnKilogramos, clasificacionIMC, pesoIdealEnKilogramos;

    indiceMasaCorporal = pesoEnKilogramos / (alturaEnCentimetros / 100 * alturaEnCentimetros / 100); // Fórmula para IMC

    // Clasificación IMC
    if (indiceMasaCorporal < 18.5) {
    clasificacionIMC = "Bajo peso";
    } else if (indiceMasaCorporal < 25) {
    clasificacionIMC = "Peso normal";
    } else if (indiceMasaCorporal < 30) {
    clasificacionIMC = "Sobrepeso";
    } else if (indiceMasaCorporal < 35) {
    clasificacionIMC = "Obesidad grado I";
    } else if (indiceMasaCorporal < 40) {
    clasificacionIMC = "Obesidad grado II";
    } else {
    clasificacionIMC = "Obesidad grado III";
    }

    // Cálculo del peso ideal según el sexo
    if (genero === "Masculino") {
      pesoIdealEnKilogramos = alturaEnCentimetros - 100 - ((alturaEnCentimetros - 150) / 4);
    } else if (genero === "Femenino") {
      pesoIdealEnKilogramos = alturaEnCentimetros - 100 - ((alturaEnCentimetros - 150) / 2);
    }
    
    let mensajePeso;
    if (pesoEnKilogramos < pesoIdealEnKilogramos) {
        mensajePeso = `Deberías aumentar: <span class="badge text-bg-primary">${(pesoIdealEnKilogramos - pesoEnKilogramos).toFixed(1)} kilos</span>`;
    } else {
        mensajePeso = `Deberías perder: <span class="badge text-bg-dark">${(pesoEnKilogramos - pesoIdealEnKilogramos).toFixed(1)} kilos</span>`;
    }

    const resultadoHTML = `
    <strong>Resultado:</strong><br>
    Edad: ${edadEnAnios} años<br>
    Peso actual: ${pesoEnKilogramos} kg<br>
    Altura: ${alturaEnCentimetros} cm<br>
    IMC: ${indiceMasaCorporal.toFixed(1)} (${clasificacionIMC})<br>
    Peso Ideal: <span class="badge text-bg-warning">${pesoIdealEnKilogramos.toFixed(1)} kg</span><br>
    ${mensajePeso}
    `;
    document.getElementById("resultado5").innerHTML = `<div class="alert alert-secondary" role="alert">${resultadoHTML}</div>`;})