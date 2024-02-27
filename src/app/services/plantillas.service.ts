import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlantillasService {
  private url = 'https://transfermarket.p.rapidapi.com/clubs/get-squad';

  constructor(private http: HttpClient) {}

  getTeam(id: number): Observable<any> {
    const options = {
      headers: {
        'X-RapidAPI-Key': '071ccc8eacmshc7b84237b63a76bp1c456fjsned4ee880d56c',
        'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com'
      },
      params: {
        id: id.toString(),
        saison_id: '2024',
        domain: 'de',
      },
    };

    return this.http.get(this.url, options);
  }
}
