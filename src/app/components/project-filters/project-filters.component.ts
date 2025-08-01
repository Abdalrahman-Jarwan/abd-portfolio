import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractComponent } from '../../models/abstract-component.base';
import { TranslatePipe } from '@ngx-translate/core';
import { Project } from '../../models/project.model'
import { ProjectsService } from '../../services/projects.service';
import { CategoryTypes } from '../../models/category-types.enum';
import { NgClass, NgSwitch, NgSwitchCase, NgTemplateOutlet } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'clp-project-filters',
  imports: [TranslatePipe, NgTemplateOutlet, NgClass, NgbDropdownModule, NgSwitch, NgSwitchCase],
  templateUrl: './project-filters.component.html',
  styleUrl: './project-filters.component.scss'
})
export class ProjectFiltersComponent extends AbstractComponent {
  @Input() projects?: Project[];
  @Output() projectsChange: EventEmitter<Project[]> = new EventEmitter<Project[]>();

  selectedFilter: CategoryTypes | 'all' = 'all';

  categoryTypes = CategoryTypes;

  constructor (private projectsService: ProjectsService) {
    super({
      translationPrefix: 'PROJECT_FILTERS'
    });

  }

  filter (categoryType: CategoryTypes | 'all') {
    this.projectsService.getProjects(categoryType).subscribe(projects => {
      this.selectedFilter = categoryType;
      this.projects = projects
      this.projectsChange.emit(this.projects);
    })
  }
}
