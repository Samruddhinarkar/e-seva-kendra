import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  latitude!: number;
  longitude!: number;
  auth2: any;
  ngZone: any;
  passwordVisible: boolean = false;
  constructor(private fb: FormBuilder, 
    private router: Router, 
    private _authService:AuthService,
    private _toastrService:ToastrService
  ) { }
  
  ngOnInit(): void { 
    this.createForm();
  }
  createForm() {
    this.getLocation();
    this.loginForm = this.fb.group({
      email_id: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })

  }
  get control() {
    return this.loginForm.controls;
  }

  // handleGoogleSignIn(response: any) {

  //   // This next is for decoding the idToken to an object if you want to see the details.
  //   let base64Url = response.credential.split('.')[1];
  //   let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  //   let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
  //     return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  //   }).join(''));
  //   console.log(JSON.parse(jsonPayload));
  //   let userData=JSON.parse(jsonPayload);
  //   console.log(userData.email);
  //   if (userData.email) {
  //     let email={
  //       "email_id":userData.email
  //     }
  //     this.surveyService.loginWithGoogle(email).subscribe({
  //       next: (res: any) => {
  //         localStorage.setItem("user_id",(res.data.userData.user_id));
  //         localStorage.setItem('accessToken', res.data.token);
  //         localStorage.setItem('expiresin', res.data.expiresin);
  //         this._dataSharedService.sendUserData(res.data.userData);
  //         localStorage.setItem("userData", JSON.stringify(res.data.userData));
  //         if (res.data.category==1) {
  //         this.router.navigate(['/admin-dashboard']);
  //         } else {
  //         this.router.navigate(['/user'])
  //         }
  //         this.toastrService.clear();
  //         this.toastrService.success(res.message);
  //       },
  //       error: (err: any) => {
  //         if (err.error.status == 401 || err.error.status == 422) {
  //         // generate 6 digit  random number 
  //         let randomNumber=Math.floor(100000 + Math.random() * 900000)
  //         let Data={
  //           "email": userData.email,
  //           "setPassword":randomNumber,
  //           "full_name":userData.name,
  //           "user_name":userData.given_name
  //       }
  //       const userDataString = JSON.stringify(Data);
  //       localStorage.setItem('userData', userDataString);
  //       this.router.navigate(['/post-sign-up']);
  //         } else {
  //           this.toastrService.clear();
  //           this.toastrService.error('Internal Server Error');
  //         }
  //       }
  //     })
  //   } else {
      
  //   }
    
  // }
  
  // ngAfterViewInit(): void {
  //   const self = this;
  
  //   google.accounts.id.initialize({
  //     client_id: "209541354842-gtq7tnt9hrcms0viudkdknoncbtpnt00.apps.googleusercontent.com",
  //     callback: function(response: any) {
  //       self.handleGoogleSignIn(response);
        
  //     }
  //   });
  
  //   google.accounts.id.renderButton(
  //     document.getElementById("buttonDiv"),
  //     {
  //       size: "large",
  //       type: "standard",
  //       theme: "filled",
  //       text: "Continue with Google"
  //     }
  //   );
    
  // }
 
  onSubmit() {
    if (this.loginForm.valid) {
      this._authService.login(this.loginForm.value).subscribe({
        next: (res: any) => {
          console.log('res',res);
    
          localStorage.setItem('accessToken', res.token);
          console.log('token', res.token)
          localStorage.setItem('designation_id', res.data.designation_id);
          console.log("hii",res.data.designation_id);
          if (res.data.designation_id==1) {
          this.router.navigate(['/admin']);
          } else if(res.data.designation_id==2){
            this.router.navigate(['/team-leader']);
          }
          else if(res.data.designation_id==3){
            this.router.navigate(['/operator']);
          }
          else if(res.data.designation_id==4){
            this.router.navigate(['/employee']);
          }  
          else {
          this.router.navigate(['/login'])
          }
          this._toastrService.clear();
          this._toastrService.success(res.message);
        },
        error: (err: any) => {
          console.log('res',err);

          if (err.error.status == 401 || err.error.status == 422) {
            this._toastrService.clear();
            this._toastrService.warning(err.error.message);
          } else {
            this._toastrService.clear();
            this._toastrService.error('Internal Server Error');
          }
        }
      })
    } else {
      this.loginForm.markAllAsTouched();
      this._toastrService.warning('fill required fields');
    }
  }
  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
      
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  // Method to toggle password visibility
togglePasswordVisibility() {
  this.passwordVisible = !this.passwordVisible;
}
}
