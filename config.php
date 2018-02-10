<?php 
$db_host = '127.0.0.1';
$db_name = 'jude-bootcamp';
$db_charset = 'utf8mb4';
$db_user = 'admin_jude';
$db_pass = 'Default123';

$db = new PDO('mysql:host=' . $db_host . ';port=3307;dbname=' . $db_name . ';charset=' . $db_charset . '', 'root', '');
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

?>