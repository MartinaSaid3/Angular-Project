import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface Users{
  id:Number,
  fullName: string,
  role: string,
  gender: string,
  phone: string,
  address: string,
  ssn: string,
  username: string,
  password: string,
  confirmPassword:string,
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}
  UserRole()
  {
    let Url="http://localhost:5291/api/Admin/UserRole";
    
    return this.http.get(Url);
  }
  
  updateUser(inputData:object,userId :Number)
  {
    return this.http.put("",inputData);
  }
  destroyUser(userId :Number)
  {
    let url = "http://localhost:5291/api/Admin/" + userId;
    return this.http.delete(url);
  }
}
