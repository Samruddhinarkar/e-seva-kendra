import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../../admin.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WorkDetailsComponent } from '../work-details.component';

@Component({
  selector: 'app-add-update-work-details',
  templateUrl: './add-update-work-details.component.html',
  styleUrls: ['./add-update-work-details.component.scss']
})
export class AddUpdateWorkDetailsComponent {
  form!:FormGroup;
  user_id:any;
  isEdit=false;
  constructor(
    private fb: FormBuilder,
    private _adminService: AdminService,
    private _toastrService: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<WorkDetailsComponent>
  ){ }
  ngOnInit(): void {
    this.createForm(); 
    if (this.data?.work_details_id != null) {
      this.isEdit = true;
      this.prepopulateData(this.data);
    }
  }
  createForm() {
    this.form = this.fb.group({
      work_details: [null, Validators.required],
    })
  }
  get control() {
    return this.form.controls;
  }
  onSubmit() {
    this.isEdit ? this.updatetWorkDetails() : this.createWorkDetails();
  }
  createWorkDetails() {
    if (this.form.valid) {
      this._adminService.createWorkDetails(this.form.value).subscribe({
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
  updatetWorkDetails() {
    if (this.form.valid) {
      this._adminService.updateWorkDetails(this.data.work_details_id,this.form.value).subscribe({
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
    this.control['work_details'].patchValue(data.work_details);
  }


}
