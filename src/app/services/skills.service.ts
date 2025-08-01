import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private url: string = 'data/about-skills.json'

  constructor(private httpClient: HttpClient) { }

  getSkillsList = () => this.httpClient.get<Skill[]>(this.url);

}
