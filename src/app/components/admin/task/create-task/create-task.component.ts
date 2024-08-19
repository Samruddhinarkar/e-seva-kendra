import { Component } from '@angular/core';
import { AdminService } from '../../admin.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  allTaskList:Array<any>=[];
  page = 1;
  perPage = 50;
  total = 0;
  constructor(  private dialog: MatDialog,
    private _adminService: AdminService,
    private _tosterService: ToastrService,){
   
  }
  
  ngOnInit(): void {
    this.getTaskList();
  }
  getTaskList() {
    this._adminService.getTask(this.page,this.perPage).subscribe({
      next: (res: any) => {
        if (res.data.length > 0) {
          this.allTaskList = res.data;
          if (res.data.length > 0) {
            this.allTaskList = res.data
            this.total = res.pagination.total
          }
        } else {
          this.allTaskList = []
          
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
          this.getTaskList();
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
    this.getTaskList();

}

}
