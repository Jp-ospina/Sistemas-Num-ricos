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
        else if (operacion == "^"){
                rta = Math.pow(op1,op2)
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



// Calculadora octal

const numOct1 = document.getElementById("op1_oct")
const opOct = document.getElementById("op_oct")
const numOct2 = document.getElementById("op2_oct")
const btOct = document.getElementById("calcular_oct")
const pResultadoOct = document.getElementById("respuesta_oct")

btOct.addEventListener('click', calculo_oct)

function calculo_oct(){
        let octToDecimal = oct => parseInt(oct, 8);
        let op1_oct = octToDecimal(numOct1.value);
        let op2_oct = octToDecimal(numOct2.value);
        const op_oct = opOct.value
        
        if (op_oct == "+"){
                rta_oct = op1_oct + op2_oct
                rtaOct = rta_oct.toString(8)
                pResultadoOct.style = "color:black"
                pResultadoOct.innerText = "= " + rtaOct
        }
        else if (op_oct == "*" || op_oct == "x" || op_oct == "X" || op_oct == "."){
                rta_oct = op1_oct * op2_oct
                rtaOct = rta_oct.toString(8)
                pResultadoOct.style = "color:black"
                pResultadoOct.innerText = "= " + rtaOct
        }
        else if (op_oct == "^"){
                rta_oct = Math.pow(op1_oct, op2_oct)
                rtaOct = rta_oct.toString(8)
                pResultadoOct.style = "color:black"
                pResultadoOct.innerText = "= " + rtaOct
        }
        else if (op_oct == "/"){
                rta_oct = op1_oct / op2_oct
                rtaOct = rta_oct.toString(8)
                pResultadoOct.style = "color:black"
                pResultadoOct.innerText = "= " + rtaOct
        }
        else if (op_oct == "-" || op_oct == "_"){
                rta_oct = op1_oct - op2_oct
                rtaOct = rta_oct.toString(8)
                pResultadoOct.style = "color:black"
                pResultadoOct.innerText = "= " + rtaOct
        }
        else if (op_oct == "%"){
                rta_oct = op1_oct % op2_oct
                rtaOct = rta_oct.toString(8)
                pResultadoOct.style = "color:black"
                pResultadoOct.innerText = "= " + rtaOct
        }
        else{
            pResultadoOct.style = "color:red"
            pResultadoOct.innerText = "¡Lo sentimos! Algo salió mal."}
}


// Calculadora hexadecimal

const numHex1 = document.getElementById("op1_hex")
const opHex = document.getElementById("op_hex")
const numHex2 = document.getElementById("op2_hex")
const btHex = document.getElementById("calcular_hex")
const pResultadoHex = document.getElementById("respuesta_hex")

btHex.addEventListener('click', calculo_hex)

function calculo_hex(){
        let hexToDecimal = hex => parseInt(hex, 16);
        let op1_hex = hexToDecimal(numHex1.value);
        let op2_hex = hexToDecimal(numHex2.value);
        const op_hex = opHex.value
        
        if (op_hex == "+"){
                rta_hex = op1_hex + op2_hex
                rtaHex = rta_hex.toString(16)
                pResultadoHex.style = "color:black"
                pResultadoHex.innerText = "= " + rtaHex
        }
        else if (op_hex == "*" || op_hex == "x" || op_hex == "X" || op_hex == "."){
                rta_hex = op1_hex * op2_hex
                rtaHex = rta_hex.toString(16)
                pResultadoHex.style = "color:black"
                pResultadoHex.innerText = "= " + rtaHex
        }
        else if (op_hex == "^"){
                rta_hex = Math.pow(op1_hex, op2_hex)
                rtaHex = rta_hex.toString(16)
                pResultadoHex.style = "color:black"
                pResultadoHex.innerText = "= " + rtaHex
        }
        else if (op_hex == "/"){
                rta_hex = op1_hex / op2_hex
                rtaHex = rta_hex.toString(16)
                pResultadoHex.style = "color:black"
                pResultadoHex.innerText = "= " + rtaHex
        }
        else if (op_hex == "-" || op_hex == "_"){
                rta_hex = op1_hex - op2_hex
                rtaHex = rta_hex.toString(16)
                pResultadoHex.style = "color:black"
                pResultadoHex.innerText = "= " + rtaHex
        }
        else if (op_hex == "%"){
                rta_hex = op1_hex % op2_hex
                rtaHex = rta_hex.toString(16)
                pResultadoHex.style = "color:black"
                pResultadoHex.innerText = "= " + rtaHex
        }
        else{
            pResultadoHex.style = "color:red"
            pResultadoHex.innerText = "¡Lo sentimos! Algo salió mal."}
}

console.log("Finalizado.")
console.log("Intento de colaboración")
// comentario de colaboración