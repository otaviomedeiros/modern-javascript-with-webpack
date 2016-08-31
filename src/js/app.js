import $ from 'jquery';
import BooksController from './bookscontroller';
import Book from './book';

let booksController = new BooksController();

$('#save').on('click', () => {
  let book = new Book($('#book').val(), $('#author').val());
  console.log(`Adding book ${book.name} written by ${book.author}`);
  booksController.save(book);
});

$('body').on('click', '[data-destroy]', function() {
  const book = booksController.findByName($(this).data('name'));
  booksController.destroy(book);
});
