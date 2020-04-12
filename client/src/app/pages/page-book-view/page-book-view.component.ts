import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-book-view',
  templateUrl: './page-book-view.component.html',
  styleUrls: ['./page-book-view.component.scss']
})
export class PageBookViewComponent implements OnInit {

  bookObjById;
  bookForm: FormGroup;

  constructor(
    public activatedRoute: ActivatedRoute,
    public bookService: BookService,
    public location: Location) { }

  async ngOnInit() {
    console.log('_____page-book-view_____');
    this.getBookObjById();
  }

  getBookObjById() {
    this.activatedRoute.params.subscribe(params => {
      // console.log(params);
      this.bookService.getBookObjById(params.id).subscribe((data) => {
        this.bookObjById = data;
        this.createForm(this.bookObjById);
      });
    });
  }

  createForm(bookObjById) {
    this.bookForm = new FormGroup({
      id: new FormControl(bookObjById.id),
      name: new FormControl(bookObjById.name),
      price: new FormControl(bookObjById.price)
    });
  }

  back() {
    this.location.back();
  }

}
