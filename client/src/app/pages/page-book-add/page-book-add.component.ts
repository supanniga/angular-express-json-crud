import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { BookService } from './../../services/book.service';

@Component({
  selector: 'app-page-book-add',
  templateUrl: './page-book-add.component.html',
  styleUrls: ['./page-book-add.component.scss']
})
export class PageBookAddComponent implements OnInit {

  bookForm: FormGroup;

  constructor(
    public bookService: BookService,
    public location: Location
    ) { }

  ngOnInit() {
    console.log('_____page-book-add_____');
    this.createForm();
  }

  createForm() {
    this.bookForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl()
    });
  }


  onSubmit() {
    console.log(this.bookForm.value);
    this.bookService.createBookObj(this.bookForm.value).subscribe(data => {
      console.log(data);
      this.location.back();
    });
  }

  back() {
    this.location.back();
  }

}
