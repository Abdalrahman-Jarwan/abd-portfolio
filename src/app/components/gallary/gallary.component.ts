import { Component, EventEmitter, Input, Output } from '@angular/core';
import { YoutubeEmbedComponent } from '../youtube-embed/youtube-embed.component';

@Component({
  selector: 'clp-gallary',
  imports: [YoutubeEmbedComponent],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.scss'
})
export class GallaryComponent {
  @Input() urls?: string[];
  @Input() showGallary: boolean = false;
  @Output() showGallaryChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() index: number = 0;
  @Output() indexChange: EventEmitter<number> = new EventEmitter<number>();

  dismissGallary () {
    this.showGallary = false;
    this.showGallaryChange.emit(this.showGallary);
  }

  increaseIndex () {
    if (this.urls) {
      this.index = this.index + 1 == this.urls.length ? 0 : this.index + 1;
      this.indexChange.emit(this.index);
    }
  }

  decreaseIndex () {
    if (this.urls) {
      this.index = this.index - 1 == -1 ? this.urls.length - 1 : this.index - 1;
      this.indexChange.emit(this.index);
    }
  }

  get currentMediaUrl () {
    return this.urls?.[this.index];
  }

  get showButtons () {
    return this.urls?.length;
  }
}
