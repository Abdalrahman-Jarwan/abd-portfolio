import { Injectable, SecurityContext } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { Dictionary } from '../models/dictionary.type';
import { PapersCategoryTypes } from '../models/papers-category-types.enum';
import { Paper } from '../models/paper.model';

@Injectable({
    providedIn: 'root'
})
export class PapersService {
    private url: string = 'data/papers.json'

    constructor (private httpClient: HttpClient, private _sanitizer: DomSanitizer) { }

    getPaperById = (id: number) => this.getPapers('all')
        .pipe(map(data => {
            return data.find(paper => paper.id === id)
        }));

    getPapers = (categoryType: PapersCategoryTypes | 'all') => {
        return this.httpClient.get<Paper[]>(this.url).pipe(
            map((data: Paper[]) => data.map(papers => ({
                ...papers,
                longDescription: this.sanitizeLanguageDictionary(papers.title),
                shortDescription: this.sanitizeLanguageDictionary(papers.description),
            }))),
            map(data => data.reverse()),
            map(data => {
                return categoryType === 'all' ? data : data.filter(papers => papers.papersCategoryTypes === (categoryType as unknown as PapersCategoryTypes));
            }))
    }

    private sanitizeLanguageDictionary (dict: Dictionary<string>): Dictionary<string> {
        const sanitizedDictionary: Dictionary<string> = {};
        for (const key in dict) {
            sanitizedDictionary[key] = this._sanitizer.sanitize(SecurityContext.HTML, dict[key])!;
        }
        return sanitizedDictionary;
    }
}

