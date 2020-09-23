<?php
    include 'connection.php';
    $id = $_POST['id'];
    $nivel = $_POST['nivel'];
    
    $query = $db->prepare("UPDATE usuarios SET nivel=$nivel WHERE id=$id");
    //Ejecutamos la consulta
    if ($query->execute()) {
        echo "ok";
    }
?>