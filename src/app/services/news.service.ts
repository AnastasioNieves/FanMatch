// news.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private url = 'https://transfermarket.p.rapidapi.com/news/list-latest?domain=es';

  httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': '071ccc8eacmshc7b84237b63a76bp1c456fjsned4ee880d56c',
      'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com'
    })
  };

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get(this.url, this.httpOptions);
  }
}
