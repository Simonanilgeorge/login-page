import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  UserDto} from '../dto/user.dto'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient ) { }

  private url='../../assets/data/data.json';


  getUserInfo():Promise<UserDto[]>{
    console.log(`hello`);
    return this.http.get<UserDto[]>(this.url).toPromise();
  }

}
