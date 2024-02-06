window.addEventListener("load",iniciar,false); 

function iniciar(){
  var nodo_padre=document.querySelectorAll('div > *');
  var contenedor=document.getElementById('contenedor');

  nodo_padre.forEach(function(elemento){
    if(elemento.id != 'contenedor')

    var nuevoElementoLista=document.createElement('li');
    nuevoElementoLista.textContent=elemento.tagName + '->' + elemento.textContent;
    contenedor.appendChild(nuevoElementoLista);

});
}