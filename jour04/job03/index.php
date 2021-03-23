<!DOCTYPE html>
<html lang="fr">
<head>
    <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
</head>
    <body>
        <form method="get">
            <label for="id">Id</label>
                <input type="text" id="id" name="id"/>
            <label for="name">Nom</label>
                <input type="text" id="name" name="name"/>
            <label for="type">Type</label>
                <select id="type" name="type">
                    <option value="">--Choix--</option>
                    <option value="Grass">Plante</option>
                    <option value="Poison">Poison</option>
                    <option value="Fire">Feu</option>
                    <option value="Flying">Vol</option>
                    <option value="Water">Eau</option>
                    <option value="Bug">Insecte</option>
                    <option value="Normal">Normal</option>
                    <option value="Electric">Electrique</option>
                    <option value="Ground">Sol</option>
                    <option value="Fairy">Fée</option>
                    <option value="Fighting">Combat</option>
                    <option value="Psychic">Psy</option>
                    <option value="Rock">Roche</option>
                </select>
            <input type="button" id="filter" name="filter" value="filtrer"/>
        </form>

        <style>
            form{height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;}
        </style>
        
        <script type="text/javascript" src="script.js"></script>
    </body>
</html>

<?php

?>