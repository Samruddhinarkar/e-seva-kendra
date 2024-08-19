import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { TeamLeaderDashboardComponent } from './team-leader-dashboard/team-leader-dashboard.component';
import { TeamLeaderReportComponent } from './team-leader-report/team-leader-report.component';

const routes: Routes = [
   { path: "", redirectTo: "auth", pathMatch: "full" },
   { path: "", 
    component: TeamLeaderDashboardComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: "task",
    component: TaskComponent,
    pathMatch: "full",
    outlet: "team_menu",
    // canActivate:[AuthGuard]
  },
  {
    path: "team-leader-dashboard",
    component: TeamLeaderDashboardComponent,
    pathMatch: "full",
    outlet: "team_menu",
    // canActivate:[AuthGuard]
  },
  {
    path: "report",
    component: TeamLeaderReportComponent,
    pathMatch: "full",
    outlet: "team_menu",
    // canActivate:[AuthGuard]
  },


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamLeaderRoutingModule {
  
 }
