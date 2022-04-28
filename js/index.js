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
        //SI NO SE CUMPLE LA CONDICION SE EJECUTA ESTO
        let perimetro = ladoUno*2+ladoDos*2;

        let resultadoPerimetro = document.getElementById('resultadoPerimetro');
        resultadoPerimetro.innerHTML = 'El resultado del perimetro es <b>' + perimetro + '</b>'
    
    }


})

let btnMayor = document.getElementById('btnMayor');

btnMayor.addEventListener('click',function(){
    let inputLadoUno = document.getElementById('ladoUno');
    let inputLadoDos = document.getElementById('ladoDos');

    let ladoUno = parseFloat(inputLadoUno.value);
    let ladoDos = parseFloat(inputLadoDos.value);
    
    let resultadoMayor = document.getElementById('resultadoMayor');
    
    if(ladoUno>ladoDos){
        resultadoMayor.innerHTML = "<b>El lado Uno es mayor al lado dos</b>"
    }else if(ladoUno<ladoDos){
        resultadoMayor.innerHTML = "<b>El lado Dos es mayor al lado uno</b>"
    }else{
        resultadoMayor.innerHTML = "<b>Los lados son iguales</b>"
    }

})


let btnCalificacion = document.getElementById('btnCalificacion');

btnCalificacion.addEventListener('click',function(){

    let inputNota = document.getElementById('nota');

    let nota = parseInt(inputNota.value);

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

    let resultadoCalificacion = document.getElementById('resultadoCalificacion');
    resultadoCalificacion.innerHTML = `La calificación de su no es: <b>${calificacion}</b>`;
})

// BUCLES

let btnLetraA = document.getElementById('btnLetraA');

btnLetraA.addEventListener('click',function(){

    let inputFrase = document.getElementById('frase');

    let frase = inputFrase.value;

    let cantidadA = 0;
    let index = 0;

    while (index < frase.length) {
        console.log(frase[index]);
        if(frase[index]=='a'||frase[index]=='A'){
            cantidadA++;
        }
        index++;
    }
    

    let resultadoLetraA = document.getElementById('resultadoLetraA');
    resultadoLetraA.innerHTML = `La cantidad de letras A son: <b>${cantidadA}</b>`;
})

let btnVocales = document.getElementById('btnVocales');

btnVocales.addEventListener('click',function(){

    let inputFrase = document.getElementById('frase');
    let frase = inputFrase.value;

    let resultadoMostrarVocales = document.getElementById('resultadoMostrarVocales');
    resultadoMostrarVocales.innerHTML = '';
    
    let vocales = ["a","e","i","o","u","A","E","I","O","U"];

    for (let index = 0; index < frase.length; index++) {
        if(vocales.includes(frase[index])){
            resultadoMostrarVocales.innerHTML += `<b>${frase[index]}</b><br>`;
        }
        // if(frase[index]=='a'||frase[index]=='e'||frase[index]=='i'||frase[index]=='o'||frase[index]=='u'){
        // }
    }

})


