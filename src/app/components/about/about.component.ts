import { Component } from '@angular/core';
import { AboutChiaweiFigureComponent } from "../about-chiawei-figure/about-chiawei-figure.component";
import { AboutHiWorldDescriptionComponent } from "../about-hi-world-description/about-hi-world-description.component";
import { AboutSkillsListComponent } from "../about-skills-list/about-skills-list.component";
import { AboutTechnologyListComponent } from "../about-technology-list/about-technology-list.component";

@Component({
  selector: 'clp-about',
  imports: [AboutChiaweiFigureComponent, AboutHiWorldDescriptionComponent, AboutSkillsListComponent, AboutTechnologyListComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
