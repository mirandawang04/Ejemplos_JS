
//declarar variable necesaria
var numero=4;
var borrado=0;

//función para crear tanto un nuevo elemento de la lista como su contenido
function crear(numero,texto){
    //creamos un nuevo elemento de la lista
    var nuevo_li=document.createElement('li');
    //contenido del elemento
    var contenido=document.createTextNode(numero+'.'+texto);
    //añadirlo en la lista
    nuevo_li.appendChild(contenido);
    return nuevo_li
}

//funcion relacionado con el boton insertar
function insertar() {
    //accedemos al nodo padre
    let nodo_padre=document.getElementById('lista');

    //al pulsar sobre él pediremos el primer elemento a introducir y después el segundo elemento
    var elemento_1 = prompt('Introduce el primer elemento');
    var elemento_2 = prompt('Introduce el segundo elemento');

    //creamos los contenidos de ambos elementos
    var primero=crear(numero,elemento_1);
    numero+=1;
    var segundo=crear(numero,elemento_2);
    numero+=1;

    //Complementa la inserción añadiendo el primer elemento en color azul y el segundo elemento en color rojo.
    primero.style.color='blue';
    segundo.style.color='red';

    //lo añadimos a nuestra lista de elementos
    nodo_padre.appendChild(primero);
    nodo_padre.appendChild(segundo);
}

//funcion relacionado con el boton borrar
function borrar(){
    borrado+=1;
    //accedemos al nodo padre
    let nodo_padre=document.getElementById('lista');
    var lista=nodo_padre.getElementsByTagName('li');

    //si el numero de borrados coincide con el numero de li entonces me mostrará un alert que indica al usuario
    if(borrado==numero){
        alert('Ya no hay más elementos para borrar.');
    } else {
        var primer = lista[0]; //accedemos al primer elemento
        nodo_padre = primer.parentNode;

        //borramos el segundo elemento
        nodo_padre.removeChild(primer);

        //mostrando que elemento hemos eliminado 
        var span=document.getElementById('informacion');
        var contenido=primer.textContent;
        span.innerHTML=contenido;
    }
}