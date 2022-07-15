const btn = document.querySelector("#send");


btn.addEventListener("click", function (e) {
   
    e.preventDefault();
    var inputValue = document.querySelectorAll('input[name="name"]')
    sacar(inputValue[0].value);    
})

var saldoCliente = 122.50;

var notas = [2,5,10,20,50,100]

function sacar(valorSaque) {
    if (valorSaque > saldoCliente) {
        alert("Saldo insuficiente para saque.")
    }else {
        notaQtd(notas, valorSaque)
    }
}

function notaQtd(notas,entrada)
{   for(var i = 0; i < notas.length; i++)
    {   if(entrada >= notas[i])
        {   var notaM = notas[i];
        }
    }
    var numN = entrada / notaM;
    alert(Math.floor(numN) + " nota de : " + notaM);
    resto = parseFloat(entrada % notaM);
    if((resto != 0) && (resto > 1))
    {   notaQtd(notas,resto);
    }else if(resto != 0)
    {   alert("Sobrou :" + resto);
    }
}