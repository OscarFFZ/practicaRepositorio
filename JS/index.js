var mi_lista = document.getElementById('mi_lista');

function agregar(){
    let texto_usuario = document.getElementById('entrada').value;
    var new_element = document.createElement('li');
    new_element.appendChild(document.createTextNode(texto_usuario));
    mi_lista.appendChild(new_element);
    limpiar();
}

function limpiar(){
    var entrada=document.getElementById('entrada');
    entrada.value='';
    console.log(entrada.value);
}