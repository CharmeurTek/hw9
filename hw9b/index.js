const express = require('express');
const multer = require("multer");
const app = express()
const port = 3000
const upload = multer();
app.use(express.json());
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
})

//ex1
app.get('/ex1', (req, res) => {
  res.sendFile(`${__dirname}/views/ex1.html`);
})

app.post("/ex1/post", upload.array(), (req, res) => {
  const name = req.body.name;
  const mail = req.body.mail;
  res.send(`${name}, Thank you for your order. We will keep you posted on delivery status at ${mail}`);
});

//ex2
app.get('/ex2', (req, res) => {
  res.sendFile(`${__dirname}/views/ex2.html`);
})

app.post("/api/countries", upload.array(), (req, res) => {;
  const name = req.body.name;
  const countries = req.body.countries;
  res.send(`Your name is ${name} and you visited ${countries.length} countries. Keep Traveling !`);
});

//ex3
const articles = [];

app.get('/ex3', (req, res) => {
  res.sendFile(`${__dirname}/views/ex3.html`);
})

app.post("/articles", upload.array(), (req, res) => {;
  var id = articles.length + 1;
  articles.push({
    id: id,
    title: req.body.title,
    content: req.body.content
  })

  res.send(`New article added succesfully with Title "${req.body.title}" and ID ${id}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})