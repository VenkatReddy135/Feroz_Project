import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }



  getData(c){
    return this.http.post("http://geniemarket.in/admin/send_otp",c)
  }
}
