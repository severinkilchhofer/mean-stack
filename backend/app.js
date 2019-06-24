const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post was successful!'
  });
});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    { id: 'adjklsajdksa',
      title: 'First Hi',
      content: 'Das ist eine Beschreibung.'},
    { id: 'aa2dnsjnf',
      title: 'Second Post',
      content: 'Das ist eine Beschreibung.'}
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;
