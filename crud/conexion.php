﻿<?php
	
	
	$mysqli=new mysqli("127.0.0.1","sistema","sistema","sistema"); //servidor, usuario de base de datos, contraseña del usuario, nombre de base de datos
	
	if(mysqli_connect_errno()){
		echo 'Conexion Fallida : ', mysqli_connect_error();
		exit();
	}
?>
