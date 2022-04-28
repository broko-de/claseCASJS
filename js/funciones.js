
var varGlobal = 'Soy una variable Global';

saludarComision();

//FUNCIONES DECLARITIVAS
function saludarComision(){
    var varLocal = 'Soy scope local';
    console.log('Hola Comision 22075😎');
    console.log('Esto en la funcion: ',varGlobal);
    console.log(varLocal);
}

console.log('Estoy en el ambito global',varGlobal);
// console.log(varLocal);

myFunction();

// aquí puede se puede usar carName
function myFunction() {
    carName = "Volvo";  // variable no declarada
    console.log(carName);
}

console.log('esto en el global',carName);


// FUNCION CON PARAMETROS
function calcularPerimetro(ladoUnoParametro, ladoDosParametro){
    let perimetro = ladoUnoParametro*2+ladoDosParametro*2;
    let resultadoPerimetro = document.getElementById('resultadoPerimetro');
    resultadoPerimetro.innerHTML = 'El resultado del perimetro es <b>' + perimetro + '</b>'
}

const calcularPerimetroArrow = (ladoUno,ladoDos) => {
    let perimetro = ladoUno*2+ladoDos*2;
    let resultadoPerimetro = document.getElementById('resultadoPerimetro');
    resultadoPerimetro.innerHTML = 'El resultado del perimetro es <b>' + perimetro + '</b>'
}

let btnPerimetro = document.getElementById('btnPerimetro');

btnPerimetro.addEventListener('click',function(){
    let inputLadoUno = document.getElementById('ladoUno');
    let inputLadoDos = document.getElementById('ladoDos');

    let ladoUno = parseFloat(inputLadoUno.value);
    let ladoDos = parseFloat(inputLadoDos.value);
    
    //CONDICIONAL 
    if(Number.isNaN(ladoUno)||Number.isNaN(ladoDos)){
        //SI SE CUMPLE LA CONDICION SE EJECUTA ESTO
        alert('Los lados ingresados no corresponden a un formato numerico');
    }else{
        calcularPerimetroArrow(ladoUno,ladoDos);  
    }
})

//FUNCIONES QUE DEVUELVEN VALORES
function determinarMayor(numeroUno,numeroDos){
    let resultado = '';
    if(numeroUno>numeroDos){
        resultado = "<b>El lado Uno es mayor al lado dos</b>";
    }else if(numeroUno<numeroDos){
        resultado = "<b>El lado Dos es mayor al lado uno</b>";
    }else{
        resultado = "<b>Los lados son iguales</b>";
    }
    return resultado;
}

let btnMayor = document.getElementById('btnMayor');

btnMayor.addEventListener('click',function(){
    let inputLadoUno = document.getElementById('ladoUno');
    let inputLadoDos = document.getElementById('ladoDos');

    let ladoUno = parseFloat(inputLadoUno.value);
    let ladoDos = parseFloat(inputLadoDos.value);
    
    let resultadoMayor = document.getElementById('resultadoMayor');
    resultadoMayor.innerHTML = determinarMayor(ladoUno,ladoDos);

})

//FUNCIONES DE EXPRESION
const determinarCalificacion = function(nota){
    let calificacion = '';

    switch (nota) {
        case 10:
            calificacion='Sobresaliente';
            break;
        case 9:
            calificacion='Notable';
            break;
        case 8:
            calificacion='Bien';
            break;
        case 7:
        case 6:
            calificacion='Aprobado';
            break
        default:
            calificacion = 'Desaprobado';
            break;
    }

    return calificacion;
}

let btnCalificacion = document.getElementById('btnCalificacion');

btnCalificacion.addEventListener('click',function(){

    let inputNota = document.getElementById('nota');

    let nota = parseInt(inputNota.value);

    let resultadoCalificacion = document.getElementById('resultadoCalificacion');
    resultadoCalificacion.innerHTML = `La calificación de su no es: <b>${determinarCalificacion(nota)}</b>`;
})



// FUNCION FLECHA
const contarLetraA = (frase) => {
    let cantidadA = 0;
    let index = 0;

    while (index < frase.length) {
        if(frase[index]=='a'||frase[index]=='A'){
            cantidadA++;
        }
        index++;
    }

    return cantidadA;
}

let btnLetraA = document.getElementById('btnLetraA');

btnLetraA.addEventListener('click',function(){

    let inputFrase = document.getElementById('frase');

    let frase = inputFrase.value;

    let resultadoLetraA = document.getElementById('resultadoLetraA');
    resultadoLetraA.innerHTML = `La cantidad de letras A son: <b>${contarLetraA(frase)}</b>`;
})




