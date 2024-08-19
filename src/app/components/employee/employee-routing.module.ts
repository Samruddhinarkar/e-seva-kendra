import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeReportComponent } from './employee-report/employee-report.component';
import { TaskComponent } from '../team-leader/task/task.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  { path: "", redirectTo:"employee", pathMatch: "full" },
  { path: "", 
    component: EmployeeDashboardComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: "employee-dashboard",
    component: EmployeeDashboardComponent,
    pathMatch: "full",
    outlet: "employee_menu",
    // canActivate:[AuthGuard]
  },
  {
    path: "report",
    component: EmployeeReportComponent,
    pathMatch: "full",
    outlet: "employee_menu",
    // canActivate:[AuthGuard]
  },

  {
  path: "task-list",
  component:TaskListComponent,
  pathMatch: "full",
  outlet: "employee_menu",
  // canActivate:[AuthGuard]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
