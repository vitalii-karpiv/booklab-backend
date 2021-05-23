import bodyParser from 'body-parser';
import express from 'express';
import MockDataService from './services/MockDataService';

const app = express();
const port = 4000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Method', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization');
  next();
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Booklab backend');
});

app.get('/books', (req, res) => {
  res.status(200).json(MockDataService.getBooks());
});

app.get('/books/:id', (req, res) => {
  const { id } = req.params;
  console.log(id, MockDataService.getBookById(id));
  res.status(200).json(MockDataService.getBookById(id));
});

app.post('/book-details/:id', (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  MockDataService.addReview(id);
  res.json({ msg: 'OK' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
