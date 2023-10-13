var mi_lista = document.getElementById('mi_lista'); //obtenemos el elemento de ul(mi_lista)

function agregar(){
    
    let texto_usuario = document.getElementById('entrada').value; //obtenemos el valor ingresado por el usuario(entrada) y asigna a texto_usuario 
    texto_usuario=texto_usuario.toLowerCase(); //Toma las letras en mayuscula y las pasa a minusculas
    
    if(texto_usuario==''){  //revisa que el usuario halla digitado un elemento, en caso de no haberlo hecho manda una alerta

        alert('Campo vacio, digite un elemento') 

    }else{

        var new_element = document.createElement('li'); //crea una variable donde crea nuestro elemento para la lista
        new_element.appendChild(document.createTextNode(texto_usuario)); //Le agrega el texto de entrada a new_element
        mi_lista.appendChild(new_element); //agrega new_element como hijo de mi_lista
        limpiar(); //cuando oprimen agregar() limpia el input

    }
    
}

function limpiar(){

    var entrada=document.getElementById('entrada'); //se obtiene el elemento de entrada en el input
    entrada.value='';   //deja el input vacio

}

function borrar(){
    
    var ultimo_elemento=mi_lista.lastChild; //obtiene el ultimo hijo de mi_lista
    
    if(ultimo_elemento==null){ //Si no tiene ultimo hijo manda una alerta

        alert('No hay mas elementos por eliminar');

    }else{

        mi_lista.removeChild(ultimo_elemento); //Cuando obtiene el ultimo hijo lo elimina

    }
}

