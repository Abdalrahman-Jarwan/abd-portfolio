import { AfterViewInit, Component, Input, OnChanges, SecurityContext, SimpleChanges } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'clp-instagram-embed',
  imports: [],
  templateUrl: './instagram-embed.component.html',
  styleUrl: './instagram-embed.component.scss'
})
export class InstagramEmbedComponent implements OnChanges, AfterViewInit {
  @Input() url?: string;

  ngAfterViewInit (): void {
    // @ts-ignore
    if (window['instgrm']) {
      instgrm.Embeds.process();
    }
  }


  ngOnChanges (changes: SimpleChanges): void {
    if (changes['url']?.currentValue) {
      "https://www.instagram.com/reel/Cn1pbY3LULe/?utm_source=ig_embed&amp;utm_campaign=loading"
    }
  }
}

declare namespace instgrm {
  namespace Embeds {
    function process (): void;
  }
}