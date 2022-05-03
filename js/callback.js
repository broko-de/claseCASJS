//FUNCION CALLBACK
const funcionB = function(){
    console.log('Funcion B ejecutada.');
}

const funcionA = function(callback){
    console.log(typeof callback);
    callback();
}

funcionA(funcionB);


//SON CALLBACK
function suma(a,b){
    return a+b;
}

//SON CALLBACK
function producto(a,b){
    return a*b;
}

function calculo(a,b,callback){
    return callback(a,b);
}

console.log('El resultado de la suma: ',calculo(4,5,suma));
console.log(`El resultado del producto: ${calculo(2,3,producto)}`);



