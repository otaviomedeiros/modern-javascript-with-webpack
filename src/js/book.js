import $ from 'jquery';

export default class Book {

  constructor(name, author){
    this.name = name;
    this.author = author;
  }

  render(){
    console.log(`rendering book ${this.name}`);
    $('#books-table tbody')
      .append(`<tr data-name="${this.name}">
                <td>${this.name}</td>
                <td>${this.author}</td>
                <td><button class="btn btn-danger" data-name="${this.name}" data-destroy="true">destroy</a></td>
              </tr>`);
  }

  remove(){
    $(`#books-table tbody tr[data-name=${this.name}]`).remove();
  }
}
