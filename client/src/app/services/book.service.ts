import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public url = 'http://localhost:3000/api';

  httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type': 'application/json',
      // 'X-Requested-With': 'XMLHttpRequest',
      // Accept: '/*/',
      // observe: 'response',
      // responseType: 'json',
      // 'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  createBookObj(body): Observable<any> {
    return this.http.post(this.url + '/book', body);
  }

  getBookList(): Observable<any> {
    return this.http.get(this.url + '/books', this.httpOptions);
  }

  getBookObjById(id): Observable<any> {
    return this.http.get(this.url + '/book/' + id);
  }

  updateBookObjById(id, body): Observable<any> {
    return this.http.post(this.url + '/book/' + id, body);
  }

  deleteBookObjById(id): Observable<any> {
    return this.http.delete(this.url + '/book/' + id);
  }

}
