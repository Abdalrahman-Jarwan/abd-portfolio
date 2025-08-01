import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'clp-youtube-embed',
  imports: [],
  templateUrl: './youtube-embed.component.html',
  styleUrl: './youtube-embed.component.scss'
})
export class YoutubeEmbedComponent implements OnChanges {
  @Input() url?: string;
  sanitizedUrl?: SafeResourceUrl;

  constructor (private _sanitizer: DomSanitizer) { }


  ngOnChanges (changes: SimpleChanges): void {
    if (changes['url']?.currentValue) {
      this.sanitizedUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.url!);
    }
  }
}
