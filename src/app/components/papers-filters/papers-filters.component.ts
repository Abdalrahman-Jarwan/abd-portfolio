import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractComponent } from '../../models/abstract-component.base';
import { TranslatePipe } from '@ngx-translate/core';
import { NgClass, NgSwitch, NgSwitchCase, NgTemplateOutlet } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { PapersService } from '../../services/paper.service';
import { Paper } from '../../models/paper.model';
import { PapersCategoryTypes } from '../../models/papers-category-types.enum';

@Component({
  selector: 'clp-paper-filters',
  imports: [TranslatePipe, NgTemplateOutlet, NgClass, NgbDropdownModule, NgSwitch, NgSwitchCase],
  templateUrl: './papers-filters.component.html',
  styleUrl: './papers-filters.component.scss'
})
export class PapersFiltersComponent extends AbstractComponent {
  @Input() papers?: Paper[];
  @Output() papersChange: EventEmitter<Paper[]> = new EventEmitter<Paper[]>();

  selectedFilter: PapersCategoryTypes | 'all' = 'all';

  categoryTypes = PapersCategoryTypes;

  constructor (private papersService: PapersService) {
    super({
      translationPrefix: 'PAPERS_FILTERS'
    });
  }

  filter (categoryType: PapersCategoryTypes | 'all') {
    this.papersService.getPapers(categoryType).subscribe(paper => {
      this.selectedFilter = categoryType;
      this.papers = paper;
      this.papersChange.emit(this.papers);
    })
  }
}
