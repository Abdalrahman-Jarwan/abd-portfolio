import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../../services/homepage.service';
import { YoutubeEmbedComponent } from "../youtube-embed/youtube-embed.component";
import { InstagramEmbedComponent } from "../instagram-embed/instagram-embed.component";

@Component({
  selector: 'clp-home',
  imports: [YoutubeEmbedComponent, InstagramEmbedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  url?: string;
  constructor (private homepageService: HomepageService) { }

  ngOnInit (): void {
    this.homepageService.getHomepage().subscribe(result => {
      this.url = result.mainVideo
    })
  }
}
