import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Column } from '@app/interfaces/column';
import { Label } from '@app/interfaces/label';
import { Organization } from '@app/interfaces/organization';
import { Project } from '@app/interfaces/project';
import { ApiService } from '@app/services/api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  /**
   * Current organization data
   */
  organization: Organization;

  /**
   * Projects of organization
   */
  projects: Project[];

  /**
   * Columns of projects
   */
  columns: Column[];

  /**
   * Labels of organization
   */
  labels: Label[];

  /**
   * Selected project
   */
  projectSelected: Project;

  /**
   * Selected label
   */
  labelSelected: Label;

  /**
   * Selected project tab template variable ('columns' or 'options')
   */
  projectTab = 'columns';

  constructor(private route: ActivatedRoute,
              private api: ApiService) {
  }

  ngOnInit(): void {
    // Get current project ID from router params
    this.route.params.subscribe((params: Params): void => {
      // Load organisation data
      this.api.getOrganization(params.id).subscribe((organization: Organization): void => {
        this.organization = organization;
      });
      // Load labels of organization
      this.api.getLabels(params.id).subscribe((labels: Label[]): void => {
        this.labels = labels;
      });
      // Load projects of organization
      this.api.getProjects(params.id).subscribe((projects: Project[]): void => {
        this.projects = projects;
        this.projectSelected = this.projects[0];
      });
      // Load columns of organization
      this.api.getColumns({ organization: params.id }).subscribe((columns: Column[]): void => {
        this.columns = columns;
      });
    });
  }

  /**
   * Add a project
   *
   * @param name Project name
   */
  addProject(name: string) {
    this.api.createProject(this.organization.id, name).subscribe((data: Project): void => {
      this.projects.push(data);
    });
  }

  /**
   * Update a project
   */
  updateProject(): void {
    this.api.updateProject(this.projectSelected.id, {
      name: this.projectSelected.name,
      organization: this.organization.id,
    }).subscribe(data => {
      this.projectSelected.name = data.name;
    });
  }

  /**
   * Delete a Project
   */
  deleteProject(): void {
    if (!confirm('Are you sure you want to delete this project?')) {
      return;
    }
    this.api.deleteProject(this.projectSelected.id).subscribe((): void => {
      this.projects.splice(this.projects.indexOf(this.projectSelected), 1);
      this.projectSelected = this.projects[0];
    });
  }

  /**
   * Add a label
   *
   * @param name Label name
   */
  addLabel(name: string) {
    this.api.createLabel(this.organization.id, name).subscribe((data: Label): void => {
      this.labels.push(data);
    });
  }

  /**
   * Add a column
   *
   * @param name Column name
   */
  addColumn(name: string): void {
    this.api.createColumn({ project: this.projectSelected.id, name }).subscribe(data => {
      this.columns.push(data);
    });
  }

  /**
   * Delete a column
   *
   * @param column Column to delete
   */
  deleteColumn(column: Column): void {
    if (!confirm('Are you sure you want to delete this column?')) {
      return;
    }
    this.api.deleteColumn(column.id).subscribe(() => {
      const index = this.columns.indexOf(column);
      this.columns.splice(index, 1);
    });
  }

  /**
   * Update all columns
   */
  updateColumns(): void {
    for (let column of this.columns) {
      if (column.project === this.projectSelected.id) {
        this.api.updateColumn(column.id, { name: column.name }).subscribe((data: Column): void => {
          column = data;
        });
      }
    }
  }

  /**
   * Update a label
   *
   * @param label Label to update
   */
  updateLabel(label: Label): void {
    this.api.updateLabel(label.id, { name: label.name, color: label.color }).subscribe((data: Label): void => {
      label = data;
    });
  }

  /**
   * Delete a label
   *
   * @param label Label to delete
   */
  deleteLabel(label: Label): void {
    if (!confirm('Are you sure you want to delete this label?')) {
      return;
    }
    this.api.deleteLabel(label.id).subscribe((): void => {
      const index: number = this.labels.findIndex((item: Label): boolean => item.id === label.id);
      this.labels.splice(index, 1);
      this.labelSelected = null;
    });
  }
}
