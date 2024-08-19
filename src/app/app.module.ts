import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AdminSidebarComponent } from './sidebars/admin-sidebar/admin-sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { OperatorComponent } from './sidebars/operator/operator.component';
import { EmployeeComponent } from './sidebars/employee/employee.component';
import { TeamLeaderComponent } from './sidebars/team-leader/team-leader.component';
import { AuthGuard } from './shared/auth-guard.service';
import { AuthInterceptor } from './shared/auth-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    AdminSidebarComponent,
    OperatorComponent,
    EmployeeComponent,
    TeamLeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
   }), NgbModule // ToastrModule added
  ],
  providers: [AuthGuard,  {  
    provide: HTTP_INTERCEPTORS,  
    useClass: AuthInterceptor,  
    multi: true  
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
