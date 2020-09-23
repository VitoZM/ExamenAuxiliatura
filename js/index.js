var juega = "X"
var cont = 0;

function cargar(pagina){
    switch(pagina){
        case "index.html":
            document.getElementById('contenido').innerHTML = '<h1 class="text-center">Examen Final</h1>';
        return;
        case "tresenraya.html":
            juega = "X";
            cont = 0;
            $('#resultado').html('<p class="m-auto">JUEGA X</p>')
        break;
    }

    var ajax = new XMLHttpRequest();
    ajax.open("get",pagina,true);
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4)
            document.getElementById('contenido').innerHTML = ajax.responseText;
    }
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    ajax.send();
    
}

function jugar(posicion){
    cont++;
    posicion = posicion.split("-");
    var pos0 = posicion[0];
    var pos1 = posicion[1];
    $('#btn'+pos0+"-"+pos1).html(juega);
    $('#btn'+pos0+"-"+pos1).removeAttr("onclick");
    if(juega == "X")
        juega = "O";
    else
        juega = "X";
    if(cont!=9){
        $('#mensaje').html('<p class="m-auto">JUEGA ' + juega +'</p>')
        $('#resultado').html('<p class="m-auto">JUEGA ' + juega +'</p>')
    }
    else{
        $('#mensaje').html('<p class="m-auto">JUEGO FINALIZADO</p>')
        $('#resultado').html('<p class="m-auto">JUEGO FINALIZADO</p>')
    }
    
}

function autenticar(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var parametros = "email="+encodeURI(email)+"&password="+encodeURI(password);
    var ajax = new XMLHttpRequest();
    ajax.open("post","php/autenticar.php",true);
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4)
            if(ajax.responseText == "ok")
                document.getElementById('resultado').innerHTML = '<p class="m-auto">USUARIO AUTENTICADO EXITOSAMENTE</p>';
            else
                document.getElementById('resultado').innerHTML = '<p class="m-auto">ERROR DE AUTENTICACIÓN</p>';
    }
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    ajax.send(parametros);
}

function cambiarNivel(id,nivel){
    var parametros = "id="+encodeURI(id)+"&nivel="+encodeURI(nivel);
    var ajax = new XMLHttpRequest();
    ajax.open("post","php/cambiarNivel.php",true);
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4)
            if(ajax.responseText == "ok")
                document.getElementById('resultado').innerHTML = '<p class="m-auto">NIVEL CAMBIADO EXITOSAMENTE</p>';
    }
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    ajax.send(parametros);
}