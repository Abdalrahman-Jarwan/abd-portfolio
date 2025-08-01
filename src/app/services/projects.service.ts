import { Injectable, SecurityContext } from '@angular/core';
import { Project } from '../models/project.model';
import { CategoryTypes } from '../models/category-types.enum';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { Dictionary } from '../models/dictionary.type';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private url: string = 'data/projects.json'

  constructor (private httpClient: HttpClient, private _sanitizer: DomSanitizer) { }

  getProjectById = (id: number) => this.getProjects('all')
    .pipe(map(data => {
      return data.find(project => project.id === id)
    }));

  getProjects = (categoryType: CategoryTypes | 'all') => {
    return this.httpClient.get<Project[]>(this.url).pipe(
      map((data: Project[]) => data.map(project => ({
        ...project,
        longDescription: this.sanitizeLanguageDictionary(project.longDescription),
        shortDescription: this.sanitizeLanguageDictionary(project.shortDescription),
        processDescription: this.sanitizeLanguageDictionary(project.processDescription),
      }))),
      map(data => data.map(project => ({ ...project, mainMediaType: this.getMainMediaType(project) }))),
      map(data => data.reverse()),
      map(data => {
        return categoryType === 'all' ? data : data.filter(project => project.categoryType === (categoryType as unknown as CategoryTypes));
      }))
  }

  private getMainMediaType (project: Project): any {
    let mainMediaType: 'youtube' | 'instagram' | 'image' = "image";
    if (project.mainMedia.includes('youtube')) {
      mainMediaType = 'youtube';
    } else if (project.mainMedia.includes('instagram')) {
      mainMediaType = 'instagram';
    }

    return mainMediaType;
  }

  private sanitizeLanguageDictionary (dict: Dictionary<string>): Dictionary<string> {
    const sanitizedDictionary: Dictionary<string> = {};
    for (const key in dict) {
      sanitizedDictionary[key] = this._sanitizer.sanitize(SecurityContext.HTML, dict[key])!;
    }
    return sanitizedDictionary;
  }
}

