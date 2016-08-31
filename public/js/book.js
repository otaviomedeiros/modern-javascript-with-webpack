define(['exports', 'jquery'], function (exports, _jquery) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _jquery2 = _interopRequireDefault(_jquery);

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

  var Book = function () {
    function Book(name, author) {
      _classCallCheck(this, Book);

      this.name = name;
      this.author = author;
    }

    _createClass(Book, [{
      key: 'render',
      value: function render() {
        console.log('rendering book ' + this.name);
        (0, _jquery2.default)('#books-table tbody').append('<tr data-name="' + this.name + '">\n                <td>' + this.name + '</td>\n                <td>' + this.author + '</td>\n                <td><button class="btn btn-danger" data-name="' + this.name + '" data-destroy="true">destroy</a></td>\n              </tr>');
      }
    }, {
      key: 'remove',
      value: function remove() {
        (0, _jquery2.default)('#books-table tbody tr[data-name=' + this.name + ']').remove();
      }
    }]);

    return Book;
  }();

  exports.default = Book;
});