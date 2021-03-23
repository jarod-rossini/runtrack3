<?php 
	session_start(); 

	if(isset($_SESSION['connected'])){
		header('location:index.php');
	}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
</head>
    <body>
        <form id="inscription" method="post">
            <h2>Inscription</h2>
            <input required type="text" name="surname" id="surname" placeholder="Nom"/>
            <input required type="text" name="name" id="name" placeholder="Prénom"/>
            <input required type="email" name="email" id="email" placeholder="E-mail"/>
            <input required type="password" name="password" id="password" placeholder="Mot de passe"/>
            <input required type="password" name="password_conf" id="password_conf" placeholder="Confirmer mot de passe"/>
            <input type="submit" name="submit" value="Inscription"/>
        </form>
        <p>Vous possédez un compte ? <a href="connexion.php">Cliquez-ici</a></p>
        <a href="index.php">-- Accueil-- </a>
    </body>
</html>

<style>
    form{padding: 3% 0; display: flex; width: 100%; height: 100%; justify-content: center; align-items: center; background-color: gray; flex-direction: column;}
    body{text-align: center; background-color: cadetblue;}
    a{text-decoration: none;}
</style>

<?php
    $pdo = new PDO('mysql:host=localhost;dbname=utilisateurs', 'root', '');

    if(isset($_POST['submit'])){
        if(!empty($_POST['surname']) && !empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['password']) && !empty($_POST['password_conf'])){
            $nom = $_POST['surname'];
            $prenom = $_POST['name'];
            $email = $_POST['email'];
            $password = $_POST['password'];

            $query = $pdo->query('SELECT COUNT(*) FROM utilisateurs WHERE email = "'.$email.'"');
            $result = $query->fetchColumn();
            
            if($result == 0){
                $signup = $pdo->prepare('INSERT INTO utilisateurs(nom, prenom, email, password) VALUES("'.$nom.'", "'.$prenom.'", "'.$email.'", "'.$password.'")');
                $signup->execute();

                $_SESSION['surname'] = $nom;
                $_SESSION['name'] = $prenom;
                $_SESSION['email'] = $email;
                $_SESSION['connected'] = true;

                header('location:index.php');
            }
            else{
                header('refresh:0');
            }
        }
    }
?>