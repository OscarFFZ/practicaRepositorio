var mi_lista = document.getElementById('mi_lista');
function agregar(){
    let texto_usuario = document.getElementById('entrada').value;
    texto_usuario=texto_usuario.toLowerCase();
    if(texto_usuario==''){
        alert('Campo vacio, digite un elemento')
    }else{
        var new_element = document.createElement('li');
        new_element.appendChild(document.createTextNode(texto_usuario));
        mi_lista.appendChild(new_element);
        limpiar();
    }
    
}

function limpiar(){
    var entrada=document.getElementById('entrada');
    entrada.value='';
    console.log(entrada.value);
}

function borrar(){
    var ultimo_elemento=mi_lista.lastChild;
    if(ultimo_elemento==null){
        alert('No hay mas elementos por eliminar');
    }else{
        mi_lista.removeChild(ultimo_elemento);
    }
}

