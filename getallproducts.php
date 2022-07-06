<?php

include_once("database.php");

$sql = "SELECT id, name, price, department, create_at, update_at FROM products ORDER BY name;";

$array = array();

$query = mysqli_query($con, $sql);

$nrRegistros = mysqli_num_rows($query);

if($nrRegistros > 0){
    while($row = $query->fetch_assoc()){
        array_push($array, array('id' => $row['id'], 'name' => $row['name'], 'price' => $row['price'], 
        'department' => $row['department'], 'update_at' => $row['update_at'], 'create_at' => $row['create_at']));
    }
}

echo json_encode($array);
?>