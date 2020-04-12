import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageBookListComponent } from './pages/page-book-list/page-book-list.component';
import { PageBookAddComponent } from './pages/page-book-add/page-book-add.component';
import { PageBookEditComponent } from './pages/page-book-edit/page-book-edit.component';
import { PageBookViewComponent } from './pages/page-book-view/page-book-view.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  { path: 'list', component: PageBookListComponent },
  { path: 'add', component: PageBookAddComponent },
  { path: 'edit/:id', component: PageBookEditComponent },
  { path: 'view/:id', component: PageBookViewComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
