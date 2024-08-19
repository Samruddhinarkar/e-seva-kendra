import { Component } from '@angular/core';
import { AddUpdatePrioritiesComponent } from './add-update-priorities/add-update-priorities.component';
import { AdminService } from '../../admin.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-priorities',
  templateUrl: './priorities.component.html',
  styleUrls: ['./priorities.component.scss']
})
export class PrioritiesComponent {
  allprioritiesList:Array<any>=[];
  page = 1;
  perPage = 50;
  total = 0;
  constructor(  private dialog: MatDialog,
    private _adminService: AdminService,
    private _tosterService: ToastrService,){
   
  }
  
  ngOnInit(): void {
    this.getPrioritiesList();
  }
  openDialog(data?: any) {
    const dialogRef = this.dialog.open(AddUpdatePrioritiesComponent, {
      data: data,
      width: '744px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe((message: string) => {
      if (message == 'create' || message == 'update') {
        this.getPrioritiesList();
      } else {
        console.log('nothing happen');
      }
    });
  }
  getPrioritiesList() {
    this._adminService.getPrioritiesList(this.page,this.perPage).subscribe({
      next: (res: any) => {
        if (res.data.length > 0) {
          this.allprioritiesList = res.data;
          if (res.data.length > 0) {
            this.allprioritiesList = res.data
            this.total = res.pagination.total
          }
        } else {
          this.allprioritiesList = []
        }
      }
    })
  }
  changeEvent(event: any, id: any) {
    let status = 0;
    if (event.checked) {
      status = 1;
    }
    this._adminService.prioritiesEnableDisable(id, status).subscribe({
      next: (res: any) => {
        if (res.status === 200) {
          this._tosterService.success(res.message);
          this.getPrioritiesList();
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
    this.getPrioritiesList();

}

}
