const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
var cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*app.get('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  console.log("Done!");
  next();
});*/

/*app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
   next();
});*/

app.use(cors());

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});