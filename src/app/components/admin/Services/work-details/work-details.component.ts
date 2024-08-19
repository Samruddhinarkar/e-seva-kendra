import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from '../../admin.service';
import { ToastrService } from 'ngx-toastr';
import { AddUpdateWorkDetailsComponent } from './add-update-work-details/add-update-work-details.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.scss']
})
export class WorkDetailsComponent {
  allworkdetailsList:Array<any>=[];
  page = 1;
  perPage = 50;
  total = 0;
  constructor(  private dialog: MatDialog,
    private _adminService: AdminService,
    private _tosterService: ToastrService,){
   
  }
  
  ngOnInit(): void {
    this.getWorkDetailsList();
  }
  openDialog(data?: any) {
    const dialogRef = this.dialog.open(AddUpdateWorkDetailsComponent, {
      data: data,
      width: '744px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe((message: string) => {
      if (message == 'create' || message == 'update') {
        this.getWorkDetailsList();
      } else {
        console.log('nothing happen');
      }
    });
  }
  getWorkDetailsList() {
    this._adminService.getWorkdetails(this.page,this.perPage).subscribe({
      next: (res: any) => {
        if (res.data.length > 0) {
          this.allworkdetailsList = res.data;
          console.log(this.allworkdetailsList)
          if (res.data.length > 0) {
            this.allworkdetailsList = res.data
            this.total = res.pagination.total
          }
        } else {
          this.allworkdetailsList = []
          
        }
      }
    })
  }
  changeEvent(event: any, id: any) {
    let status = 0;
    if (event.checked) {
      status = 1;
    }
    this._adminService.designationEnableDisable(id, status).subscribe({
      next: (res: any) => {
        if (res.status === 200) {
          this._tosterService.success(res.message);
          this.getWorkDetailsList();
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
  onPageChange(event: PageEvent): void {
    this.page = event.pageIndex + 1;
    this.perPage = event.pageSize;
    this.getWorkDetailsList();

}
}




