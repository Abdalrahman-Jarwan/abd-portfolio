import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Paper } from '../../models/paper.model';
import { AbstractComponent } from '../../models/abstract-component.base';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { PapersCategoryTypes } from '../../models/papers-category-types.enum';

@Component({
  selector: 'clp-paper-item',
  imports: [TranslatePipe],
  templateUrl: './paper-item.component.html',
  styleUrl: './paper-item.component.scss'
})
export class PaperItemComponent extends AbstractComponent {
viewReport() {
throw new Error('Method not implemented.');
}
  @Input() paper?: Paper;
  paperCategoryTypes = PapersCategoryTypes;

  constructor (public translateService: TranslateService) {
    super({
      translationPrefix: 'PAPER_ITEM'
    });
  }
}
