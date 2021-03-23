<?php 
	$success = 0;
	$msg = "Erreur (connexion.php)";

    $pdo = new PDO('mysql:host=localhost;dbname=utilisateurs', 'root', '');

	if(!empty($_POST['email']) && !empty($_POST['password'])){
		$email = htmlspecialchars(strip_tags($_POST['email']));
		$password = htmlspecialchars(strip_tags($_POST['password']));

		$query = $pdo->query('SELECT COUNT(*) FROM utilisateurs WHERE email = "'.$email.'" AND password = "'.$password.'"');
		$result = $query->fetchColumn();
		
		if($result == 1){
			session_start();

			$query2 = $pdo->query('SELECT * FROM utilisateurs WHERE email = "'.$email.'" AND password = "'.$password.'"');
			$data = $query2->fetch(PDO::FETCH_ASSOC);

			$_SESSION['surname'] = $data['nom'];
			$_SESSION['name'] = $data['prenom'];
			$_SESSION['email'] = $email;
			$_SESSION['connected'] = true;

			header('location:index.php');
		}
		else{
			$msg = "Email ou mot de passe incorrect";
		}
	}

	$res = ['success' => $success, 'msg' => $msg];
	echo json_encode($res);
