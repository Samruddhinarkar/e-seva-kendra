import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../../admin.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AssignRoleComponent } from '../assign-role.component';

@Component({
  selector: 'app-add-update-assign-role',
  templateUrl: './add-update-assign-role.component.html',
  styleUrls: ['./add-update-assign-role.component.scss']
})
export class AddUpdateAssignRoleComponent {
  form!:FormGroup;
  user_id:any;
  isEdit=false;
  allUserList:Array<any>=[];
  allRoleList:Array<any>=[];
    constructor(
    private fb: FormBuilder,
    private _adminService: AdminService,
    private _toastrService: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AssignRoleComponent>
  ){ }
  ngOnInit(): void {
    this.createForm(); 
    this.getAllUserList();
    this. getAllRoleList();
    if (this.data?.user_role_id != null) {
      this.isEdit = true;
      this.prepopulateData(this.data);
    }
  }
  createForm() {
    this.form = this.fb.group({
      user_id: [null, Validators.required],
      role_id:[null,Validators.required]
    })
  }
  get control() {
    return this.form.controls;
  }
  onSubmit() {
    this.isEdit ? this.updateAssignRole() : this.createAssignRole();
  }
  createAssignRole() {
    if (this.form.valid) {
      this._adminService.createAssignRole(this.form.value).subscribe({
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
  updateAssignRole() {
    if (this.form.valid) {
      this._adminService.updateAssignRole(this.data.role_id,this.form.value).subscribe({
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
    console.log(data);
    
    this.control['user_id'].patchValue(data.user_id);
    this.control['role_id'].patchValue(data.role_id);
  }
  getAllUserList(){
    this._adminService.getUsersList().subscribe((res:any)=>{
      this.allUserList=(res.data);
      console.log('list',res.data)
    })
  }

  getAllRoleList(){
    this._adminService.getUserRoleList().subscribe((res:any)=>{
      this.allRoleList=(res.data);
    })
  }


}
