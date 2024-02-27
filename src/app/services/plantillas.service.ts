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
        'X-RapidAPI-Key': 'df79653e95mshad1c2a3a2017c31p15a4d2jsne26936cf48b4',
        'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com',
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
