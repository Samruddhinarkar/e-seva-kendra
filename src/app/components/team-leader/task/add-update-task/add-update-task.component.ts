import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { TaskComponent } from '../task.component';
import { TeamLeaderService } from '../../team-leader.service';

@Component({
  selector: 'app-add-update-task',
  templateUrl: './add-update-task.component.html',
  styleUrls: ['./add-update-task.component.scss']
})
export class AddUpdateTaskComponent {
  form!:FormGroup;
  user_id:any;
  isEdit=false;
  allserviceList:Array<any>=[];
  allWorkDetailsList:Array<any>=[];
  allAssignedToList:Array<any>=[];
  allDocumentTypeList:Array<any>=[];
  constructor(
    private fb: FormBuilder,
    private _teamLeaderService: TeamLeaderService,
    private _toastrService: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<TaskComponent>
  ){ }
  ngOnInit(): void {
    this.createForm(); 
     this.getallServiceList();
     this.getAllRolList();
     this.getAllDocumentTypeList();
     this.getallWorkDetailsList();


    if (this.data?.task_header_id != null) {
      this.isEdit = true;
      this.prepopulateData(this.data);
    }
  }
  createForm() {
    this.form = this.fb.group({
      customer_name: [null, Validators.required],
      mobile_number: [null, Validators.required],
      address: [null, Validators.required],
      service_id: ['', Validators.required],
      work_details_id: ['', Validators.required],
      document_type_id: ['', Validators.required],
      assigned_to: ['', Validators.required],
      due_date: [null, Validators.required],
      payment_status: [null, Validators.required],

    })
  }


  get control() {
    return this.form.controls;
  }
  onSubmit() {
    this.isEdit ? this.updatetask() : this.createTask();
  }
  createTask() {
    if (this.form.valid) {
      this._teamLeaderService.createTask(this.form.value).subscribe({
        next: (res: any) => {
          if (res.status == 200) {
            this._toastrService.success(res.message);
            this.closeDialog('create');
          } else {
            this._toastrService.warning(res.message);
          }
        },
        error: (err: any) => {
          if (err.error.status == 401 || err.error.status == 422) {
            this._toastrService.warning(err.error.message);
          } else {
            this._toastrService.error('Internal Server Error');
          }
        }
      })
    } else {
      this.form.markAllAsTouched();
      this._toastrService.warning('fill required fields');
    }
  }
  updatetask() {
    if (this.form.valid) {
      this._teamLeaderService.updateTask(this.data.task_header_id,this.form.value).subscribe({
        next: (res: any) => {
          if (res.status == 200) {
            this._toastrService.success(res.message);
            this.closeDialog('update');
          } else {
            this._toastrService.warning(res.message);
          }
        },
        error: (err: any) => {
          if (err.error.status == 401 || err.error.status == 422) {
            this._toastrService.warning(err.error.message);
          } else {
            this._toastrService.error('Internal Server Error');
          }
        }
      })
    } else {
      this.form.markAllAsTouched();
      this._toastrService.warning('fill required fields');
    }
  }
  closeDialog(message?: any) {
    this.dialogRef.close(message)
  }
  prepopulateData(data: any) {
    this.control['customer_name'].patchValue(data.customer_name);
    this.control['mobile_number'].patchValue(data.mobile_number);
    this.control['address'].patchValue(data.address);
    this.control['service_id'].patchValue(data.service_id);
    this.control['work_details_id'].patchValue(data.work_details_id);
    this.control['document_type_id'].patchValue(data.designation_name);
    this.control['assigned_to'].patchValue(data.designation_name);
    this.control['due_date'].patchValue(data.designation_name);
    this.control['payment_status'].patchValue(data.designation_name);
  }

  getallServiceList(){
   this._teamLeaderService.getServiceList().subscribe((res:any)=>{
    this.allserviceList=(res.data);
    console.log('servicelist' ,res.data)
   })
  }
  getallWorkDetailsList(){
    this._teamLeaderService.getWorkdetails().subscribe((res:any)=>{
     this.allWorkDetailsList=(res.data);
      console.log ('hello',this.allWorkDetailsList)
    })
   }

   getAllRolList(){
    this._teamLeaderService.getUserRoleList().subscribe((res:any)=>{
     this.allAssignedToList=(res.data);
     console.log('hii',this.allAssignedToList)
    })
   }
 getAllDocumentTypeList(){
  this._teamLeaderService.getDocumentTypeList().subscribe((res:any)=>{
    this.allDocumentTypeList=(res.data);
    console.log(this.allDocumentTypeList)

  })
}
}
