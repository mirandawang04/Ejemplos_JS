
//funcion que se ejecuta al cargar la página
window.addEventListener('load',mostrar_resultado,false);

//creamos la funcion donde contiene todas las operaciones que necesitamos
function mostrar_resultado(){
    //Número de enlaces de la página
    var num_enlaces=document.getElementsByTagName('a');
 
    //Dirección a la que enlaza el penúltimo enlace 
    var penultimo_enlace=num_enlaces[num_enlaces.length-2];
    //acceder al valor del atributo en este caso 'href'
    var valor=penultimo_enlace.getAttribute('href');

    //Número de enlaces que apuntan a http://prueba (o su equivalente en otros navegadores si es que existe esa posibilidad)
    //creamos la variable para guardar la cantidad de enlaces 
    var num_enlaces_prueba=0;
    //un for que recorre todos los enlaces del html
    for(var i=0; i<num_enlaces.length;i++){
        //conseguimos el valor del atributo href de cada elemento
        var contenido=num_enlaces[i].getAttribute('href');
        //Si coincide con el que buscamos num_enlaces_prueba ++
        if(contenido=="http://prueba")
        num_enlaces_prueba+=1;
    }

    //Número de enlaces del tercer párrafo
    //conseguimos los ps totales y accedemos al tercero en este caso
    var tercer_parrafo=document.getElementsByTagName('p')[2];
    //contamos todos los enlaces de este tercer p
    var tercer_enlace=tercer_parrafo.getElementsByTagName('a').length;
    
    //Mostramos los resultados en la propia página mediante un innerHTML
    var resultado='1.El número de enlaces de la página es '+ num_enlaces.length + '<br>' +
                    '2.La dirección que enlaza el penúltimo enlace es ' + valor + '<br>' +
                    '3.Número de enlaces que apuntan a http://prueba: ' + num_enlaces_prueba + '<br>' +
                    '4.Número de enlaces del tercer párrafo: ' + tercer_enlace;
    var texto=document.getElementById('resultado');
    texto.innerHTML=resultado;
}



