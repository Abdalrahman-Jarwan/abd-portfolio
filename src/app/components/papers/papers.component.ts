import { Component } from '@angular/core';
import { Paper } from '../../models/paper.model';
import { PapersFiltersComponent } from "../papers-filters/papers-filters.component";
import { PaperItemComponent } from "../paper-item/paper-item.component";
import { PapersService } from '../../services/paper.service';

type FilterType = "ALL" | "PAPERS" | "PROJECTS";
@Component({
  selector: 'clp-papers',
  imports: [PapersFiltersComponent, PaperItemComponent],
  templateUrl: './papers.component.html',
  styleUrl: './papers.component.scss'
})
export class PapersComponent {
  papers: Paper[] = [];
  activeFilter: FilterType = "ALL";

  constructor (public papersService: PapersService) {
  }

  ngOnInit (): void {
    this.papersService.getPapers('all').subscribe(papers => {
      this.papers = papers;
    })
  }

  setActiveFilter (activeFilter: FilterType) {
    this.activeFilter = activeFilter;
  }
}
