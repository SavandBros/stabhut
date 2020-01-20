import { OnInit } from '@angular/core';
import { Label } from '@app/interfaces/label';
import { Organization } from '@app/interfaces/organization';
import { Project } from '@app/interfaces/project';
import { User } from '@app/interfaces/user';
import { OrganizationService } from '@app/pages/organization/organization.service';

export class OrganizationBase implements OnInit {

  organization: Organization;
  projects: Project[];
  labels: Label[];
  users: User[];

  get isOrganizationInitialised(): boolean {
    return OrganizationService.isInitialised;
  };

  ngOnInit(): void {
    OrganizationService.organization.subscribe((data: Organization): void => {
      this.organization = data;
    });
    OrganizationService.projects.subscribe((data: Project[]): void => {
      this.projects = data;
    });
    OrganizationService.labels.subscribe((data: Label[]): void => {
      this.labels = data;
    });
    OrganizationService.users.subscribe((data: User[]): void => {
      this.users = data;
    });
  }

  /**
   * @returns Local project data
   * @param id Project ID
   */
  getProject(id: number): Project {
    if (this.projects) {
      return this.projects.find(item => item.id === id);
    }
  }

  /**
   * @returns Local label data
   * @param id Label ID
   */
  getLabel(id: number): Label {
    if (this.labels) {
      return this.labels.find(item => item.id === id);
    }
  }

  /**
   * @returns Local user data
   * @param id User ID
   */
  getUser(id: number): User {
    if (this.users) {
      return this.users.find(item => item.id === id);
    }
  }
}
