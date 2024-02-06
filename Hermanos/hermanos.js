//Necesitamos averiguar los elementos que tienen como padre común un div con id=”revisar”. Deberás mostrar estos elementos como ítems de la lista con id=”contenedor” sin hacer uso de childNodes.

// Obtén el elemento con id "revisar"
var revisar = document.getElementById("revisar");

//Obetenemos todos los elementos del nodo padre, que en este caso es 'revisar'
var elementos_hijos = revisar.children;

// Obtén la lista con id "contenedor"
var contenedor = document.getElementById("contenedor");

// Recorre los elementos hijos y agrégales a la lista
for (var i = 0; i < elementos_hijos.length; i++) {
  //creamos nuevo li para cada hijo
  var nuevoElementoLista = document.createElement("li");
  //guardamos en la variable el contenido de cada hijo para despues añadirlo a nuestra li
  var contenido=elementos_hijos[i].textContent;
  nuevoElementoLista.textContent=contenido
  //y al final lo añadimos a nuestra lista
  contenedor.appendChild(nuevoElementoLista);
}
