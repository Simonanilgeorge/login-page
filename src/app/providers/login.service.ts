import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDto } from '../dto/user.dto'
@Injectable({
  providedIn: 'root'
})
export class LoginService {



  constructor(private http: HttpClient) { }

  private url = '../../assets/data/data.json';
  private currentUser: string;

  getUserInfo(): Promise<UserDto[]> {
    console.log(`hello`);
    return this.http.get<UserDto[]>(this.url).toPromise();
  }


  saveUserName(userName: string) {
    this.currentUser = userName;

  }

  getCurrentUser() {
    console.log(this.currentUser);
    return this.currentUser;
  }
}
