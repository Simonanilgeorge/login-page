import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../providers/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }
  logOut() {
    this.loginService.saveUserName(null);

  }
}
