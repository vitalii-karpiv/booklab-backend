import express from 'express';
import MockDataService from './services/MockDataService';

const app = express();
const port = 4000;

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
