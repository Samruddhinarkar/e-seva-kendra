import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from '../../admin.service';
import { ToastrService } from 'ngx-toastr';
import { AddUpdatePrioritiesComponent } from '../../masters/priorities/add-update-priorities/add-update-priorities.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-adhar',
  templateUrl: './list-adhar.component.html',
  styleUrls: ['./list-adhar.component.scss']
})
export class ListAdharComponent {
  allAdharListList:Array<any>=[];
  page = 1;
  perPage = 50;
  total = 0;
  constructor(  private dialog: MatDialog,
    private _adminService: AdminService,
    private _tosterService: ToastrService,){
   
  }
  
  ngOnInit(): void {
    this.getAdharList();
  }
  openDialog(data?: any) {
    const dialogRef = this.dialog.open(AddUpdatePrioritiesComponent, {
      data: data,
      width: '744px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe((message: string) => {
      if (message == 'create' || message == 'update') {
        this.getAdharList();
      } else {
        console.log('nothing happen');
      }
    });
  }
  getAdharList() {
    this._adminService.getAdharList(this.page,this.perPage).subscribe({
      next: (res: any) => {
        if (res.data.length > 0) {
          this.allAdharListList = res.data;
          if (res.data.length > 0) {
            this.allAdharListList = res.data
            this.total = res.pagination.total
          }
        } else {
          this.allAdharListList = []
          
        }
      }
    })
  }
  // changeEvent(event: any, id: any) {
  //   let status = 0;
  //   if (event.checked) {
  //     status = 1;
  //   }
  //   this._adminService.DocumentTypeEnableDisable(id, status).subscribe({
  //     next: (res: any) => {
  //       if (res.status === 200) {
  //         this._tosterService.success(res.message);
  //         this.getDocumentTypeList();
  //       } else {
  //         this._tosterService.warning(res.message);
  //       }
  //     },
  //     error: (error: any) => {
  //       if (error.status == 422) {
  //         this._tosterService.warning(error.message);
  //       } else {
  //         this._tosterService.error("Internal server error");
  //       }
  //     },
  //   })
  // }
  onPageChange(event: PageEvent): void {
    this.page = event.pageIndex + 1;
    this.perPage = event.pageSize;
    this.getAdharList();

}

}
