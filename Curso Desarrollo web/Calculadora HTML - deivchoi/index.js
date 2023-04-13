const txtOp1 = document.getElementById("op1")
const txtOperacion = document.getElementById("operacion")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click', calcular) //"escuchará" cuando se haga click y ejecutará la función calcular

function calcular(){
    //console.log(txtOperacion.value) //mostrará en consola lo que se escriba en el input del operador
    const operacion = txtOperacion.value;
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

    if((operacion == "+" || operacion == "-" || operacion== "*" || operacion == "/") && !isNaN(op1) && !isNaN(op2)){
        //calculará con esos simbolos                                                  // !isNan(op1) "desconfirma" lo que afirma
                                                                                        // pide que ambos sean números
        let resultado;
        switch (operacion) {
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1 * op2
                break
            default:
                resultado = op1/op2
                break;
        }
        pResultado.style = "color:green"
        pResultado.innerText = "= " + resultado
    }else{
        pResultado.style = "color:red"
        pResultado.innerText = "Cálculo imposible"
    }
}