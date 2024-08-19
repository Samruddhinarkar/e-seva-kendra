import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from '../../admin.service';
import { ToastrService } from 'ngx-toastr';
import { AddUpdateAssignRoleComponent } from './add-update-assign-role/add-update-assign-role.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['./assign-role.component.scss']
})
export class AssignRoleComponent {
  allAssignRoleList:Array<any>=[];
  page = 1;
  perPage = 50;
  total = 0;
  constructor(  private dialog: MatDialog,
    private _adminService: AdminService,
    private _tosterService: ToastrService,){
   
  }
  
  ngOnInit(): void {
    this.getAssignRoleList();
  }
  openDialog(data?: any) {
    const dialogRef = this.dialog.open(AddUpdateAssignRoleComponent, {
      data: data,
      width: '744px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe((message: string) => {
      if (message == 'create' || message == 'update') {
        this.getAssignRoleList();
      } else {
        console.log('nothing happen');
      }
    });
  }
  getAssignRoleList() {
    this._adminService.getAssignRoleList(this.page,this.perPage).subscribe({
      next: (res: any) => {
        if (res.data.length > 0) {
          this.allAssignRoleList = res.data;
          if (res.data.length > 0) {
            this.allAssignRoleList = res.data
            this.total = res.pagination.total
          }
        } else {
          this.allAssignRoleList = []
          
        }
      }
    })
  }
 
  onPageChange(event: PageEvent): void {
    this.page = event.pageIndex + 1;
    this.perPage = event.pageSize;
    this.getAssignRoleList();

}

}
