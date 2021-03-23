<!DOCTYPE html>
<html lang="fr">
    <body>
        <div id="rangees"></div>
        <div id="melangees"></div>

        <style>
            #melangees{width: 1000px; height: 350px;}
            #rangees{width: 1000px; height: 350px;}
            #button{position: absolute; top: 50%; right: 20%;}
            #button2{position: absolute; top: 50%; right: 10%;}
        </style>
        <button onclick="mix()" id="button">Mélanger</button>
        <button onclick="base()" id="button2">Ordonner</button>
        <script type="text/javascript" src="script.js"></script>
        <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
    </body>
</html>