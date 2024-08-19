import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'auth' ,
    pathMatch: "full",
  },
  {
    path: "",
    loadChildren: () =>
      import("../app/components/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "admin",
    loadChildren: () =>
      import("../app/components/admin/admin.module").then((m) => m.AdminModule),
  },
  {
    path: "employee",
    loadChildren: ()=>
      import("../app/components/employee/employee.module").then((m) => m.EmployeeModule)
  },
  {
    path: "operator",
    loadChildren: ()=>
      import("../app/components/operator/operator.module").then((m) => m.OperatorModule)
  },
  {
    path: "team-leader",
    loadChildren: ()=>
      import("../app/components/team-leader/team-leader.module").then((m) => m.TeamLeaderModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
