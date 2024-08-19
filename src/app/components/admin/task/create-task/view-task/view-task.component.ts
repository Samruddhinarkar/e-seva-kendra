import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../admin.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent {
  allCustmerList:any={};
  customer_id:any;
 
  constructor(  private dialog: MatDialog,
    private _adminService: AdminService,
    private _tosterService: ToastrService,
    private url: ActivatedRoute,
  ){
   
  }
  
  ngOnInit(): void {
    this.customer_id = this.url.snapshot.params['id']
    console.log(this.customer_id)
    this.getcustmerList();

  }
  getcustmerList() {
    this._adminService.getByIAllCustomerlist(this.customer_id).subscribe((res:any)=>{
      this.allCustmerList=(res.data)
      console.log(this.allCustmerList)
    })
  }
}

    
    
  

