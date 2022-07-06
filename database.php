<?php
date_default_timezone_set('America/Sao_Paulo');

// database configuration for LOCALHOST
$dbServer = 'localhost'; //Define database server host
$dbUsername = 'root'; //Define database username
$dbPassword = 'root'; //Define database password
$dbName = 'products'; //Define database name

//connect databse
$con = mysqli_connect($dbServer,$dbUsername,$dbPassword,$dbName);
if(mysqli_connect_errno())
{
  die("Failed to connect with MySQL: ".mysqli_connect_error());
}

$con->set_charset("utf8");