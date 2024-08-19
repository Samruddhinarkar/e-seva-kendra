import { Injectable,  } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
   


  //login and sign in 
  private _isLogin = new Subject<boolean>();
  isLogin$ = this._isLogin.asObservable();
  constructor() { }


  setIsLogin(isLogin: boolean) {
    this._isLogin.next(isLogin)
  }

 
}
