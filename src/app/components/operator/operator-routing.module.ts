import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AadharComponent } from './aadhar/aadhar.component';
import { OperatorDashboardComponent } from './operator-dashboard/operator-dashboard.component';

const routes: Routes = [
  { path: "", redirectTo: "operator", pathMatch: "full" },
  { path: "", 
    component: OperatorDashboardComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: "aadhar",
    component: AadharComponent,
    pathMatch: "full",
    outlet: "operator_menu",
    // canActivate:[AuthGuard]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorRoutingModule { }
