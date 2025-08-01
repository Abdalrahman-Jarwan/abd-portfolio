import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor (@Inject(DOCUMENT) private document: Document, @Optional() private renderer: Renderer2) { }

  setRenderer (renderer: Renderer2) {
    this.renderer = renderer;
    return this;
  }

  setDefaultTheme () {
    const theme = this.currentMode || this.defaultBrowserMode;
    this.setTheme(theme);
  }

  setTheme (theme: 'darkmode' | 'lightmode' = 'lightmode') {
    this.renderer.setAttribute(this.document.body, 'class', theme);
  }

  get currentMode () {
    return this.document.body.classList.contains('darkmode') ? 'darkmode' : 'lightmode';
  }

  get defaultBrowserMode () {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'darkmode' : 'lightmode';
  }
}
