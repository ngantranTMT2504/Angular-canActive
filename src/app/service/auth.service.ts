import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private http : HttpClient) { }
  apiURL = 'http://localhost:3000/user';

  getAll(){
    return this.http.get(this.apiURL);
  }
  getByCode(code : any){
    return this.http.get(this.apiURL+"/"+code)
  }
  proceedRegister(inputdata : any){
    return this.http.post(this.apiURL, inputdata)
  }
  updateUser(code : any ,inputdata: any){
    return this.http.put(this.apiURL+'/'+ code,inputdata)
  }
  isLoggedIn(){
    return sessionStorage.getItem('username')!== null;
  }
}
