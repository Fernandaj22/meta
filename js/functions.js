// function aparecerMeta(){
// 	btnCuestionario = document.getElementById("btnCuestionario");
//     btnCuestionario.style.display="none";

// 	setTimeout(function(){
// 		btnCuestionario.style.display="block";
// 		btnCuestionario.style.animation="mymove 5s infinite";
// 	}, 1000);
// }

function mostrarDiv(divEsconder, divMostrar){
    esconder = document.getElementById(divEsconder);
    mostrar = document.getElementById(divMostrar);

    esconder.style.display = "none";
    mostrar.style.display = "block";
}

//Arreglo con valor de respuesta de cada pregunta y variable con valor de puntaje total
var valores = [];
var puntaje = 0;

function cuestionario(inputName, posicion, tipoInput){

    let elementos = document.getElementsByName(inputName);

    if(tipoInput == 'r'){
        for(let i = 0; i < elementos.length; i++){
            elementos[i].onclick = function(){
                valores[posicion] = parseFloat(this.value);
            }
        }
    }

    if(tipoInput == 'c'){
        for(let i = 0; i < elementos.length; i++){
            elementos[i].onclick = function(){
                let valor = parseFloat(this.value);
                if(elementos[i].checked){
                    if(valor == 0){
                        for(let j = 0; j < elementos.length; j++){
                            if(elementos[j].checked){
                                elementos[j].checked = false;
                            }	
                        }
                        this.checked = true;
                        valores[posicion] = 0;
                    }
                    else{
                        elementos[elementos.length - 1].checked = false;
                        if(valores[posicion] == null){
                            valores[posicion] = valor;
                        }
                        else{
                            valores[posicion] = valores[posicion] + valor;
                        }
                    }
                }
                else{
                    valores[posicion] = valores[posicion] - valor;
                }
            }
        }
    }
}

function puntajeCheckBox(){
    let arreglo = [2, 3, 4, 7];
    for (let index = 0; index < arreglo.length; index++) {
        let pos = arreglo[index];
        if(valores[pos] != 0){
            if(valores[pos] > 0 && valores[pos] < 3){
                valores[pos] = .5;
            }
            if(valores[pos] >=3){
                valores[pos] = 1;
            }
        }
    }
}

function calcularPuntaje(){
    for (let index = 0; index < valores.length; index++) {
        puntaje += valores[index];
    }
}


function validarInputs(){
    let pregunta, bandera, cont = 0;
    for (let index = 0; index < 10; index++) {
        bandera = false;
        pregunta = "p"+(index+1);
        elementos = document.getElementsByName(pregunta);
        for (let i = 0; i < elementos.length; i++) {
            if(elementos[i].checked){
                bandera = true;
            }
        }    
        if(bandera){
            cont++;
        }
    }

    if(cont == 10){
        puntajeCheckBox();
        calcularPuntaje();
        btnModal = document.getElementById('btnModal');
        btnModal.addEventListener('click', mostrarDiv('preguntas', 'situacion'));
        mostrarModal("¡Encuesta contestada exitosamente!", '<i class="fas fa-check-circle"></i>');
        mostrarGraficas();
    }
    else{
        mostrarModal("Una o más preguntas faltan de contestar", '<i class="fas fa-exclamation-circle"></i>');
    }

}

function mostrarModal(texto, icono){
    fondoModal = document.getElementById('fondoModal');
    fondoModal.style.display = 'block';
    // fondoModal.addEventListener('click',esconderModal);

    modal = document.getElementById('modal');
    divIcono = document.getElementById('divIcono');
    divIcono.innerHTML = icono;
    parrafo = document.getElementById('txtModal');
    parrafo.innerText = texto;
    modal.style.display = 'block';
}

function esconderModal(){
    fondoModal = document.getElementById('fondoModal');
    fondoModal.style.display = 'none';
    
    modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function mostrarGraficas(){
    valor= valores[0];
    valor2= valores[1];
    valor3= valores[2];
    valor4= valores[3];
    valor5= valores[4];
    valor6= valores[5];
    valor7= valores[6];
    valor8= valores[7];
    valor9= valores[8];
    valor10= valores[9];

    document.getElementById("bar-chart").height=100;
    document.getElementById("bar-chart2").height=100;
    document.getElementById("bar-chart3").height=100;
    document.getElementById("bar-chart4").height=100;
    document.getElementById("bar-chart5").height=100;
    document.getElementById("bar-chart6").height=100;
    document.getElementById("bar-chart7").height=100;
    document.getElementById("bar-chart8").height=100;
    document.getElementById("bar-chart9").height=100;
    document.getElementById("bar-chart10").height=100;

    new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
          labels: ["Situación actual de tu empresa", "Situación ideal de una empresa"],
          datasets: [
            {
              label: "Situación",
              data: [valor, 1],
              backgroundColor: ["#FF7F7F", "#7FFF8E"]
            }
          ]
        },
        options: {
          legend: { display: false },
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 1
                }
            }]
          }
        }
    });

    new Chart(document.getElementById("bar-chart2"), {
        type: 'bar',
        data: {
          labels: ["Situación actual de tu empresa", "Situación ideal de una empresa"],
          datasets: [
            {
              label: "Situación",
              data: [valor2, 1],
              backgroundColor: ["#FF7F7F", "#7FFF8E"]
            }
          ]
        },
        options: {
          legend: { display: false },
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 1
                }
            }]
          }
        }
    });
    new Chart(document.getElementById("bar-chart3"), {
        type: 'bar',
        data: {
          labels: ["Situación actual de tu empresa", "Situación ideal de una empresa"],
          datasets: [
            {
              label: "Situación",
              data: [valor3, 1],
              backgroundColor: ["#FF7F7F", "#7FFF8E"]
            }
          ]
        },
        options: {
          legend: { display: false },
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 1
                }
            }]
          }
        }
    });
    new Chart(document.getElementById("bar-chart4"), {
        type: 'bar',
        data: {
          labels: ["Situación actual de tu empresa", "Situación ideal de una empresa"],
          datasets: [
            {
              label: "Situación",
              data: [valor4, 1],
              backgroundColor: ["#FF7F7F", "#7FFF8E"]
            }
          ]
        },
        options: {
          legend: { display: false },
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 1
                }
            }]
          }
        }
    });
    new Chart(document.getElementById("bar-chart5"), {
        type: 'bar',
        data: {
          labels: ["Situación actual de tu empresa", "Situación ideal de una empresa"],
          datasets: [
            {
              label: "Situación",
              data: [valor5, 1],
              backgroundColor: ["#FF7F7F", "#7FFF8E"]
            }
          ]
        },
        options: {
          legend: { display: false },
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 1
                }
            }]
          }
        }
    });
    new Chart(document.getElementById("bar-chart6"), {
        type: 'bar',
        data: {
          labels: ["Situación actual de tu empresa", "Situación ideal de una empresa"],
          datasets: [
            {
              label: "Situación",
              data: [valor6, 1],
              backgroundColor: ["#FF7F7F", "#7FFF8E"]
            }
          ]
        },
        options: {
          legend: { display: false },
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 1
                }
            }]
          }
        }
    });
    new Chart(document.getElementById("bar-chart7"), {
        type: 'bar',
        data: {
          labels: ["Situación actual de tu empresa", "Situación ideal de una empresa"],
          datasets: [
            {
              label: "Situación",
              data: [valor7, 1],
              backgroundColor: ["#FF7F7F", "#7FFF8E"]
            }
          ]
        },
        options: {
          legend: { display: false },
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 1
                }
            }]
          }
        }
    });
    new Chart(document.getElementById("bar-chart8"), {
        type: 'bar',
        data: {
          labels: ["Situación actual de tu empresa", "Situación ideal de una empresa"],
          datasets: [
            {
              label: "Situación",
              data: [valor8, 1],
              backgroundColor: ["#FF7F7F", "#7FFF8E"]
            }
          ]
        },
        options: {
          legend: { display: false },
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 1
                }
            }]
          }
        }
    });
    new Chart(document.getElementById("bar-chart9"), {
        type: 'bar',
        data: {
          labels: ["Situación actual de tu empresa", "Situación ideal de una empresa"],
          datasets: [
            {
              label: "Situación",
              data: [valor9, 1],
              backgroundColor: ["#FF7F7F", "#7FFF8E"]
            }
          ]
        },
        options: {
          legend: { display: false },
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 1
                }
            }]
          }
        }
    });
    new Chart(document.getElementById("bar-chart10"), {
        type: 'bar',
        data: {
          labels: ["Situación actual de tu empresa", "Situación ideal de una empresa"],
          datasets: [
            {
              label: "Situación",
              data: [valor10, 1],
              backgroundColor: ["#FF7F7F", "#7FFF8E"]
            }
          ]
        },
        options: {
          legend: { display: false },
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 1
                }
            }]
          }
        }
    });
}

function mostrarEscenarios(){
    btnModal = document.getElementById('btnModal');
    btnModal.addEventListener('click', mostrarDiv('situacion', 'escenarios'));

}

function refreshPage(){
    location.reload();
}

