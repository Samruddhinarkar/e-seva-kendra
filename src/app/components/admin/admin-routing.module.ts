import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DesignationsComponent } from './masters/designations/designations.component';
import { PrioritiesComponent } from './masters/priorities/priorities.component';
import { StatusComponent } from './masters/status/status.component';
import { UserRolesComponent } from './masters/user-roles/user-roles.component';
import { CreateComponent } from './Services/create/create.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { CreateDocumentComponent } from './document/create-document/create-document.component';
import { AssignRoleComponent } from './users/assign-role/assign-role.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { WorkDetailsComponent } from './Services/work-details/work-details.component';
import { ListAdharComponent } from './adhar/list-adhar/list-adhar.component';
import { ViewTaskComponent } from './task/create-task/view-task/view-task.component';

const routes: Routes = [
  { path: "", redirectTo: "admin", pathMatch: "full" },
  { path: "", 
    component: AdminDashboardComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: "admin",
    component: AdminDashboardComponent,
    pathMatch: "full",
    outlet: "sub_menu",
    // canActivate:[AuthGuard]
  },

  {
    path:"designation",
    component:DesignationsComponent,
    pathMatch: "full",
    outlet: "sub_menu",

  },
  {
    path:"priorities",
    component:PrioritiesComponent,
    pathMatch: "full",
    outlet: "sub_menu",

  },
  {
    path:"status",
    component:StatusComponent,
    pathMatch: "full",
    outlet: "sub_menu",

  },
  {
    path:"user-role",
    component:UserRolesComponent,
    pathMatch: "full",
    outlet: "sub_menu",

  },
  {
    path:"create-user",
    component:UserCreateComponent,
    pathMatch: "full",
    outlet: "sub_menu",

  },
  {
    path:"services",
    component:CreateComponent,
    pathMatch: "full",
    outlet: "sub_menu",

  },
  {
    path:"document-type",
    component:CreateDocumentComponent,
    pathMatch: "full",
    outlet: "sub_menu",

  },
  {
    path:"assign-role",
    component:AssignRoleComponent,
    pathMatch: "full",
    outlet: "sub_menu",

  },
  {
    path:"create-task",
    component:CreateTaskComponent,
    pathMatch: "full",
    outlet: "sub_menu",

  },
  {
    path:"work-Details",
    component:WorkDetailsComponent,
    pathMatch: "full",
    outlet: "sub_menu",

  },
  {
    path:"adhar",
    component:ListAdharComponent,
    pathMatch: "full",
    outlet: "sub_menu",

  },
  {
    path:"view-task/:id",
    component:ViewTaskComponent,
    pathMatch: "full",
    outlet: "sub_menu",

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
