import { Component, OnInit } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectsService } from '../../services/projects.service';
import { ProjectFiltersComponent } from "../project-filters/project-filters.component";
import { Project } from '../../models/project.model';

@Component({
  selector: 'clp-projects',
  imports: [
    ProjectCardComponent,
    ProjectFiltersComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects?: Project[];

  constructor (public projectsService: ProjectsService) {
  }

  ngOnInit (): void {
    this.projectsService.getProjects('all').subscribe(projects => {
      this.projects = projects;
    })
  }
}
