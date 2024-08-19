import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorRoutingModule } from './operator-routing.module';
import { AadharComponent } from './aadhar/aadhar.component';
import { AddUpdateAadharComponent } from './aadhar/add-update-aadhar/add-update-aadhar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OperatorDashboardComponent } from './operator-dashboard/operator-dashboard.component';
import { OperatorReportComponent } from './operator-report/operator-report.component';


@NgModule({
  declarations: [
    AadharComponent,
    AddUpdateAadharComponent,
    OperatorDashboardComponent,
    OperatorReportComponent,

  ],
  imports: [
    CommonModule,
    OperatorRoutingModule,
    SharedModule
  ]
})
export class OperatorModule { }
