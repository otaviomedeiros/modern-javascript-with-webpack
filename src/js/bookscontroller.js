import _ from 'lodash';

export default class BooksController {

  constructor(){
    this.books = [];
  }

  save(book){
    this.books.push(book);
    book.render();
  }

  findByName(name){
    return this.books.find(book => book.name === name);
  }

  destroy(book){
    _.remove(this.books, b => b === book);
    book.remove();
  }

}
