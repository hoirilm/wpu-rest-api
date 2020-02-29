<?php
// $mahasiswa = [
//     [
//         "nama" => "Hoiril",
//         "nrp" => "150411100042",
//         "email" => "horimo.me@gmail.com"
//     ],
//     [
//         "nama" => "Mochtar",
//         "nrp" => "150411100042",
//         "email" => "horimo.me@gmail.com"
//     ],
// ];

$dbh = new PDO('mysql:host=localhost;dbname=coba_package', 'root', '');
$db = $dbh->prepare('SELECT * FROM users');
$db->execute();

$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($mahasiswa);
echo $data;
