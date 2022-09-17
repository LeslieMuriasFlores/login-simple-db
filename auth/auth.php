<?php
require('../conexion/conexion.php');
$resultado =0;
$user = isset($_REQUEST['nombre']) ? $_REQUEST['nombre'] : '';
$pass = isset($_REQUEST['password']) ? $_REQUEST['password'] : '';

if(!empty($user) && !empty($pass)){
    $sSql="SELECT pass FROM users WHERE usr='".$user."' ";
    $result = $conn->prepare($sSql);
    $result->execute();
}

if(!empty($result)){
	$bExiste=0;
	while($aRow = $result->fetch(PDO::FETCH_ASSOC)){
		if(password_verify($pass,$aRow['pass'])){
			$bExiste=1;
		}
	}
}

if($bExiste==1){
	$resultado=1;
}else{
	$resultado=0;
}

echo $resultado;

?>