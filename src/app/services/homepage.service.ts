import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Homepage } from '../models/homepage.model';
@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  private url: string = 'data/homepage.json'

  constructor (private httpClient: HttpClient) { }

  getHomepage = () => {
    return this.httpClient.get<Homepage>(this.url);
  }
}
