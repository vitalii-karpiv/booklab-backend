import { BookFactory, BookListFactory } from '../_mocks_/MockDataFactory';

class MockDataService {
  constructor() {
    this.bookList = BookListFactory();
  }

  generateBook = () => {
    return BookFactory();
  };

  getBooks = () => {
    return this.bookList;
  };

  getBookById(_id) {
    return this.bookList.find((book) => book._id === _id);
  }
}

export default new MockDataService();
