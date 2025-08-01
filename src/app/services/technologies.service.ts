import { Injectable } from '@angular/core';
import { Technology } from '../models/technology.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  private url: string = 'data/about-technologies.json'

  constructor(private httpClient: HttpClient) { }

  getSkillsList = () => this.httpClient.get<Technology[]>(this.url);

}
