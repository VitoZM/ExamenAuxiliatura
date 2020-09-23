<table class='table'>
    <thead>
        <tr>
            <th scope='col'>Correo</th>
            <th scope='col'>Nombre Completo</th>
            <th scope='col'>Nivel</th>
            <?php
                include 'connection.php';
                session_start();
                $nivelUsuario = $_SESSION['nivel'];
                if($nivelUsuario == 0)
                    echo "<th scope='col'>Operación</th>";
            ?>
        </tr>
    </thead>
<tbody>
<?php
    if(isset($_SESSION['usuario'])){
        $usuario = $_SESSION['usuario'];
        $query = $db->prepare("SELECT id,correo,nombrecompleto,nivel FROM usuarios");
        if ($query->execute()) {

            $query->store_result();
    
            if ($query->num_rows > 0) {
                $query->bind_result($id,$correo, $nombreCompleto, $nivel);
                while ($query->fetch()) {
                    echo "<tr>
                            <th scope='row'>$correo</th>
                            <td>$nombreCompleto</td>
                            <td>$nivel</td>";
                    
                    
                    if($nivelUsuario == 0){
                        if($nivel == 1)
                            echo "<td><button class='btn btn-danger' onclick='cambiarNivel($id,0);'>Cambiar a Administrador</button></td>";
                        else
                            echo "<td><button class='btn btn-success' onclick='cambiarNivel($id,1);'>Cambiar a Usuario</button></td>";
                    }

                    echo    "</tr>";
                }
            }
            
            $query->close();
        }
        
    }
?>
</tbody></table>
