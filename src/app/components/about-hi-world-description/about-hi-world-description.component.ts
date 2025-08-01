import { Component } from '@angular/core';
import { AbstractComponent } from '../../models/abstract-component.base';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'clp-about-hi-world-description',
  imports: [TranslatePipe],
  templateUrl: './about-hi-world-description.component.html',
  styleUrl: './about-hi-world-description.component.scss'
})
export class AboutHiWorldDescriptionComponent extends AbstractComponent {

  constructor() {
    super({
      translationPrefix: 'ABOUT.INTRODUCTION'
    });
  }

}
