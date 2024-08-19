import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamLeaderRoutingModule } from './team-leader-routing.module';
import { TaskComponent } from './task/task.component';
import { AddUpdateTaskComponent } from './task/add-update-task/add-update-task.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeamLeaderDashboardComponent } from './team-leader-dashboard/team-leader-dashboard.component';
import { TeamLeaderReportComponent } from './team-leader-report/team-leader-report.component';


@NgModule({
  declarations: [
    TaskComponent,
    AddUpdateTaskComponent,
    TeamLeaderDashboardComponent,
    TeamLeaderReportComponent
  ],
  imports: [
    CommonModule,
    TeamLeaderRoutingModule,
    SharedModule
  ]
})
export class TeamLeaderModule { }
