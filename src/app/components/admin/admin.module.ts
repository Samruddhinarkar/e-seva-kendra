import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DesignationsComponent } from './masters/designations/designations.component';
import { UserRolesComponent } from './masters/user-roles/user-roles.component';
import { AddUpdateUserRolesComponent } from './masters/user-roles/add-update-user-roles/add-update-user-roles.component';
import { StatusComponent } from './masters/status/status.component';
import { AddUpdateStatusComponent } from './masters/status/add-update-status/add-update-status.component';
import { PrioritiesComponent } from './masters/priorities/priorities.component';
import { AddUpdatePrioritiesComponent } from './masters/priorities/add-update-priorities/add-update-priorities.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddUpdateDesignationsComponent } from './masters/designations/add-update-designations/add-update-designations.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { CreateComponent } from './Services/create/create.component';
import { CreateDocumentComponent } from './document/create-document/create-document.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { AddUpdateUsersComponent } from './users/user-create/add-update-users/add-update-users.component';
import { AddUpdateServicesComponent } from './Services/create/add-update-services/add-update-services.component';
import { AddUpdateDocumentComponent } from './document/create-document/add-update-document/add-update-document.component';
import { AssignRoleComponent } from './users/assign-role/assign-role.component';
import { AddUpdateAssignRoleComponent } from './users/assign-role/add-update-assign-role/add-update-assign-role.component';
import { WorkDetailsComponent } from './Services/work-details/work-details.component';
import { AddUpdateWorkDetailsComponent } from './Services/work-details/add-update-work-details/add-update-work-details.component';
import { ListAdharComponent } from './adhar/list-adhar/list-adhar.component';
import { ViewTaskComponent } from './task/create-task/view-task/view-task.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    DesignationsComponent,
    UserRolesComponent,
    AddUpdateUserRolesComponent,
    StatusComponent,
    AddUpdateStatusComponent,
    PrioritiesComponent,
    AddUpdatePrioritiesComponent,
    AddUpdateDesignationsComponent,
    UserCreateComponent,
    CreateComponent,
    CreateDocumentComponent,
    CreateTaskComponent,
    AddUpdateUsersComponent,
    AddUpdateServicesComponent,
    AddUpdateDocumentComponent,
    AssignRoleComponent,
    AddUpdateAssignRoleComponent,
    WorkDetailsComponent,
    AddUpdateWorkDetailsComponent,
    ListAdharComponent,
    ViewTaskComponent,
  
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule

  ]
})
export class AdminModule { 
  
}
