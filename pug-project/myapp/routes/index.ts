
const express = require('express');
const dotenv = require('dotenv');
var router = express.Router();

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

router.get('/about', (req, res) => {
  res.render('about', {title: "About Page"});
});

router.get('/contact', (req, res) => {
  res.render('contact', {title: "Contact Page"});
});

router.get('/news', (req, res) => {
  res.render('news', {title: "News Page"});
});

router.post('/webhook', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});



module.exports = router;

console.log("Hello World");