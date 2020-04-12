import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageBookAddComponent } from './pages/page-book-add/page-book-add.component';
import { PageBookListComponent } from './pages/page-book-list/page-book-list.component';
import { PageBookEditComponent } from './pages/page-book-edit/page-book-edit.component';
import { PageBookViewComponent } from './pages/page-book-view/page-book-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PageBookAddComponent,
    PageBookListComponent,
    PageBookEditComponent,
    PageBookViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
