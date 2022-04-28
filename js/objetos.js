//DEFINICION DE OBJETOS
let auto = {
    marca:'Ford',
    modelo:'Ka',
    annio:2013,

    arrancar: function(){
        return `El auto ${this.marca} ${this.modelo} esta arrancando`;
        // return "El auto"+ this.marca+" "+this.modelo+" esta arrancando";
    }
};

console.log(auto);
//ACCEDEMOIS A UNA DETERMINADA PROPIEDAD
console.log(auto.marca);
console.log(auto.arrancar());

let persona = new Object();
console.log(persona);
persona.nombre = 'Pepe';
persona.apellido = 'Argento';
console.log(persona);
persona.email = 'email.com';

//FORMAS DE RECORRER LAS PROPIEDADE DE UN OBJETO
for(let x in persona){
    console.log(`${x} : ${persona[x]}`);
}

//DEVUELVE UN ARRAY DE LAS KEYS DE UN OBJETO
console.log(Object.keys(persona));

//FUNCIONES CONSTRUCTURAS
function Autos(marca,modelo,annio,puertas=5){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    this.puertas = puertas;

    this.arrancar = function(){
        return `El auto ${this.marca} ${this.modelo} esta arrancando`;
    }
    
}


let autoUno = new Autos('Renault','Sandero',2018);
console.log(autoUno);
console.log(autoUno.arrancar());

let autoDos = new Autos('Peugeot','208',2016,3);
console.log(autoDos);
console.log(autoDos.arrancar());

// MOSTRAR POR PANTALLA EL VALOR DE UN OBJETO
let autos = document.getElementById('autos');
autos.innerHTML = `${autoUno.modelo}`;


//SINTAXIS DE CLASES
class Estudiante {

    constructor(nombre,email,edad){
        this.nombre=nombre;
        this.email=email;
        this.edad=edad;
    }

    saludar(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
    }


}

let estudianteUno = new Estudiante('Mony Argento','mony@gmai.com',50);
estudianteUno.saludar();
