import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_KEY } from 'key/api.key';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  headers: HttpHeaders;
  constructor(private httpClient: HttpClient) {}

  public getNews() {
    return this.httpClient.get(
      `https://quotes15.p.rapidapi.com/quotes/random/`,
      {
        headers: {
          'x-rapidapi-host': 'quotes15.p.rapidapi.com',
          'x-rapidapi-key': API_KEY,
        },
      }
    );
  }
}
