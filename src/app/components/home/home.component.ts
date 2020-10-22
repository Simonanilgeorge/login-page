import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../providers/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public userName: string;

  constructor(private route: ActivatedRoute, private loginService: LoginService) { }

  ngOnInit(): void {
    this.displayCurrentUser();
  }
  displayCurrentUser() {

      this.userName = this.loginService.getCurrentUser();

  }
}
