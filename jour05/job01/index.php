<?php session_start(); ?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
</head>
    <body>
        <?php 
        if(isset($_SESSION['connected'])){
            echo '<p id="hello">Bonjour '.$_SESSION['name'].'</p>';
            echo '<form method="post"><input type="submit" name="disconnect" value="Déconnexion"/></form>';
        }
        else{
            echo '<a href="connexion.view.php">Se connecter</a>
            <a href="inscription.php">S\'inscrire</a>';
        }
        ?>

        <script type="text/javascript" src="script.js"></script>
    </body>
</html>

<style>
    body{height : 95vh; display: flex; flex-direction: column; justify-content: center; align-items: center;}
</style>

<?php
    if(isset($_POST['disconnect'])){
        session_destroy();
        header('refresh:0');
    }
?>