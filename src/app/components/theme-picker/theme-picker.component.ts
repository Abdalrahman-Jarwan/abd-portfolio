import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'clp-theme-picker',
  imports: [NgClass],
  templateUrl: './theme-picker.component.html',
  styleUrl: './theme-picker.component.scss'
})
export class ThemePickerComponent {

  constructor (public themeService: ThemeService) {
  }

  themeToggle () {
    this.themeService.currentMode === 'darkmode' ? this.themeService.setTheme('lightmode') : this.themeService.setTheme('darkmode');
  }
}
