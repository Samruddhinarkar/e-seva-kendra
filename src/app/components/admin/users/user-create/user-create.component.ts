import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from '../../admin.service';
import { ToastrService } from 'ngx-toastr';
import { AddUpdateUsersComponent } from './add-update-users/add-update-users.component';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {
  allUserList:Array<any>=[]
  constructor(  private dialog: MatDialog,
    private _adminService: AdminService,
    private _tosterService: ToastrService,){
   
  }
  
  ngOnInit(): void {
    this.getUserList();
  }
  openDialog(data?: any) {
    const dialogRef = this.dialog.open(AddUpdateUsersComponent, {
      data: data,
      width: '744px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe((message: string) => {
      if (message == 'create' || message == 'update') {
        this.getUserList();
      } else {
        console.log('nothing happen');
      }
    });
  }
  getUserList() {
    this._adminService.getUsersList().subscribe({
      next: (res: any) => {
        if (res.data.length > 0) {
          this.allUserList = res.data
          console.log('list',this.allUserList)
        } else {
          this.allUserList = []
        }
      }
    })
  }
  changeEvent(event: any, id: any) {
    let status = 0;
    if (event.checked) {
      status = 1;
    }
    this._adminService.usersEnableDisable(id, status).subscribe({
      next: (res: any) => {
        if (res.status === 200) {
          this._tosterService.success(res.message);
          this.getUserList();
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
