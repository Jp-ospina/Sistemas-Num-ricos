console.log('Conectando...')
console.log('¡Hola, usuario!')
/*
let numeroAConvertir = 5
let numeroConvertido =numeroAConvertir.toString(2)
console.log(numeroConvertido)
*/
const numeroAConvertir = document.getElementById("boton1")
const baseAUsar = document.getElementById("boton2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click', calcular)

function calcular(){
    const base = baseAUsar.value
    const numero = parseFloat(numeroAConvertir.value)

    if (base > 0){
        let resultado;
        resultado = numero.toString(base)
        pResultado.style = "color:black"
        pResultado.innerText = "= " + resultado
    }
    else{
        pResultado.innerText = "¡Lo sentimos! Algo salió mal."
        pResultado.style = "color:red"
    }
}

var a = document.getElementById("op1")
var b = document.getElementById("operacion")
var c = document.getElementById("op2")
var btnCalcular2 = document.getElementById("calcular2")
var pResultado2 = document.getElementById("respuesta2")

btnCalcular2.addEventListener('click', calculo)

function calculo(){
    const operacion = b.value
    const op1 = parseFloat(a.value)
    const op2 = parseFloat(c.value)

if (operacion == "+"){
        rta = op1 + op2
        pResultado2.style = "color:black"
        pResultado2.innerText = "= " + rta
}
else if (operacion == "*" || operacion == "x" || operacion == "X" || operacion == "."){
        rta = op1 * op2
        pResultado2.style = "color:black"
        pResultado2.innerText = "= " + rta
}
else if (operacion == "/"){
        rta = op1 / op2
        pResultado2.style = "color:black"
        pResultado2.innerText = "= " + rta
}
else if (operacion == "-" || operacion == "_"){
        rta = op1 - op2
        pResultado2.style = "color:black"
        pResultado2.innerText = "= " + rta
}
else if (operacion == "%"){
        rta = op1 % op2
        pResultado2.style = "color:black"
        pResultado2.innerText = "= " + rta
}
else{
    pResultado2.style = "color:red"
    pResultado2.innerText = "¡Lo sentimos! Algo salió mal."}
}

console.log("Finalizado.")
console.log("Intento de colaboración")
// comentario de colaboración