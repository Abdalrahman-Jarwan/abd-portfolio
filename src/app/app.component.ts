import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  TranslateService,
} from "@ngx-translate/core";
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'clp-root',
  imports: [
    RouterOutlet,
    NavComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor (public translate: TranslateService, private themeService: ThemeService, private renderer: Renderer2) {
    this.translate.addLangs(['en', 'zh']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    this.themeService.setRenderer(renderer)
    .setDefaultTheme();
  }
}
