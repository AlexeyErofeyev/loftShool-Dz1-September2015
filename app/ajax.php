<?php 

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$capha = $_POST['capha'];
	$password = $_POST['password'];

	$nameProject = $_POST['nameProject'];
	$fileUpload = $_POST['fileUpload'];
	$linkProject = $_POST['linkProject'];

	$data = array();

		$data['name'] = $name;
		$data['email'] = $email; 
		$data['message'] = $message;
		$data['capha'] = $capha;
		$data['password'] = $password;
		
		$data['nameProject'] = $nameProject;
		$data['fileUpload'] = $fileUpload;
		$data['linkProject'] = $linkProject;

	header("Content-Type: application/json");
	echo json_encode($data);
	exit;

?>