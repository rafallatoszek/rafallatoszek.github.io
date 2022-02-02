import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable()
export class ProjectService {

    constructor(private http: HttpClient) {
    }

    public getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>("./assets/projects.json");
    }
}