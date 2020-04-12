import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-book-edit',
  templateUrl: './page-book-edit.component.html',
  styleUrls: ['./page-book-edit.component.scss']
})
export class PageBookEditComponent implements OnInit {

  bookObjById;
  bookForm: FormGroup;

  constructor(
    public activatedRoute: ActivatedRoute,
    public bookService: BookService,
    public router: Router,
    public location: Location
  ) { }

  ngOnInit() {
    console.log('_____page-book-edit_____');
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


  onSubmit() {
    console.log(this.bookForm.value);
    this.bookService.updateBookObjById(this.bookForm.value.id, this.bookForm.value).subscribe(data => {
      console.log(data);
      this.location.back();
    });
  }

  back() {
    this.location.back();
  }

}
