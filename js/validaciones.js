/**
 * validaciones.js
 * @author Luis C Marzal
 * @license GPL-V3
 */

'use strict'

console.log('Cargado JS')

// Input de tipo numéricos
let iCalculo1 = document.getElementById('iCalculo1')
let iCalculo2 = document.getElementById('iCalculo2')
let iCalculo3 = document.getElementById('iCalculo3')

iCalculo1.onchange = media
iCalculo2.onchange = media
iCalculo3.onchange = media


/**
 * Funcion que calcula la media de los valores numéricos
 */
function media() {
    let media = document.getElementById('spanMedia')
    media.innerHTML = (parseInt(iCalculo1.value)+parseInt(iCalculo2.value)+parseInt(iCalculo3.value))/3
}

// Botón para resetear los valores numéricos a 0
let btnCero = document.getElementById('btnCero')

btnCero.onclick = aCero

/**
 * Función que define los valores numéricos a 0
 */
function aCero() {
    iCalculo1.value = '0'
    iCalculo2.value = '0'
    iCalculo3.value = '0'
}

/**
 * Boton enviar comprueba la suma de los numéricos
 */
let enviar = document.getElementById('enviar')

enviar.onclick = comprobarSuma

// Div que muestra los errores en caso de que haya
let divError = document.getElementById('divError')

/**
 * Funcion que comprueba si la suma de los valores numéricos 
 * está comprendida entre 10 y 20
 */
function comprobarSuma() {
    if((parseInt(iCalculo1.value)+parseInt(iCalculo2.value)+parseInt(iCalculo3.value))<10 || (parseInt(iCalculo1.value)+parseInt(iCalculo2.value)+parseInt(iCalculo3.value))>20){
        divError.innerHTML = 'La suma de los valores numéricos debe estar entre 10 y 20'
        divError.style.display = 'block'
    }
    else{
        divError.innerHTML = ''
        divError.style.display = 'none'
    }
}

/**
 * Obtencion de select de cursos y parrafo en el cual está el mismo select
 */
let sCurso = document.getElementById('sCurso')
let pSelect = document.getElementById('pSelect')

sCurso.onchange = compruebaCurso

/**
 * Creacion de Elementos select sDaw1 y sDaw2
 * Y añadir options a los select
 */
let sDaw1 = document.createElement('select')
let sDaw2 = document.createElement('select')

let sDaw1C1 = document.createElement('option')
sDaw1.appendChild(sDaw1C1)
let sDaw1C2 = document.createElement('option')
sDaw1.appendChild(sDaw1C2)
sDaw1C1.innerHTML = 'Sistemas Informáticos'
sDaw1C2.innerHTML = 'Base de datos'

let sDaw2C1 = document.createElement('option')
sDaw2.appendChild(sDaw2C1)
let sDaw2C2 = document.createElement('option')
sDaw2.appendChild(sDaw2C2)
sDaw2C1.innerHTML = 'Desarrollo Web en Entorno Cliente'
sDaw2C2.innerHTML = 'Desarrollo Web en Entorno Servidor'

/**
 * Función que comprueba el Select curso cada vez que cambia
 * Si el valor es 1DAW añade el select sDaw1
 * Si el valor es 2DAW añade el select sDaw2
 */
function compruebaCurso() {
    if(pSelect.lastChild == sDaw1){
        pSelect.removeChild(sDaw1)
    }
    if(pSelect.lastChild == sDaw2){
        pSelect.removeChild(sDaw2)
    }

    if(sCurso.value == '1DAW') {
        
        pSelect.appendChild(sDaw1)
    }
    else {
        if(sCurso.value == '2DAW') {
            pSelect.appendChild(sDaw2)
        }
    }
}

