import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill.model';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { SkillsService } from '../../services/skills.service';
import { AbstractComponent } from '../../models/abstract-component.base';

@Component({
  selector: 'clp-about-skills-list',
  imports: [TranslatePipe],
  templateUrl: './about-skills-list.component.html',
  styleUrl: './about-skills-list.component.scss'
})
export class AboutSkillsListComponent extends AbstractComponent implements OnInit {
  skills?: Skill[];

  constructor(public translateService: TranslateService,
    private skillsService: SkillsService) {
    super({
      translationPrefix: 'ABOUT.SKILLS'
    })
  }

  ngOnInit() {
    this.skillsService.getSkillsList().subscribe(skills => {
      this.skills = skills
    })
  }
}
