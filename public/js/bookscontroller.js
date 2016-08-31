define(['exports', 'lodash'], function (exports, _lodash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _lodash2 = _interopRequireDefault(_lodash);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var BooksController = function () {
    function BooksController() {
      _classCallCheck(this, BooksController);

      this.books = [];
    }

    _createClass(BooksController, [{
      key: 'save',
      value: function save(book) {
        this.books.push(book);
        book.render();
      }
    }, {
      key: 'findByName',
      value: function findByName(name) {
        return this.books.find(function (book) {
          return book.name === name;
        });
      }
    }, {
      key: 'destroy',
      value: function destroy(book) {
        _lodash2.default.remove(this.books, function (b) {
          return b === book;
        });
        book.remove();
      }
    }]);

    return BooksController;
  }();

  exports.default = BooksController;
});