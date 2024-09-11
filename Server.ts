import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port =  3000;

// Servir les fichiers statiques de l'application Angular
app.use(express.static(path.join(__dirname, 'dist/bourse-analyser/browser')));

// Rediriger toutes les requêtes vers index.html
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'dist/bourse-analyser/browser/index.html'));
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});