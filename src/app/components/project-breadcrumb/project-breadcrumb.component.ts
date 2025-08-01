import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';
import { RouterLink } from '@angular/router';
import { TranslateDirective, TranslateModule, TranslateService } from '@ngx-translate/core';
import { AbstractComponent } from '../../models/abstract-component.base';

@Component({
  selector: 'clp-project-breadcrumb',
  imports: [RouterLink, TranslateDirective, TranslateModule],
  templateUrl: './project-breadcrumb.component.html',
  styleUrl: './project-breadcrumb.component.scss'
})
export class ProjectBreadcrumbComponent extends AbstractComponent {
  @Input() project?: Project;

  constructor(public translateService: TranslateService) {
    super({
      translationPrefix: 'PROJECT'
    })
  }
}
