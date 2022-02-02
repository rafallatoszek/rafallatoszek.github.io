import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];

  constructor(private modalService: NgbModal, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((data) =>
      this.projects = data
    );
  }

  open(project: Project) {
    const modalRef = this.modalService.open(ProjectComponent, { size: 'xl' });
    modalRef.componentInstance.project = project;
  }

}
