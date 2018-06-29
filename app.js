const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express(); // Execute an instance of express
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'My Library',
    list: ['a','b']
  });
});

app.listen(port, () => {
  debug(`listening at ${chalk.green(port)}`);
});
