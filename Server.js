var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;
// Servir les fichiers statiques de l'application Angular
app.use(express.static(path.join(__dirname, 'dist/bourse-analyser/browser')));
// Rediriger toutes les requêtes vers index.html
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/bourse-analyser/browser/index.html'));
});
app.listen(port, function () {
    console.log("Serveur d\u00E9marr\u00E9 sur http://localhost:".concat(port));
});
