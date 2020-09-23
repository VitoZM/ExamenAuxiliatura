<?php
    include 'connection.php';
    session_start();
    $email = $_POST['email'];
    $password = sha1($_POST['password']);
    
    $query = $db->prepare("SELECT * FROM usuarios WHERE correo='$email' AND password='$password'");
    //Ejecutamos la consulta
    if ($query->execute()) {

        $query->store_result();

        if ($query->num_rows > 0) {
            $usuario = null;
            $query->bind_result($id, $correo, $password, $nombreCompleto, $nivel);
            while ($query->fetch()) {
                $_SESSION['id'] = $id;
                $_SESSION['correo'] = $correo;
                $_SESSION['nombreCompleto'] = $nombreCompleto;
                $_SESSION['nivel'] = $nivel;
            }
            
            echo "ok";
        }
        else
            echo "no";
        
        $query->close();
    } else {
        echo "no sdf";
    }
?>