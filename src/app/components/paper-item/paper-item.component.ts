import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Paper } from '../../models/paper.model';
import { AbstractComponent } from '../../models/abstract-component.base';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { PapersCategoryTypes } from '../../models/papers-category-types.enum';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfModalComponent } from "../pdf-modal/pdf-modal.component";

@Component({
  selector: 'clp-paper-item',
  imports: [TranslatePipe, PdfViewerModule, PdfModalComponent],
  templateUrl: './paper-item.component.html',
  styleUrl: './paper-item.component.scss'
})
export class PaperItemComponent extends AbstractComponent {
  @Input() paper?: Paper;

  showModal: boolean = false;
  paperCategoryTypes = PapersCategoryTypes;

  constructor (public translateService: TranslateService) {
    super({
      translationPrefix: 'PAPER_ITEM'
    });
  }

  viewReport () {
    this.showModal = !this.showModal;
  }
}
