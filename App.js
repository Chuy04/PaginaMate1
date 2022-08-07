// function funcion(){

// };

// Creacion de una variable y se asigna al boton de sumar a traves de su id.
const botonsumar = document.getElementById("Btnsumar");

// EL boton va a estar  atento cuando el usuario le de click y ejecutar la funcion.
botonsumar.addEventListener("click", sumar);

// Logica del programa perteneciente a la suma
function sumar(){
    // crear la variable y leer el id del input
    const var1 = Number (document.getElementById("numero1").value);
    const var2 = Number (document.getElementById("numero2").value);
    const divresultado = document.getElementById("ResSuma");
    
    resultado = var1 + var2;
    
    // alert ("El resultado es: " +resultado);

    divresultado.innerText  = resultado;
}

// declarar variables 
// realizar la operacion
// imprimir el resultado 



const botonrestar = document.getElementById("Btnrestar");

// EL boton va a estar  atento cuando el usuario le de click y ejecutar la funcion.
Btnrestar.addEventListener("click", restar);

function restar(){
    // crear la variable y leer el id del input
    const var1 = Number (document.getElementById("numero3").value);
    const var2 = Number (document.getElementById("numero4").value);
    const divresultado = document.getElementById("ResResta");
    
    resultado = var1 - var2;
    
    // alert ("El resultado es: " +resultado);

    divresultado.innerText  = resultado;
}


const botonmultiplicar = document.getElementById("Btnmultiplicar");

// EL boton va a estar  atento cuando el usuario le de click y ejecutar la funcion.
botonmultiplicar.addEventListener("click", multiplicar);

function multiplicar(){
    // crear la variable y leer el id del input
    const var1 = Number (document.getElementById("numero5").value);
    const var2 = Number (document.getElementById("numero6").value);
    const divresultado = document.getElementById("ResMultiplicacion");
    
    resultado = var1 * var2;
    
    // alert ("El resultado es: " +resultado);

    divresultado.innerText  = resultado;
}


const botondividir = document.getElementById("Btndividir");

// EL boton va a estar  atento cuando el usuario le de click y ejecutar la funcion.
botondividir.addEventListener("click", dividir);

function dividir(){
    // crear la variable y leer el id del input
    const var1 = Number (document.getElementById("numero7").value);
    const var2 = Number (document.getElementById("numero8").value);
    const divresultado = document.getElementById("ResDividir");
    
    resultado = var1 / var2;
    
    // alert ("El resultado es: " +resultado);

    divresultado.innerText  = resultado;
}


const botonsecuencia = document
.getElementById("Btnnumeros").
addEventListener("click", secuencia);

function secuencia(){
    
    const listado = document.getElementById("ResSecuencia");

    for( let x=1; x<=100; x++){
            const listas = document.createElement("li");
            listas.setAttribute("class", "list-group-item");
            // <li class="list-group-item">
            listas.innerText =x;
            listado.appendChild(listas);    

    }

}



const botonverificar = document.getElementById("Btnverificar");

// EL boton va a estar  atento cuando el usuario le de click y ejecutar la funcion.
Btnverificar.addEventListener("click", verificar);

function verificar(){
    // crear la variable y leer el id del input
    const var1 = Number (document.getElementById("numero11").value);
    const resultado = document.getElementById("ResVerificar");

    if (var1 >= 8 ){
        resultado.innerText = "Aprobado";
    }
    else{
        resultado.innerText = "Reprobado";
        const au = document.getElementById("audio");
        au.play();
    }
    
}