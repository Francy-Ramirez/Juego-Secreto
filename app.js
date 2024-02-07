let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();

let listaGenerica = [];
let lenguajesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "python"];
lenguajesDeProgramacion.push("Java", "Ruby", "Golang");

function mostrarLenguajesSeparadamente() {
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
        console.log(lenguajesDeProgramacion[i]);
    }
} 
mostrarLenguajesSeparadamente();

function mostrarLenguajeReversoSeparadamente() {
    for (let i = lenguajesDeProgramacion.length -1; i >= 0; i--) {
        console.log(lenguajesDeProgramacion[i]);
    }
}
mostrarLenguajeReversoSeparadamente();

function calcularMedia (lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista [i];
    }
return suma / lista,length;
}

let numeros = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros);
console.log ("Media:", media);


function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log('Mayor:', mayor);
  console.log('Menor:', menor);
}

let numero = [15, 8, 25, 5, 12];
encontrarMayorMenor(numero);


function calcularSuma(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma;
  }
  
  let number = [15, 8, 25, 5, 12];
  let suma = calcularSuma(number);
  console.log('Suma:', suma);

  function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }

  let lista = [1,2,3,4,5];
let cuadrado = [];

let lista1 = [8, 2, 5, 3];
let lista2 = [8, 3, 10, 17];
let listaFinal =[];

function sumarListas(lista1, lista2) {
  for (let i = 0; i < lista1.length; i++) {
    listaFinal[i] = lista1[i] + lista2 [i];
  }
  return listaFinal.push();
}

sumarListas(lista1, lista2);
console.log(listaFinal);




function cuadradoLista(lista) {
    for (let i = 0; i < lista.length; i++) {
        cuadrado.push(lista[i] * lista[i]);
    }
    return cuadrado;
}

cuadradoLista(lista);
console.log(cuadrado);
  
//console.log (lenguajesDeProgramacion);
//console.log (lenguajesDeProgramacion [7]);
//console.log (lenguajesDeProgramacion [0]);
//console.log(lenguajesDeProgramacion[lenguajesDeProgramacion.length - 1]);
