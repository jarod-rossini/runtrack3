<?php
    if(isset($_SESSION['connected'])){
		header('location:index.php');
	}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <title>Connexion</title>
</head>
    <body>
        <form id="connexion" action="connexion.php" method="post">
            <h2>Connexion</h2>
            <input type="email" name="email" id="email" placeholder="E-mail"/>
            <input type="password" name="password" id="password" placeholder="Mot de passe"/>
            <input type="submit" name="submit" value="Connexion"/>
        </form>
		<div id="resultat"></div>
        <p>Pas encore inscrit ? <a href="inscription.php">Cliquez-ici</a></p>
        <a href="index.php">-- Accueil --</a>
		
		<script type="text/javascript" src="script.js"></script>
		<script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
    </body>
</html>

<style>
    form{padding: 3% 0; display: flex; width: 100%; height: 100%; justify-content: center; align-items: center; background-color: gray; flex-direction: column;}
    body{display: flex; align-items: center; flex-direction: column; text-align: center; background-color: cadetblue;}
    a{text-decoration: none;}
	#resultat{display: flex; justify-content: center; align-items: center; width: 200px; height: 100px; background-color: white; color: black;}
</style>