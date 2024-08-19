import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  baseUrl = 'http://localhost:3000/';
  header: any

  constructor(private http:HttpClient) { 
    let token = localStorage.getItem('accessToken')
    this.header = new HttpHeaders().set('Authorization', `Bearer ${token}`)
  }

  
//AAdhar-list
getAadharList(page: any, perPage: any): Observable<any> {
  let params = {
    page: page,
    perPage: perPage
  };
  if (page == "" || perPage == "") {
      delete params.page,
      delete params.page
  }
  return this.http.get(this.baseUrl + 'api/adha', {
    headers: this.header,
    params: params

  });
}
//create Aadhar
createAadhar(data: any): Observable<any> {
  return this.http.post(this.baseUrl + 'api/adha', data, {
    headers: this.header,

  });
}

//update Aadhar
updateAadhar(id: any, data: any): Observable<any> {
  return this.http.put(this.baseUrl + 'api/adha/' + id, data, {
    headers: this.header

  });
}


 //Document-type-list
 getDocumentTypeList(): Observable<any> { 
  return this.http.get(this.baseUrl + 'api/document/wma', {
    headers: this.header,


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
  //status-list
  getStatusList(): Observable<any> {
    return this.http.get(this.baseUrl + 'api/status/', {
    });
  }

}
