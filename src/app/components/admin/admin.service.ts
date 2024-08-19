import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = 'http://localhost:3000/';
  header: any

  constructor(private http: HttpClient) {
    let token = localStorage.getItem('accessToken')
    this.header = new HttpHeaders().set('Authorization', `Bearer ${token}`)
  }

  //designation-list
  getDesignationList(page: any, perPage: any): Observable<any> {
    let params = {
      page: page,
      perPage: perPage
    };
    if (page === '' || perPage === '') {
      delete params.page;
      delete params.perPage;
    }

    return this.http.get(this.baseUrl + 'api/designation/', {
      headers: this.header,
      params: params

    });
  }
  //enableDisable designation
  designationEnableDisable(id: any, status: any): Observable<any> {
    let params = {
      status: status
    }
    return this.http.patch(this.baseUrl + 'api/designation/' + id, {}, {
      headers: this.header,
      params: params
    });
  }
  //create designation
  createDesignation(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'api/designation/', data, {
      headers: this.header,

    });
  }
  //update designation
  updateDesignation(id: any, data: any): Observable<any> {
    return this.http.put(this.baseUrl + 'api/designation/' + id, data, {
      headers: this.header

    });

  }

  //priorities-list
  getPrioritiesList(page: any, perPage: any): Observable<any> {
    let params = {
      page: page,
      perPage: perPage
    };
    if (page === '' || perPage === '') {
      delete params.page;
      delete params.perPage;
    }
    return this.http.get(this.baseUrl + 'api/priorities/', {
      headers: this.header,
      params: params


    });
  }
  //enableDisable priorities
  prioritiesEnableDisable(id: any, status: any): Observable<any> {
    let params = {
      status: status
    }
    return this.http.patch(this.baseUrl + 'api/api/priorities/' + id, {}, {
      headers: this.header,
      params: params
    });
  }
  //create priorities
  createPriorities(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'api/priorities', data, {
      headers: this.header,

    });
  }
  //update priorities
  updatePriorities(id: any, data: any): Observable<any> {
    return this.http.put(this.baseUrl + 'api/priorities/' + id, data, {
      headers: this.header

    });

  }

  //status-list
  getStatusList(page: any, perPage: any): Observable<any> {
    let params = {
      page: page,
      perPage: perPage
    };
    if (page == "" || perPage == "") {
      delete params.page,
        delete params.page
    }
    return this.http.get(this.baseUrl + 'api/status/', {
      headers: this.header,
      params: params

    });
  }

  //enableDisable status
  statusEnableDisable(id: any, status: any): Observable<any> {
    let params = {
      status: status
    }
    return this.http.patch(this.baseUrl + 'api/status/' + id, {}, {
      headers: this.header,
      params: params
    });
  }
  //create status
  createStatus(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'api/status', data, {
      headers: this.header,

    });
  }
  //update status
  updateStatus(id: any, data: any): Observable<any> {
    return this.http.put(this.baseUrl + 'api/status/' + id, data, {
      headers: this.header

    });

  }

  //user-role-list
  getUserRoleList(): Observable<any> {
    return this.http.get(this.baseUrl + 'api/role', {
      headers: this.header

    });
  }

  //enableDisable user-role
  userRoleEnableDisable(id: any, status: any): Observable<any> {
    let params = {
      status: status
    }
    return this.http.patch(this.baseUrl + 'api/role/' + id, {}, {
      headers: this.header,
      params: params
    });
  }
  //create user-role
  createUserRole(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'api/role', data, {
      headers: this.header,

    });
  }
  //update user-role
  updateUserRole(id: any, data: any): Observable<any> {
    return this.http.put(this.baseUrl + 'api/role/' + id, data, {
      headers: this.header

    });

  }
  //users-list
  getUsersList(): Observable<any> {
    return this.http.get(this.baseUrl + 'api/user/', {
      headers: this.header

    });
  }

  //enableDisable users
  usersEnableDisable(id: any, status: any): Observable<any> {
    let params = {
      status: status
    }
    return this.http.patch(this.baseUrl + 'api/user/' + id, {}, {
      headers: this.header,
      params: params
    });
  }
  //create users
  createUsers(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'api/user', data, {
      headers: this.header,

    });
  }
  //update users
  updateUsers(id: any, data: any): Observable<any> {
    return this.http.put(this.baseUrl + 'api/user/' + id, data, {
      headers: this.header

    });

  }

  //Services-list
  getServiceList(page: any, perPage: any): Observable<any> {
    let params = {
      page: page,
      perPage: perPage
    };
    if (page == "" || perPage == "") {
      delete params.page,
        delete params.page
    }
    return this.http.get(this.baseUrl + 'api/service/', {
      headers: this.header,
      params: params

    });
  }
  //enableDisable service
  ServiceEnableDisable(id: any, status: any): Observable<any> {
    let params = {
      status: status
    }
    return this.http.patch(this.baseUrl + 'api/service/' + id, {}, {
      headers: this.header,
      params: params
    });
  }


  //create Services
  createService(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'api/service', data, {
      headers: this.header,

    });
  }
  //update Services
  updateService(id: any, data: any): Observable<any> {
    return this.http.put(this.baseUrl + 'api/service/' + id, data, {
      headers: this.header

    });

  }

  //Document-type-list
  getDocumentTypeList(page: any, perPage: any): Observable<any> {
    let params = {
      page: page,
      perPage: perPage
    };
    if (page == "" || perPage == "") {
      delete params.page,
        delete params.page
    }
    return this.http.get(this.baseUrl + 'api/document', {
      headers: this.header,
      params: params

    });
  }
  //enableDisable Document-type
  DocumentTypeEnableDisable(id: any, status: any): Observable<any> {
    let params = {
      status: status
    }
    return this.http.patch(this.baseUrl + 'api/document/' + id, {}, {
      headers: this.header,
      params: params
    });
  }


  //create Document-type
  createDocumentType(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'api/document', data, {
      headers: this.header,

    });
  }
  //update Document-type
  updateDocumentType(id: any, data: any): Observable<any> {
    return this.http.put(this.baseUrl + 'api/document/' + id, data, {
      headers: this.header

    });

  }

  //assignRole -list
  getAssignRoleList(page: any, perPage: any): Observable<any> {
    let params = {
      page: page,
      perPage: perPage
    };
    if (page == "" || perPage == "") {
      delete params.page,
        delete params.page
    }
    return this.http.get(this.baseUrl + 'api/userRole', {
      headers: this.header,
      params: params

    });
  }

  //create Assign-Role
  createAssignRole(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'api/userRole', data, {
      headers: this.header,

    });
  }
  //update Assign-Role
  updateAssignRole(id: any, data: any): Observable<any> {
    return this.http.put(this.baseUrl + 'api/userRole/' + id, data, {
      headers: this.header

    });
  }
  //work-details-list
  getWorkdetails(page: any, perPage: any): Observable<any> {
    let params = {
      page: page,
      perPage: perPage
    };
    if (page == "" || perPage == "") {
      delete params.page,
        delete params.page
    }
    return this.http.get(this.baseUrl + 'api/workDetails/', {
      headers: this.header,
      params: params

    });
  }

  //enableDisable work-details
  WorkDetailsEnableDisable(id: any, status: any): Observable<any> {
    let params = {
      status: status
    }
    return this.http.patch(this.baseUrl + 'api/workDetails/' + id, {}, {
      headers: this.header,
      params: params
    });
  }

  //create work-details
  createWorkDetails(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'api/workDetails', data, {
      headers: this.header,

    });
  }
  //update work-details
  updateWorkDetails(id: any, data: any): Observable<any> {
    return this.http.put(this.baseUrl + 'api/workDetails/' + id, data, {
      headers: this.header

    });
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



//all-custmor-list
getByIAllCustomerlist(id:any): Observable<any>{
return this.http.get(this.baseUrl +'api/taskHeader/'+id,{
  headers:this.header
});
}

//adhar-list
getAdharList(page: any, perPage: any): Observable<any> {
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

}


