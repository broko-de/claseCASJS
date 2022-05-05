//DEFINICIO DE ARRAY
let arreglo = new Array('a','b',33,'a');
console.log(arreglo);

let arregloDef2 = ['c','d',false,999,{nombre:'fede',apellido:'liquin'}];
console.log(arregloDef2);

//POSICIONES - LONGITUD
console.log('Primer elemento ',arreglo[2]);
console.log('Cantidad de elementos: ', arreglo.length);
console.log('Cantidad de elementos array2: ', arregloDef2.length);

function recorrerArray(arreglo){
    console.log('----------');
    for (let i = 0; i < arreglo.length; i++) {
        console.log(`POSICION: ${i}, CONTENIDO: ${arreglo[i]}`);
    }
    console.log('----------');
}

recorrerArray(arreglo);
// recorrerArray(arregloDef2);

// AGREGAR AL FINAL
arreglo.push('Hola soy el final');
recorrerArray(arreglo);
//ELMINAR EL ULTIMO
arreglo.pop();
recorrerArray(arreglo);

//AGREGAR AL INICIO
arreglo.unshift('SOY el PRINCIPIO');
recorrerArray(arreglo);
//ELIMINAR EL PRIMERO
arreglo.shift();
recorrerArray(arreglo);

//OBTENER LA POSICION DE UN ELEMENTO
console.log('POSICION: ',arreglo.indexOf('a'));

let meses = ['Ene','Mar','Abr','Jun','Jul'];

//SPLICE 
//1- Posicion donde quiere agregar/quitar un elemento
//2- cantidad de elementos que quiero eliminar a partir de la posicion 
//3- Elemento a agregar
meses.splice(1,0,'Feb');
console.log(meses);
//Eliminar jun y coloca May
meses.splice(4,1,'May');
console.log(meses);
// ELIMINA EL VALOR DE LA POSICION 4
meses.splice(4,1);
console.log(meses);


//SLICE
let frutas = ['Pera','Manzana','Banana','Anana'];
let frutas_aux = frutas.slice(1,3);
console.log(frutas_aux);

//FOREACH
const mostrar = (elemento,indice) =>{
    console.log(`Pos: ${indice}, elem: ${elemento+3}`);
}

// frutas.forEach((element,index) => {
//     console.log(`POSICION: ${index}, elemento: ${element}`);
// });

frutas.forEach(mostrar);

let edades = [19,2,3,20,50];

const comprobarEdad = (edad) =>{
    return edad >= 18;
}

console.log(edades.every(comprobarEdad));

const numeros = [1,4,5,8,34,6,2];

const operarNumero = (numero)=>{
    return numero+10;
}

let nuevoArray = numeros.map(operarNumero);
console.log('Nuevo Array: ',nuevoArray);
console.log('Array Original: ',numeros);


const mayorQue18 = (edad) =>{
    return edad > 18;
}

let arrayMayores = edades.filter(mayorQue18);
console.log(arrayMayores);

let jsonStr = '{"nombre":"Juan","apellido":"perez","edad":34}';
console.log(jsonStr);
console.log(typeof jsonStr);
let obj = JSON.parse(jsonStr);
console.log(obj);
console.log(typeof obj);
console.log(obj.nombre);