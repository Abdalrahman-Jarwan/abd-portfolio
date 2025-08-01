import { Component, OnInit } from '@angular/core';
import { Technology } from '../../models/technology.model';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { TechnologiesService } from '../../services/technologies.service';
import { AbstractComponent } from '../../models/abstract-component.base';

@Component({
  selector: 'clp-about-technology-list',
  imports: [TranslatePipe],
  templateUrl: './about-technology-list.component.html',
  styleUrl: './about-technology-list.component.scss'
})
export class AboutTechnologyListComponent extends AbstractComponent implements OnInit {
  technologies?: Technology[];

  constructor(public translateService: TranslateService,
    private technologiesService: TechnologiesService) {
    super({
      translationPrefix: 'ABOUT.TECHNOLOGIES'
    })
  }

  ngOnInit() {
    this.technologiesService.getSkillsList().subscribe(technologies => {
      this.technologies = technologies;
    })
  }
}
