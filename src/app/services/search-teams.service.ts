// search-team.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Import Observable

@Injectable({
  providedIn: 'root'
})
export class SearchTeamService {
  constructor(private http: HttpClient) {}

  getTeams(): Observable<any> {
    const url = 'https://transfermarket.p.rapidapi.com/clubs/list-by-competition?id=ES1&domain=es';
    // Set headers as needed
    const headers = {
      'X-RapidAPI-Key': '071ccc8eacmshc7b84237b63a76bp1c456fjsned4ee880d56c',
      'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com'
    };

    return this.http.get(url, { headers });
  }
}
