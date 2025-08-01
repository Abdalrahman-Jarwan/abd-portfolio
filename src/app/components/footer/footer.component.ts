import { Component } from '@angular/core';
import { AbstractComponent } from '../../models/abstract-component.base';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'clp-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent extends AbstractComponent {

  constructor () {
    super({
      translationPrefix: 'FOOTER'
    });
  }

  toLink (url: string) {
    window.open(url, "_blank");
  }
}
