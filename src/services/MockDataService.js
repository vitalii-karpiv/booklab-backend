import { BookFactory, BookListFactory, ReviewFactory } from '../_mocks_/MockDataFactory';

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

  addReview(_id) {
    const book = this.bookList.find((b) => b._id === _id);
    console.log(book.review);
    book.review.unshift(ReviewFactory());
  }
}

export default new MockDataService();
