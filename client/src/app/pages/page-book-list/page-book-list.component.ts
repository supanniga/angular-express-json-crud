import { Component, OnInit } from '@angular/core';
import { BookService } from './../../services/book.service';

@Component({
  selector: 'app-page-book-list',
  templateUrl: './page-book-list.component.html',
  styleUrls: ['./page-book-list.component.scss']
})
export class PageBookListComponent implements OnInit {

  bookList;

  constructor(public bookService: BookService) { }

  ngOnInit() {
    console.log('_____page-book-list_____');
    this.getBookList();
  }

  getBookList() {
    this.bookService.getBookList().subscribe((data) => {
      this.bookList = data;
      console.log(this.bookList);
    }, (error) => {
      console.log(error);
    }, () => {
      console.log('COMPLETE getBookList()');
    });
  }

  deleteBookObjById(id) {
    console.log('call deleteBookObjById(id)');
    this.bookService.deleteBookObjById(id).subscribe(data => {
      console.log(data);
      this.bookList = data;
    });
  }

}
