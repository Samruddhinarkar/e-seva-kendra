import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from '../../admin.service';
import { ToastrService } from 'ngx-toastr';
import { AddUpdateDocumentComponent } from './add-update-document/add-update-document.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.scss']
})
export class CreateDocumentComponent {
  allDocumentTypeList:Array<any>=[];
  page = 1;
  perPage = 50;
  total = 0;
  constructor(  private dialog: MatDialog,
    private _adminService: AdminService,
    private _tosterService: ToastrService,){
   
  }
  
  ngOnInit(): void {
    this.getDocumentTypeList();
  }
  openDialog(data?: any) {
    const dialogRef = this.dialog.open(AddUpdateDocumentComponent, {
      data: data,
      width: '744px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe((message: string) => {
      if (message == 'create' || message == 'update') {
        this.getDocumentTypeList();
      } else {
        console.log('nothing happen');
      }
    });
  }
  getDocumentTypeList() {
    this._adminService.getDocumentTypeList(this.page,this.perPage).subscribe({
      next: (res: any) => {
        if (res.data.length > 0) {
          this.allDocumentTypeList = res.data;
          if (res.data.length > 0) {
            this.allDocumentTypeList = res.data
            this.total = res.pagination.total
          }
        } else {
          this.allDocumentTypeList = []
          
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
          this.getDocumentTypeList();
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
    this.getDocumentTypeList();

}

}
