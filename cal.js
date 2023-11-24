console.log('Conectando...')
console.log('¡Hola, usuario!')

// Conversor decimal

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

        pResultado.addEventListener('click', copiar)
        function copiar(){
                let copy = resultado;
                navigator.clipboard.writeText(copy)
        }
    }
    else{
        pResultado.innerText = "¡Lo sentimos! Algo salió mal."
        pResultado.style = "color:red"
    }
}

// Conversor Binario

const numeroAConvertirBin = document.getElementById("boton1_bin")
const baseAUsarBin = document.getElementById("boton2_bin")
const btnCalcularBin = document.getElementById("calcular_Bin")
const pResultadoBin = document.getElementById("resultado_bin")

btnCalcularBin.addEventListener('click', calcularBin)

function calcularBin(){
        let BinToDecimal = Bin => parseInt(Bin, 2);
        const numeroBin = BinToDecimal(numeroAConvertirBin.value);
        const baseBin = baseAUsarBin.value

    if (baseBin > 0){
                let resultadoBin;
                resultadoBin = numeroBin.toString(baseBin)
                pResultadoBin.style = "color:black"
                pResultadoBin.innerText = "= " + resultadoBin

                pResultadoBin.addEventListener('click', copiarBin)
                function copiarBin(){
                        let copyBin = resultadoBin;
                        navigator.clipboard.writeText(copyBin)
                }
        }
        else{
                pResultadoBin.innerText = "¡Lo sentimos! Algo salió mal."
                pResultadoBin.style = "color:red"
        }
}

// Conversor Octal

const numeroAConvertirOct = document.getElementById("boton1_oct")
const baseAUsarOct = document.getElementById("boton2_oct")
const btnCalcularOct = document.getElementById("calcular_Oct")
const pResultadoOct = document.getElementById("resultado_oct")

btnCalcularOct.addEventListener('click', calcular_Oct)

function calcular_Oct(){
        let OctToDecimal = Oct => parseInt(Oct, 8);
        const numeroOct = OctToDecimal(numeroAConvertirOct.value);
        const baseOct = baseAUsarOct.value

        if (baseOct > 0){
                let resultadoOct;
                resultadoOct = numeroOct.toString(baseOct)
                pResultadoOct.style = "color:black"
                pResultadoOct.innerText = "= " + resultadoOct

                pResultadoOct.addEventListener('click', copiarOct)
                function copiarOct(){
                        let copyOct = resultadoOct;
                        navigator.clipboard.writeText(copyOct)
                }
        }
        else{
                pResultadoOct.innerText = "¡Lo sentimos! Algo salió mal."
                pResultadoOct.style = "color:red"
        }
}

// Conversor Hexadecimal

const numeroAConvertirHex = document.getElementById("boton1_hex")
const baseAUsarHex = document.getElementById("boton2_hex")
const btnCalcularHex = document.getElementById("calcular_Hex")
const pResultadoHex = document.getElementById("resultado_hex")

btnCalcularHex.addEventListener('click', calcular_Hex)

function calcular_Hex(){
        let HexToDecimal = Hex => parseInt(Hex, 16);
        const numeroHex = HexToDecimal(numeroAConvertirHex.value);
        const baseHex = baseAUsarHex.value

        if (baseHex > 0){
                let resultadoHex;
                resultadoHex= numeroHex.toString(baseHex)
                pResultadoHex.style = "color:black"
                pResultadoHex.innerText = "= " + resultadoHex

                pResultadoHex.addEventListener('click', copiarHex)
                function copiarHex(){
                        let copyHex = resultadoHex;
                        navigator.clipboard.writeText(copyHex)
                }
        }
        else{
                pResultadoHex.innerText = "¡Lo sentimos! Algo salió mal."
                pResultadoHex.style = "color:red"
        }
}

// Calculadora Decimal

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

                pResultado2.addEventListener('click', copiarCal)
                function copiarCal(){
                navigator.clipboard.writeText(rta)
                }
        }
        else if (operacion == "*" || operacion == "x" || operacion == "X" || operacion == "."){
                rta = op1 * op2
                pResultado2.style = "color:black"
                pResultado2.innerText = "= " + rta

                pResultado2.addEventListener('click', copiarCal)
                function copiarCal(){
                navigator.clipboard.writeText(rta)
                }
        }
        else if (operacion == "^"){
                rta = Math.pow(op1,op2)
                pResultado2.style = "color:black"
                pResultado2.innerText = "= " + rta

                pResultado2.addEventListener('click', copiarCal)
                function copiarCal(){
                navigator.clipboard.writeText(rta)
                }
        }
        else if (operacion == "/"){
                rta = op1 / op2
                pResultado2.style = "color:black"
                pResultado2.innerText = "= " + rta

                pResultado2.addEventListener('click', copiarCal)
                function copiarCal(){
                navigator.clipboard.writeText(rta)
                }
        }
        else if (operacion == "-" || operacion == "_"){
                rta = op1 - op2
                pResultado2.style = "color:black"
                pResultado2.innerText = "= " + rta

                pResultado2.addEventListener('click', copiarCal)
                function copiarCal(){
                navigator.clipboard.writeText(rta)
                }
        }
        else if (operacion == "%"){
                rta = op1 % op2
                pResultado2.style = "color:black"
                pResultado2.innerText = "= " + rta

                pResultado2.addEventListener('click', copiarCal)
                function copiarCal(){
                navigator.clipboard.writeText(rta)
                }
        }
        else if (operacion == "**"){

                rta = Math.pow(op1, 1/op2)
                pResultado2.style = "color:black"
                pResultado2.innerText = "= " + rta

                pResultado2.addEventListener('click', copiarCal)
                function copiarCal(){
                navigator.clipboard.writeText(rta)
                }
        }
        else if (operacion == "//"){

                rta = Math.log(op1) / Math.log(op2)
                pResultado2.style = "color:black"
                pResultado2.innerText = "= " + rta

                pResultado2.addEventListener('click', copiarCal)
                function copiarCal(){
                navigator.clipboard.writeText(rta)
                }
        }
        else if (operacion == ":"){

                rta = Math.pow(op1, 1/op2)
                pResultado2.style = "color:black"
                pResultado2.innerText = "= " + rta

                pResultado2.addEventListener('click', copiarCal)
                function copiarCal(){
                navigator.clipboard.writeText(rta)
                alert("Texto copiado en portapapeles")
                }
        }
        else{
        pResultado2.style = "color:red"
        pResultado2.innerText = "¡Lo sentimos! Algo salió mal."}
}

// Calculadora binaria

const numBin1 = document.getElementById("op1_bin")
const opBin = document.getElementById("op_bin")
const numBin2 = document.getElementById("op2_bin")
const btBin = document.getElementById("calcular_bin")
const pRespuestaBin = document.getElementById("respuesta_bin")
const pRespuestaBinDec = document.getElementById("respuesta_bin_dec")

btBin.addEventListener('click', calculo_bin)

function calculo_bin(){
        let binToDecimal = bin => parseInt(bin, 2);
        let op1_bin = binToDecimal(numBin1.value);
        let op2_bin = binToDecimal(numBin2.value);
        const op_bin = opBin.value
        
        if (op_bin == "+"){
                rta_bin = op1_bin + op2_bin
                rtaBin = rta_bin.toString(2)
                pRespuestaBin.style = "color:black"
                pRespuestaBin.innerText = "= " + rtaBin
                pRespuestaBinDec.style = "color:black"
                pRespuestaBinDec.innerText = "Decimal = " + rta_bin

                pRespuestaBin.addEventListener('click', copiarCalBin)
                function copiarCalBin(){
                navigator.clipboard.writeText(rtaBin)
                }

                pRespuestBintDec.addEventListener('click', copiarCalBinDec)
                function copiarCalBinDec(){
                navigator.clipboard.writeText(rta_bin)
                }
        }
        else if (op_bin == "*" || op_bin == "x" || op_bin == "X" || op_bin == "."){
                rta_bin = op1_bin * op2_bin
                rtaBin = rta_bin.toString(2)
                pRespuestaBin.style = "color:black"
                pRespuestaBin.innerText = "= " + rtaBin
                pRespuestaBinDec.style = "color:black"
                pRespuestaBinDec.innerText = "Decimal = " + rta_bin

                pRespuestaBin.addEventListener('click', copiarCalBin)
                function copiarCalBin(){
                navigator.clipboard.writeText(rtaBin)
                }

                pRespuestBintDec.addEventListener('click', copiarCalBinDec)
                function copiarCalBinDec(){
                navigator.clipboard.writeText(rta_bin)
                }
        }
        else if (op_bin == "^"){
                rta_bin = Math.pow(op1_bin, op2_bin)
                rtaBin = rta_bin.toString(2)
                pRespuestaBin.style = "color:black"
                pRespuestaBin.innerText = "= " + rtaBin
                pRespuestaBinDec.style = "color:black"
                pRespuestaBinDec.innerText = "Decimal = " + rta_bin

                pRespuestaBin.addEventListener('click', copiarCalBin)
                function copiarCalBin(){
                navigator.clipboard.writeText(rtaBin)
                }

                pRespuestBintDec.addEventListener('click', copiarCalBinDec)
                function copiarCalBinDec(){
                navigator.clipboard.writeText(rta_bin)
                }
        }
        else if (op_bin == "/"){
                rta_bin = op1_bin / op2_bin
                rtaBin = rta_bin.toString(2)
                pRespuestaBin.style = "color:black"
                pRespuestaBin.innerText = "= " + rtaBin
                pRespuestaBinDec.style = "color:black"
                pRespuestaBinDec.innerText = "Decimal = " + rta_bin

                pRespuestaBin.addEventListener('click', copiarCalBin)
                function copiarCalBin(){
                navigator.clipboard.writeText(rtaBin)
                }

                pRespuestBintDec.addEventListener('click', copiarCalBinDec)
                function copiarCalBinDec(){
                navigator.clipboard.writeText(rta_bin)
                }
        }
        else if (op_bin == "-" || op_bin == "_"){
                rta_bin = op1_bin - op2_bin
                rtaBin = rta_bin.toString(2)
                pRespuestaBin.style = "color:black"
                pRespuestaBin.innerText = "= " + rtaBin
                pRespuestaBinDec.style = "color:black"
                pRespuestaBinDec.innerText = "Decimal = " + rta_bin

                pRespuestaBin.addEventListener('click', copiarCalBin)
                function copiarCalBin(){
                navigator.clipboard.writeText(rtaBin)
                }

                pRespuestBintDec.addEventListener('click', copiarCalBinDec)
                function copiarCalBinDec(){
                navigator.clipboard.writeText(rta_bin)
                }
        }
        else if (op_bin == "%"){
                rta_bin = op1_bin % op2_bin
                rtaBin = rta_bin.toString(2)
                pRespuestaBin.style = "color:black"
                pRespuestaBin.innerText = "= " + rtaBin
                pRespuestaBinDec.style = "color:black"
                pRespuestaBinDec.innerText = "Decimal = " + rta_bin

                pRespuestaBin.addEventListener('click', copiarCalBin)
                function copiarCalBin(){
                navigator.clipboard.writeText(rtaBin)
                }

                pRespuestBintDec.addEventListener('click', copiarCalBinDec)
                function copiarCalBinDec(){
                navigator.clipboard.writeText(rta_bin)
                }
        }
        else if (op_bin == "**"){

                rta_bin = Math.pow(op1_bin, 1/op2_bin)
                rtaBin = rta_bin.toString(2)
                pRespuestaBin.style = "color:black"
                pRespuestaBin.innerText = "= " + rtaBin
                pRespuestaBinDec.style = "color:black"
                pRespuestaBinDec.innerText = "Decimal = " + rta_bin

                pRespuestaBin.addEventListener('click', copiarCalBin)
                function copiarCalBin(){
                navigator.clipboard.writeText(rtaBin)
                }

                pRespuestBintDec.addEventListener('click', copiarCalBinDec)
                function copiarCalBinDec(){
                navigator.clipboard.writeText(rta_bin)
                }
        }
        else if (op_bin == "//"){

                rta_bin = Math.log(op1_bin) / Math.log(op2_bin)
                rtaBin = rta_bin.toString(2)
                pRespuestaBin.style = "color:black"
                pRespuestaBin.innerText = "= " + rtaBin
                pRespuestaBinDec.style = "color:black"
                pRespuestaBinDec.innerText = "Decimal = " + rta_bin

                pRespuestaBin.addEventListener('click', copiarCalBin)
                function copiarCalBin(){
                navigator.clipboard.writeText(rtaBin)
                }

                pRespuestBintDec.addEventListener('click', copiarCalBinDec)
                function copiarCalBinDec(){
                navigator.clipboard.writeText(rta_bin)
                }
        }
        else{
            pRespuestaBin.style = "color:red"
            pRespuestaBin.innerText = "¡Lo sentimos! Algo salió mal."
            pRespuestaBinDec.style = 'color:red'
            pRespuestaBinDec.innerText = 'Error'}
}


// Calculadora octal

const numOct1 = document.getElementById("op1_oct")
const opOct = document.getElementById("op_oct")
const numOct2 = document.getElementById("op2_oct")
const btOct = document.getElementById("calcular_oct")
const pRespuestaOct = document.getElementById("respuesta_oct")
const pRespuestaOctDec = document.getElementById("respuesta_oct_dec")

btOct.addEventListener('click', calculo_oct)

function calculo_oct(){
        let octToDecimal = oct => parseInt(oct, 8);
        let op1_oct = octToDecimal(numOct1.value);
        let op2_oct = octToDecimal(numOct2.value);
        const op_oct = opOct.value
        
        if (op_oct == "+"){
                rta_oct = op1_oct + op2_oct
                rtaOct = rta_oct.toString(8)
                pRespuestaOct.style = "color:black"
                pRespuestaOct.innerText = "= " + rtaOct
                pRespuestaOctDec.style = "color:black"
                pRespuestaOctDec.innerText = "Decimal = " + rta_oct

                pRespuestaOct.addEventListener('click', copiarCalOct)
                function copiarCalOct(){
                navigator.clipboard.writeText(rtaOct)
                }

                pRespuestaOctDec.addEventListener('click', copiarCalOctDec)
                function copiarCalOctDec(){
                navigator.clipboard.writeText(rta_oct)
                }
        }
        else if (op_oct == "*" || op_oct == "x" || op_oct == "X" || op_oct == "."){
                rta_oct = op1_oct * op2_oct
                rtaOct = rta_oct.toString(8)
                pRespuestaOct.style = "color:black"
                pRespuestaOct.innerText = "= " + rtaOct
                pRespuestaOctDec.style = "color:black"
                pRespuestaOctDec.innerText = "Decimal = " + rta_oct

                pRespuestaOct.addEventListener('click', copiarCalOct)
                function copiarCalOct(){
                navigator.clipboard.writeText(rtaOct)
                }

                pRespuestaOctDec.addEventListener('click', copiarCalOctDec)
                function copiarCalOctDec(){
                navigator.clipboard.writeText(rta_oct)
                }
        }
        else if (op_oct == "^"){
                rta_oct = Math.pow(op1_oct, op2_oct)
                rtaOct = rta_oct.toString(8)
                pRespuestaOct.style = "color:black"
                pRespuestaOct.innerText = "= " + rtaOct
                pRespuestaOctDec.style = "color:black"
                pRespuestaOctDec.innerText = "Decimal = " + rta_oct

                pRespuestaOct.addEventListener('click', copiarCalOct)
                function copiarCalOct(){
                navigator.clipboard.writeText(rtaOct)
                }

                pRespuestaOctDec.addEventListener('click', copiarCalOctDec)
                function copiarCalOctDec(){
                navigator.clipboard.writeText(rta_oct)
                }
        }
        else if (op_oct == "/"){
                rta_oct = op1_oct / op2_oct
                rtaOct = rta_oct.toString(8)
                pRespuestaOct.style = "color:black"
                pRespuestaOct.innerText = "= " + rtaOct
                pRespuestaOctDec.style = "color:black"
                pRespuestaOctDec.innerText = "Decimal = " + rta_oct

                pRespuestaOct.addEventListener('click', copiarCalOct)
                function copiarCalOct(){
                navigator.clipboard.writeText(rtaOct)
                }

                pRespuestaOctDec.addEventListener('click', copiarCalOctDec)
                function copiarCalOctDec(){
                navigator.clipboard.writeText(rta_oct)
                }
        }
        else if (op_oct == "-" || op_oct == "_"){
                rta_oct = op1_oct - op2_oct
                rtaOct = rta_oct.toString(8)
                pRespuestaOct.style = "color:black"
                pRespuestaOct.innerText = "= " + rtaOct
                pRespuestaOctDec.style = "color:black"
                pRespuestaOctDec.innerText = "Decimal = " + rta_oct

                pRespuestaOct.addEventListener('click', copiarCalOct)
                function copiarCalOct(){
                navigator.clipboard.writeText(rtaOct)
                }

                pRespuestaOctDec.addEventListener('click', copiarCalOctDec)
                function copiarCalOctDec(){
                navigator.clipboard.writeText(rta_oct)
                }
        }
        else if (op_oct == "%"){
                rta_oct = op1_oct % op2_oct
                rtaOct = rta_oct.toString(8)
                pRespuestaOct.style = "color:black"
                pRespuestaOct.innerText = "= " + rtaOct
                pRespuestaOctDec.style = "color:black"
                pRespuestaOctDec.innerText = "Decimal = " + rta_oct

                pRespuestaOct.addEventListener('click', copiarCalOct)
                function copiarCalOct(){
                navigator.clipboard.writeText(rtaOct)
                }

                pRespuestaOctDec.addEventListener('click', copiarCalOctDec)
                function copiarCalOctDec(){
                navigator.clipboard.writeText(rta_oct)
                }
        }
        else if (op_oct == "**"){

                rta_oct = Math.pow(op1_oct, 1/op2_oct)
                rtaOct = rta_oct.toString(8)
                pRespuestaOct.style = "color:black"
                pRespuestaOct.innerText = "= " + rtaOct
                pRespuestaOctDec.style = "color:black"
                pRespuestaOctDec.innerText = "Decimal = " + rta_oct

                pRespuestaOct.addEventListener('click', copiarCalOct)
                function copiarCalOct(){
                navigator.clipboard.writeText(rtaOct)
                }

                pRespuestaOctDec.addEventListener('click', copiarCalOctDec)
                function copiarCalOctDec(){
                navigator.clipboard.writeText(rta_oct)
                }
        }
        else if (op_oct == "//"){

                rta_oct = Math.log(op1_oct) / Math.log(op2_oct)
                rtaOct = rta_oct.toString(8)
                pRespuestaOct.style = "color:black"
                pRespuestaOct.innerText = "= " + rtaOct
                pRespuestaOctDec.style = "color:black"
                pRespuestaOctDec.innerText = "Decimal = " + rta_oct

                pRespuestaOct.addEventListener('click', copiarCalOct)
                function copiarCalOct(){
                navigator.clipboard.writeText(rtaOct)
                }

                pRespuestaOctDec.addEventListener('click', copiarCalOctDec)
                function copiarCalOctDec(){
                navigator.clipboard.writeText(rta_oct)
                }
        }
        else if (op_oct == ":"){

                rta_oct = Math.pow(op1_oct, 1/op2_oct)
                rtaOct = rta_oct.toString(8)
                pRespuestaOct.style = "color:black"
                pRespuestaOct.innerText = "= " + rtaOct
                pRespuestaOctDec.style = "color:black"
                pRespuestaOctDec.innerText = "Decimal = " + rta_oct

                pRespuestaOct.addEventListener('click', copiarCalOct)
                function copiarCalOct(){
                navigator.clipboard.writeText(rtaOct)
                alert("Texto copiado en portapapeles")
                }

                pRespuestaOctDec.addEventListener('click', copiarCalOctDec)
                function copiarCalOctDec(){
                navigator.clipboard.writeText(rta_oct)
                alert("Texto copiado en portapapeles")
                }
        }
        else{
            pRespuestaOct.style = "color:red"
            pRespuestaOct.innerText = "¡Lo sentimos! Algo salió mal."
            pRespuestaOctDec.style = 'color:red'
            pRespuestaOctDec.innerText = 'Error'}
}


// Calculadora hexadecimal

const numHex1 = document.getElementById("op1_hex")
const opHex = document.getElementById("op_hex")
const numHex2 = document.getElementById("op2_hex")
const btHex = document.getElementById("calcular_hex")
const pRespuestaHex = document.getElementById("respuesta_hex")
const pRespuestaHexDec = document.getElementById('respuesta_hex_dec')

btHex.addEventListener('click', calculo_hex)

function calculo_hex(){
        let hexToDecimal = hex => parseInt(hex, 16);
        let op1_hex = hexToDecimal(numHex1.value);
        let op2_hex = hexToDecimal(numHex2.value);
        const op_hex = opHex.value
        
        if (op_hex == "+"){
                rta_hex = op1_hex + op2_hex
                rtaHex = rta_hex.toString(16)
                pRespuestaHex.style = "color:black"
                pRespuestaHex.innerText = "= " + rtaHex
                pRespuestaHexDec.style = "color:black"
                pRespuestaHexDec.innerText = "Decimal = " + rta_hex

                pRespuestaHex.addEventListener('click', copiarCalHex)
                function copiarCalHex(){
                navigator.clipboard.writeText(rtaHex)
                }

                pRespuestaHexDec.addEventListener('click', copiarCalHexDec)
                function copiarCalHexDec(){
                navigator.clipboard.writeText(rta_hex)
                }
        }
        else if (op_hex == "*" || op_hex == "x" || op_hex == "X" || op_hex == "."){
                rta_hex = op1_hex * op2_hex
                rtaHex = rta_hex.toString(16)
                pRespuestaHex.style = "color:black"
                pRespuestaHex.innerText = "= " + rtaHex
                pRespuestaHexDec.style = "color:black"
                pRespuestaHexDec.innerText = "Decimal = " + rta_hex

                pRespuestaHex.addEventListener('click', copiarCalHex)
                function copiarCalHex(){
                navigator.clipboard.writeText(rtaHex)
                }

                pRespuestaHexDec.addEventListener('click', copiarCalHexDec)
                function copiarCalHexDec(){
                navigator.clipboard.writeText(rta_hex)
                }
        }
        else if (op_hex == "^"){
                rta_hex = Math.pow(op1_hex, op2_hex)
                rtaHex = rta_hex.toString(16)
                pRespuestaHex.style = "color:black"
                pRespuestaHex.innerText = "= " + rtaHex
                pRespuestaHexDec.style = "color:black"
                pRespuestaHexDec.innerText = "Decimal = " + rta_hex

                pRespuestaHex.addEventListener('click', copiarCalHex)
                function copiarCalHex(){
                navigator.clipboard.writeText(rtaHex)
                }

                pRespuestaHexDec.addEventListener('click', copiarCalHexDec)
                function copiarCalHexDec(){
                navigator.clipboard.writeText(rta_hex)
                }
        }
        else if (op_hex == "/"){
                rta_hex = op1_hex / op2_hex
                rtaHex = rta_hex.toString(16)
                pRespuestaHex.style = "color:black"
                pRespuestaHex.innerText = "= " + rtaHex
                pRespuestaHexDec.style = "color:black"
                pRespuestaHexDec.innerText = "Decimal = " + rta_hex

                pRespuestaHex.addEventListener('click', copiarCalHex)
                function copiarCalHex(){
                navigator.clipboard.writeText(rtaHex)
                }

                pRespuestaHexDec.addEventListener('click', copiarCalHexDec)
                function copiarCalHexDec(){
                navigator.clipboard.writeText(rta_hex)
                }
        }
        else if (op_hex == "-" || op_hex == "_"){
                rta_hex = op1_hex - op2_hex
                rtaHex = rta_hex.toString(16)
                pRespuestaHex.style = "color:black"
                pRespuestaHex.innerText = "= " + rtaHex
                pRespuestaHexDec.style = "color:black"
                pRespuestaHexDec.innerText = "Decimal = " + rta_hex

                pRespuestaHex.addEventListener('click', copiarCalHex)
                function copiarCalHex(){
                navigator.clipboard.writeText(rtaHex)
                }

                pRespuestaHexDec.addEventListener('click', copiarCalHexDec)
                function copiarCalHexDec(){
                navigator.clipboard.writeText(rta_hex)
                }
        }
        else if (op_hex == "%"){
                rta_hex = op1_hex % op2_hex
                rtaHex = rta_hex.toString(16)
                pRespuestaHex.style = "color:black"
                pRespuestaHex.innerText = "= " + rtaHex
                pRespuestaHexDec.style = "color:black"
                pRespuestaHexDec.innerText = "Decimal = " + rta_hex

                pRespuestaHex.addEventListener('click', copiarCalHex)
                function copiarCalHex(){
                navigator.clipboard.writeText(rtaHex)
                }

                pRespuestaHexDec.addEventListener('click', copiarCalHexDec)
                function copiarCalHexDec(){
                navigator.clipboard.writeText(rta_hex)
                }
        }
        else if (op_hex == "**"){

                rta_hex = Math.pow(op1_hex, 1/op2_hex)
                rtaHex = rta_hex.toString(16)
                pRespuestaHex.style = "color:black"
                pRespuestaHex.innerText = "= " + rtaHex
                pRespuestaHexDec.style = "color:black"
                pRespuestaHexDec.innerText = "Decimal = " + rta_hex

                pRespuestaHex.addEventListener('click', copiarCalHex)
                function copiarCalHex(){
                navigator.clipboard.writeText(rtaHex)
                }

                pRespuestaHexDec.addEventListener('click', copiarCalHexDec)
                function copiarCalHexDec(){
                navigator.clipboard.writeText(rta_hex)
                }
        }
        else if (op_hex == "//"){

                rta_hex = Math.log(op1_hex) / Math.log(op2_hex)
                rtaHex = rta_hex.toString(16)
                pRespuestaHex.style = "color:black"
                pRespuestaHex.innerText = "= " + rtaHex
                pRespuestaHexDec.style = "color:black"
                pRespuestaHexDec.innerText = "Decimal = " + rta_hex

                pRespuestaHex.addEventListener('click', copiarCalHex)
                function copiarCalHex(){
                navigator.clipboard.writeText(rtaHex)
                }

                pRespuestaHexDec.addEventListener('click', copiarCalHexDec)
                function copiarCalHexDec(){
                navigator.clipboard.writeText(rta_hex)
                }
        }
        else if (op_hex == ":"){

                rta_hex = Math.pow(op1_hex, 1/op2_hex)
                rtaHex = rta_hex.toString(16)
                pRespuestaHex.style = "color:black"
                pRespuestaHex.innerText = "= " + rtaHex
                pRespuestaHexDec.style = "color:black"
                pRespuestaHexDec.innerText = "Decimal = " + rta_hex

                pRespuestaHex.addEventListener('click', copiarCalHex)
                function copiarCalHex(){
                navigator.clipboard.writeText(rtaHex)
                alert("Texto copiado en portapapeles")
                }

                pRespuestaHexDec.addEventListener('click', copiarCalHexDec)
                function copiarCalHexDec(){
                navigator.clipboard.writeText(rta_hex)
                alert("Texto copiado en portapapeles")
                }
        }
        else{
            pRespuestaHex.style = "color:red"
            pRespuestaHex.innerText = "¡Lo sentimos! Algo salió mal."
            pRespuestaHexDec.style = "color:red"
            pRespuestaHexDec.innerText = "¡Error de cálculo!"}
}

console.log("Finalizado.")
console.log("Intento de colaboración")
// comentario de colaboración