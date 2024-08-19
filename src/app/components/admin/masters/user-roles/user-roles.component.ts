import { Component } from '@angular/core';
import { AddUpdateUserRolesComponent } from './add-update-user-roles/add-update-user-roles.component';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../admin.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent {
  allUserRoleList:Array<any>=[]
  constructor(  private dialog: MatDialog,
    private _adminService: AdminService,
    private _tosterService: ToastrService,){
   
  }
  
  ngOnInit(): void {
    this.getUserRoleList();
  }
  openDialog(data?: any) {
    const dialogRef = this.dialog.open(AddUpdateUserRolesComponent, {
      data: data,
      width: '744px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe((message: string) => {
      if (message == 'create' || message == 'update') {
        this.getUserRoleList();
      } else {
        console.log('nothing happen');
      }
    });
  }
  getUserRoleList() {
    this._adminService.getUserRoleList().subscribe({
      next: (res: any) => {
        if (res.data.length > 0) {
          this.allUserRoleList = res.data
          console.log('list',this.allUserRoleList)
        } else {
          this.allUserRoleList = []
        }
      }
    })
  }
  changeEvent(event: any, id: any) {
    let status = 0;
    if (event.checked) {
      status = 1;
    }
    this._adminService.userRoleEnableDisable(id, status).subscribe({
      next: (res: any) => {
        if (res.status === 200) {
          this._tosterService.success(res.message);
          this.getUserRoleList();
        } else {
          this._tosterService.warning(res.message);
        }
      },
      error: (error: any) => {
        if (error.status == 422) {
          this._tosterService.warning(error.message);
        } else {
          this._tosterService.error("Internal server error");
        }
      },
    })
  }
}
