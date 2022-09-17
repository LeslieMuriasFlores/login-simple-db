<?php
$auth=0;
$user = isset($_REQUEST['nombre']) ? $_REQUEST['nombre'] : '';
$pass = isset($_REQUEST['password']) ? $_REQUEST['password'] : '';
//hacer llamado a la api login
$arrayP=[
    "email" => $user,
    "password"=> $pass
];

$data = http_build_query($arrayP);

$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://reqres.in/api/login',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>$data, 
));

$response = curl_exec($curl);
curl_close($curl);
$detalle = json_decode($response,true);
print_r($detalle) ;

if (!array_key_exists("error",$detalle))
{
    $_SESSION['usr_email']= $user;
    $auth=1;
}

echo $auth;



?>




