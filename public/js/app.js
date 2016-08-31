define(['jquery', './bookscontroller', './book'], function (_jquery, _bookscontroller, _book) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  var _bookscontroller2 = _interopRequireDefault(_bookscontroller);

  var _book2 = _interopRequireDefault(_book);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var booksController = new _bookscontroller2.default();

  (0, _jquery2.default)('#save').on('click', function () {
    var book = new _book2.default((0, _jquery2.default)('#book').val(), (0, _jquery2.default)('#author').val());
    console.log('Adding book ' + book.name + ' written by ' + book.author);
    booksController.save(book);
  });

  (0, _jquery2.default)('body').on('click', '[data-destroy]', function () {
    var book = booksController.findByName((0, _jquery2.default)(this).data('name'));
    booksController.destroy(book);
  });
});