import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamLeaderService {
  baseUrl = 'http://localhost:3000/';
  header: any

  constructor(private http:HttpClient) { 
    let token = localStorage.getItem('accessToken')
    this.header = new HttpHeaders().set('Authorization', `Bearer ${token}`)
  }

  
//Task-list
getTask(page: any, perPage: any): Observable<any> {
  let params = {
    page: page,
    perPage: perPage
  };
  if (page == "" || perPage == "") {
      delete params.page,
      delete params.page
  }
  return this.http.get(this.baseUrl + 'api/taskHeader', {
    headers: this.header,
    params: params

  });
}


//create Task
createTask(data: any): Observable<any> {
  return this.http.post(this.baseUrl + 'api/taskHeader', data, {
    headers: this.header,

  });
}
//update Task
updateTask(id: any, data: any): Observable<any> {
  return this.http.put(this.baseUrl + 'api/taskHeader' + id, data, {
    headers: this.header

  });
}

//Services-list
getServiceList(): Observable<any> {
 
  return this.http.get(this.baseUrl + 'api/service/wma', {
    headers: this.header,
  

  });
}
//work-details
getWorkdetails(): Observable<any> {
  return this.http.get(this.baseUrl + 'api/workDetails/wma', {
    headers: this.header,

  });
}

 //Document-type-list
 getDocumentTypeList(): Observable<any> { 
  return this.http.get(this.baseUrl + 'api/document/wma', {
    headers: this.header,


  });
}

//Assign-Role
getAssignRoleList(): Observable<any> {
  return this.http.get(this.baseUrl + 'api/userRole', {
    headers: this.header,
    
  });
}
 //user-role-list
 getUserRoleList(): Observable<any> {
  return this.http.get(this.baseUrl + 'api/role', {
    headers: this.header

  });
}





}
