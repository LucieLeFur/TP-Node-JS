const express = require('express')
const { connectTodB } = require('./services/db/connection');
const path = require ('path');

const app = express()
const port = 3000

app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, "public")));
app.set('views', path.join(__dirname, './views') );
app.set('view engine', 'pug')

const routes = require('./routes');
app.use("/", routes);

// then -> ensuite
connectTodB().then(() => {
  app.listen(port, () => {
      console.log("Example app listening at http://localhost:${port}")
  })
})


