import express from 'express';
import { BookListFactory } from './_mocks_/BookFactory';

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Booklab backend');
});

app.get('/books', (req, res) => {
  res.status(200).json(BookListFactory());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
