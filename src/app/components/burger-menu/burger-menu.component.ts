import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'clp-burger-menu',
  imports: [NgClass],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {
  @Input() toggled: boolean = false;
  @Output() toggledChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() burgerClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  onBurgerClick ($event:MouseEvent) {
    this.toggled = !this.toggled;
    this.toggledChange.emit(this.toggled);
    this.burgerClick.emit($event);
  }
}
