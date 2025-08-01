import { Component } from '@angular/core';
import { AbstractComponent } from '../../models/abstract-component.base';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'clp-about-chiawei-figure',
  imports: [TranslatePipe],
  templateUrl: './about-chiawei-figure.component.html',
  styleUrl: './about-chiawei-figure.component.scss'
})
export class AboutChiaweiFigureComponent extends AbstractComponent {

  constructor() {
    super({
      'translationPrefix': 'ABOUT.ME_FIGURE'
    });
  }

}
