import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { EmployeeService } from '../employee.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AddUpdateTaskComponent } from '../../team-leader/task/add-update-task/add-update-task.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  allTaskList:Array<any>=[];
  page = 1;
  perPage = 50;
  total = 0;
  constructor(  private dialog: MatDialog,
    private _employeeService: EmployeeService,
    private _tosterService: ToastrService,){
   
  }
  ngOnInit(): void {
   // this.getTaskList();
  }
  openDialog(data?: any) {
    const dialogRef = this.dialog.open(AddUpdateTaskComponent, {
      data: data,
      width: '744px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe((message: string) => {
      if (message == 'create' || message == 'update') {
        this.getTaskList();
      } else {
        console.log('nothing happen');
      }
    });
  }
  getTaskList() {
    this._employeeService.getTask(this.page,this.perPage).subscribe({
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
  // changeEvent(event: any, id: any) {
  //   let status = 0;
  //   if (event.checked) {
  //     status = 1;
  //   }
  //   this._employeeService.designationEnableDisable(id, status).subscribe({
  //     next: (res: any) => {
  //       if (res.status === 200) {
  //         this._tosterService.success(res.message);
  //         this.getTaskList();
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
    this.getTaskList();

}

}
