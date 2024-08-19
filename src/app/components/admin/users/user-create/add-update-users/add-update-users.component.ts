import { Component, Inject } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../../admin.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserCreateComponent } from '../user-create.component';

@Component({
  selector: 'app-add-update-users',
  templateUrl: './add-update-users.component.html',
  styleUrls: ['./add-update-users.component.scss']
})
export class AddUpdateUsersComponent {
  form!:FormGroup;
  user_id:any;
  isEdit=false;
  designationlist:Array<any>=[];
  searchDesignationValue = '';
  filteredDesignationArray: Array<any> = [];
  constructor(
    private fb: FormBuilder,
    private _adminService: AdminService,
    private _toastrService: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<UserCreateComponent>
  ){ }
  ngOnInit(): void {
    this.createForm(); 
    this.alldesignationslist()
    if (this.data?.user_id != null) {
      this.isEdit = true;
      this.prepopulateData(this.data);
    }
  }
  createForm() {
    this.form = this.fb.group({
      user_name: [null, Validators.required],
      email_id: [null, [Validators.required,Validators.email]],
      designation_id:[null,Validators.required],
      password:["",]
    })
  }
  get control() {
    return this.form.controls;
  }
  onSubmit() {
    this.isEdit ? this.updateuser() : this.createuser();
    
    if(this.user_id){
      this.form.controls['password'].clearValidators()
    }else{
      this.form.controls['password'].setValidators([Validators.required]);              
    }
    this.form.controls['password'].updateValueAndValidity()
  }
  
  createuser() {
    if (this.form.valid) {
      this._adminService.createUsers(this.form.value).subscribe({
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
  updateuser() {
    if (this.form.valid) {
      this._adminService.updateUsers(this.data.user_id,this.form.value).subscribe({
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
    this.control['user_name'].patchValue(data.user_name);
    this.control['email_id'].patchValue(data.email_id);
    this.control['designation_id'].patchValue(data.designation_id)
    this.control['password'].patchValue(data.password)
  }

 alldesignationslist(){
  this._adminService.getDesignationList("","").subscribe({
    next:(res:any)=>{
      if (res.data.length > 0) {
        this.designationlist=(res.data);
        this.filteredDesignationArray = this.designationlist;       
      }else
      {
        this.designationlist = [];
        this.filteredDesignationArray = this.designationlist;    
      }
    }
  })
}
// filter designation
 filterDesignation() {
  if (this.searchDesignationValue !== "") {
    this.filteredDesignationArray = this.designationlist.filter((obj) =>
      obj.category_name.toLowerCase().includes(this.searchDesignationValue.toLowerCase())
    );
  } else {
    this.filteredDesignationArray = this.designationlist;
  }
}
}
