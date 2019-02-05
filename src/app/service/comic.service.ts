import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ComicInterface, GeneroInterface } from '../interface/Interface';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ComicService {

  private _comicGet;
  private _comicGetPage;

  constructor(
    private _http: HttpClient) {
  }

  getComic(id: number): Observable<ComicInterface[]> {
    this._comicGet = 'http://localhost:8081/json?ob=comic&op=get&id=' + id;
    return this._http.get<ComicInterface[]>(this._comicGet).pipe(
      catchError(this.errorHandler));
  }

  getComicPage(): Observable<ComicInterface[]> {
    this._comicGetPage = 'http://localhost:8081/json?ob=comic&op=getpage&rpp=10&page=1'
    return this._http.get<ComicInterface[]>(this._comicGetPage);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error!");
  }




}
