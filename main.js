
let parrafo = document.querySelector(".parraf");
let parrafo2 = document.querySelector(".parraf2");

let stringFechas = "03/06/1993 04/06/1993 29/05/1993 14/10/1992 04/06/1993";
let res = stringFechas.split(" ");

var a1,a2,a3;
var b1,b2,b3;
var res1, respu;
var resultado = "";

function comparar(a, b) {
    var arrayA = a.toString().split("/");
    var arrayB = b.toString().split("/");
    
    for(let i = 0; i < arrayA.length; i ++) {
        a1 = arrayA[0];
        a2 = arrayA[1];
        a3 = arrayA[2];

    }
    for(let i = 0; i < arrayB.length; i ++) {
        b1 = arrayB[0];
        b2 = arrayB[1];
        b3 = arrayB[2];
    }

    if(a3 == b3) {
        if(a2 == b2) {
            if(a1 == b1) {
                // son iguales
                respu = 0;
            } else if(a1 > b1) {
                // a es mayor
                respu = 1;
            }
            else {
                // b es mayor
                respu = -1;
            }
        }
        else if(a2 > b2) {
            // a es mayor
            respu = 1;
        }
        else {
            // b es mayor
            respu = -1;
        }
    }
    else if(a3 > b3) {
        // a es mayor
        respu = 1;
    }
    else {
        // b es mayor
        respu = -1;
    }

    return respu;
}

for(let i = 0; i < res.length; i ++) {
    for(let j = 0; j < res.length -1 -i; j ++) {
        resultado = comparar(res[j], res[j +1]);
        if(resultado == -1) {
            [res[j], res[j +1]] = [res[j +1], res[j]];
        }
    }
}
var reverse = res.reverse();

parrafo.innerHTML = stringFechas;
parrafo2.innerHTML = reverse;