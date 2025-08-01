import { Component, OnInit } from '@angular/core';
import { AbstractComponent } from '../../models/abstract-component.base';
import { ProjectsService } from '../../services/projects.service';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../models/project.model';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ProjectBreadcrumbComponent } from '../project-breadcrumb/project-breadcrumb.component';
import { GallaryComponent } from '../gallary/gallary.component';
import { YoutubeEmbedComponent } from '../youtube-embed/youtube-embed.component';
import { InstagramEmbedComponent } from '../instagram-embed/instagram-embed.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'clp-project',
  imports: [TranslatePipe, ProjectBreadcrumbComponent, GallaryComponent, YoutubeEmbedComponent, InstagramEmbedComponent, NgClass],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent extends AbstractComponent implements OnInit {
  project?: Project;
  showGallary: boolean = false;
  gallaryUrls?: string[];
  currentGallaryIndex?: number;

  constructor(public translateService: TranslateService, private projectsService: ProjectsService, private activatedRoute: ActivatedRoute) {
    super({
      translationPrefix: 'PROJECT'
    })
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = Number(data.get('id'));
      this.projectsService.getProjectById(id).subscribe(project => {
        this.project = project;
      });
    })
  }

  showStyleframeImages(index: number) {
    this.showGallary = true;
    this.gallaryUrls = this.project?.styleframeImages;
    this.currentGallaryIndex = index;
  }

  showProcessImages(index: number) {
    this.showGallary = true;
    this.gallaryUrls = this.project?.processImages;
    this.currentGallaryIndex = index;
  }
}
