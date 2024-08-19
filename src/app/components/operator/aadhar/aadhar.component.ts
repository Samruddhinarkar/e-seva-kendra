import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AddUpdateAadharComponent } from './add-update-aadhar/add-update-aadhar.component';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from '../../admin/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-aadhar',
  templateUrl: './aadhar.component.html',
  styleUrls: ['./aadhar.component.scss']
})
export class AadharComponent {
  allAadharList:Array<any>=[];
  page = 1;
  perPage = 50;
  total = 0;
  constructor(  private dialog: MatDialog,
    private _adminService: AdminService,
    private _tosterService: ToastrService,){
   
  }
  
  ngOnInit(): void {
    this.getAadharList();
  }
  openDialog(data?: any) {
    const dialogRef = this.dialog.open(AddUpdateAadharComponent, {
      data: data,
      width: '744px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe((message: string) => {
      if (message == 'create' || message == 'update') {
        this.getAadharList();
      } else {
        console.log('nothing happen');
      }
    });
  }
  getAadharList() {
    this._adminService.getAdharList(this.page,this.perPage).subscribe({
      next: (res: any) => {
        if (res.data.length > 0) {
          this.allAadharList = res.data;
          if (res.data.length > 0) {
            this.allAadharList = res.data
            this.total = res.pagination.total
          }
        } else {
          this.allAadharList = []
          
        }
      }
    })
  }
  changeEvent(event: any, id: any) {
    let status = 0;
    if (event.checked) {
      status = 1;
    }
    this._adminService.DocumentTypeEnableDisable(id, status).subscribe({
      next: (res: any) => {
        if (res.status === 200) {
          this._tosterService.success(res.message);
          this.getAadharList();
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
    this.getAadharList();

}

}
