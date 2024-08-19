import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OperatorService } from '../../operator.service';
import { ToastrService } from 'ngx-toastr';
import { AadharComponent } from '../aadhar.component';

@Component({
  selector: 'app-add-update-aadhar',
  templateUrl: './add-update-aadhar.component.html',
  styleUrls: ['./add-update-aadhar.component.scss']
})
export class AddUpdateAadharComponent {
  form!:FormGroup;
  allServiceList:Array<any>=[];
  allDocumentTypeList:Array<any>=[];
  user_id:any;
  isEdit=false;
  constructor(
    private fb: FormBuilder,
    private _operatorService:OperatorService,
    private _toastrService: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AadharComponent>
  ){ }
  ngOnInit(): void {
    this.createForm(); 
    this.getAllDocumentList();
    this.getAllServiceList();
    if (this.data?.id != null) {
      this.isEdit = true;
      this.prepopulateData(this.data);
    }
  }
  createForm() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      mobile_number: [null, [Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      enrollment_number: [null, Validators.required],
      enollment_time: [null, Validators.required],
      service_id: ['', Validators.required],
      document_type_id: ['', Validators.required],
      verification_status: ['', Validators.required],
      payment_mode: ['', Validators.required],
      amount: [null, Validators.required],
    })
  }
  get control() {
    return this.form.controls;
  }
  onSubmit() {
    this.isEdit ? this.updateAdhar() : this.createAdhar();
  }
  createAdhar() {
    if (this.form.valid) {
      this._operatorService.createAadhar(this.form.value).subscribe({
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
  updateAdhar() {
    if (this.form.valid) {
      this._operatorService.updateAadhar(this.data.id,this.form.value).subscribe({
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
    this.control['name'].patchValue(data.name);
    this.control['mobile_number'].patchValue(data.mobile_number);
    this.control['enrollment_number'].patchValue(data.enrollment_number);
    this.control['enollment_time'].patchValue(data.enollment_time);
    this.control['service_id'].patchValue(data.service_id);
    this.control['document_type_id'].patchValue(data.document_type_id);
    this.control['verification_status'].patchValue(data.verification_status);
    this.control['payment_mode'].patchValue(data.payment_mode);
    this.control['amount'].patchValue(data.amount);
  }

  getAllServiceList(){
    this._operatorService.getServiceList().subscribe((res:any)=>{
      this.allServiceList=(res.data)
      console.log(this.allServiceList)
    })
  }
  getAllDocumentList(){
    this._operatorService.getDocumentTypeList().subscribe((res:any)=>{
      this.allDocumentTypeList=(res.data)
      console.log('hii',this.allDocumentTypeList)
    })
  }
 
 
}
