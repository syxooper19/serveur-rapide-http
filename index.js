const express = require('express');

//Configuraton du serveur - utilisation d'Express pour simplifier
hostname = "localhost";
port = 8080;
app = express();


/**
 * /v1/data : permet de récupérer les données de la TIC
 */
app.get('/v1/data', (req, res) => {
    console.log(req.body);
    res.status(200).send("Hello Thierry, la requete fonctionne");
});

/**
 * /v1/init : Permet d'initialiser le smartphone avec avec la TIC
 */
app.get('/v1/init', (req, res) => {
    console.log(req.body);
    res.status(200).send("Ici il faudra initialiser le projet");
});

// Lancement du serveur
app.listen(port, hostname, function() {
    console.log("Le serveur fonctionne sur http://" + hostname + ":" + port)
});