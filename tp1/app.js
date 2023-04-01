const express = require('express')
const app = express()
const port = 3000


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//1. Créez une route GET  `/welcome` qui affiche le message "Bienvenue sur le TP 1 du cours d'architecture logicielle".  
app.get('/welcome', (req, res) => {
    res.send('Bienvenue sur le TP 1 du cours d\'architecture logicielle')
  })
  
//2. Créez  une route GET `/secret` qui retourne un code HTTP 401 avec le message "Vous ne possédez pas les droits pour accéder à ma page secrète"
app.get('/secret', (req, res) => {
    res.status(401).send('Vous ne possédez pas les droits pour accéder à ma page secrète')
  })

// 3. Créez une route GET `/error` qui retourne une code HTTP 500 avec un json contenant une propriété message
app.get('/error', (req, res) => {
    res.status(500).json({"error" : "500"})
})

// 4. Créez une route GET `/img` qui permet de télécharger l'image de votre choix.
app.get('/img', (req, res) => {
    res.download("img.jpg")
})

// 5. Créez une route GET `/redirectMe` qui redirige l'utilisateur vers le site de l'IUT.
app.get('/redirectMe', (req, res) => {
    res.redirect('https://www.iut-littoral.fr')
})

// 6. Créez une route GET  `/users/:name` qui affiche le message "Bienvenue sur la page de" suivi de la valeur du paramètre "name".
app.get('/users/:name', (req, res) => {
    res.send('Bienvenue sur la page de '+ req.params.name)
})

// 7. Créez une route GET `/somme` qui prend deux query params 'a' et 'b'  et qui affiche le résultat de la somme entre a et b.  
// Exemple: `/somme?a=1&b=4  ` donnera 5
app.get('/somme', (req, res) => {
    res.send(req.query.a + "+" + req.query.b + "=" + (parseInt(req.query.a)+parseInt(req.query.b)))
})

app.use(function (req, res, next) {

  console.log(`[ ${new Date().toISOString()} ]: ${req.url}`)
  return next();
});