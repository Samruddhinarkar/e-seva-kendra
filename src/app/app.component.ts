import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-seva-kendra-app';
  isAdminDashboard = false;
  isEmployeeDashboard = false;
  isOperatorDashboard = false;
  isTeamLeaderDashboard = false;


constructor(
  private router: Router,
) {}
ngAfterContentChecked() {
  let currentRoute = this.router.routerState.snapshot.url;
  if (currentRoute == "/login" || currentRoute == "/auth" || currentRoute == "/auth/sign-up") {
    this.isAdminDashboard = false;
    this.isEmployeeDashboard = false;
  } else if (currentRoute?.split('/')[1] == 'admin') {
    this.isAdminDashboard = true;
    this.isEmployeeDashboard = false;
    this.isOperatorDashboard = false;
    this.isTeamLeaderDashboard = false;

  } else if (currentRoute?.split('/')[1] == 'employee') {
    this.isEmployeeDashboard = true;
    this.isAdminDashboard = false;
    this.isOperatorDashboard = false;
    this.isTeamLeaderDashboard = false;
  }
  else if (currentRoute?.split('/')[1] == 'operator') {
    this.isEmployeeDashboard = false;
    this.isAdminDashboard = false;
    this.isOperatorDashboard = true;
    this.isTeamLeaderDashboard = false;
  }
  else if (currentRoute?.split('/')[1] == 'team-leader') {
    this.isEmployeeDashboard = false;
    this.isAdminDashboard = false;
    this.isOperatorDashboard = false;
    this.isTeamLeaderDashboard = true;
  }


}
}
