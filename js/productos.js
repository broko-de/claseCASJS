//FORMAS DE MANIPULAR EL DOM
const labelsOld = document.getElementsByClassName('labelF');
console.log(labelsOld);

//POR ATRIBUTO NAME
const inputNombre = document.getElementsByName('nombre');
console.log(inputNombre);

//POR ATRIBUNO ID
const inputPrecio = document.getElementById('precio');
console.log(inputPrecio);

//POR NOMBRE DEL TAG
const divs = document.getElementsByTagName('div');
console.log(divs);

//------- NUEVA FORMA -------
// SOLO ME DEVUELVE EL PRIMER ELEMENTO QUE ENCUENTRA CON ESE SELECTOR
const labelNew = document.querySelector(".labelF");
console.log(labelNew);

const labelsNew = document.querySelectorAll('.labelF');
console.log(labelsNew);

//----------------------------
// FUNCION PARA CREAR UN ELEMENTO DENTRO DE LA TABLA
const renderProductoTabla = (producto)  => {
    let trProducto = document.createElement('tr');
    //Defino el contenido del nuevo TR.El último td contiene un icono con el metodo JS eliminarProducto
    trProducto.innerHTML = `<td>${producto.nombre}</td>
                            <td>${producto.precio}</td>
                            <td>${producto.descuento}</td>
                            <td>${producto.stock}</td>
                            <td><a href="#" onclick="eliminarProducto(${producto.id})"><i class="fa-solid fa-trash"></i></a></td>
    `;
    //className es una propiedad JS que puede agregar una clase al elemento. 
    //Sobreescribe las clases que ya tiene previamente el elemento.
    trProducto.className='trProducto';
    //Agrego el atributo id al nuevo elemento.
    trProducto.id= `tr-${producto.id}`;
    let tbodyProducto = document.querySelector('#tablaProductos tbody');
    console.log(tbodyProducto);
    //SE LO AGREGO
    tbodyProducto.appendChild(trProducto);
}

//ARRAY DE EJEMPLO PARA CARGAR PREVIAMENTE PRODUCTOS
let arrayProductos = [];
if(localStorage.getItem('productos')){
    arrayProductos = JSON.parse(localStorage.getItem('productos'));
}else{
    arrayProductos = [
        {id:1,nombre:'Teclado',precio:4333,descuento:10,stock:20},
        {id:2,nombre:'Monitor',precio:333,descuento:3,stock:33},
        {id:3,nombre:'Micro',precio:333,descuento:3,stock:33},
    
    ];
}


arrayProductos.forEach(renderProductoTabla);

// FUNCION PARA CREAR UN PRODUCTO Y RENDERIZARLO AL FINAL DE LA TABLA
const crearProducto = function(event){
    //event es un elemento de JS que permite por medio de la funcion preventDefault
    //parar la ejecución normal del evento, en este caso enviar el formulario.
    event.preventDefault();
    //Se crea un objeto producto con los valores de los inputs
    let producto = new Object();
    producto.nombre = document.querySelector('#nombre').value;
    producto.precio = document.querySelector('#precio').value;
    producto.descuento = document.querySelector('#descuento').value;
    producto.stock = document.querySelector('#stock').value;
    console.log(producto);
    //validacion del descuento
    if(producto.descuento > 20){
        let alertError = document.querySelector('.alert');
        alertError.innerHTML = "El descuento no puede ser mayor a 20%";
        //Con classList puedo acceder desde JS a todas las clases que tiene ese elemento HTML 
        //La clase HIDE, tiene un propiedad css display:none, primero la elimino.
        alertError.classList.remove('hide');
        //Agrego una nueva clase al listado de clasese que ya tiene el elemento HTML
        alertError.classList.add('show');
        return false;
    }
    arrayProductos.push(producto);
    localStorage.setItem('productos',JSON.stringify(arrayProductos));
    renderProductoTabla(producto);
}

const resetForm = () => {
    let formProducto = document.querySelector("#formProducto");
    //metodo js para resetear los inputs de un formulario
    formProducto.reset();
}


//Funcion para elminar un producto, recibe el ID
function eliminarProducto(idProducto){
    //busco el elemento tr que tenga el id correspondiente
    let trProducto = document.querySelector("#tr-"+idProducto);
    //metodo js para eliminar un elemento HTML
    trProducto.remove();
}

//LOCALSTORAGE
//localStorage.setItem('unaVariable','Estoy creando un valor');
let elementP = document.querySelector('#ejemploStorage');
elementP.innerHTML = localStorage.getItem('unaVariable');

//SESSIONSTORAGE
// sessionStorage.setItem('test','Algo en la session');