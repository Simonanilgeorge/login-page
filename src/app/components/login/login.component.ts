import { Component, OnInit } from '@angular/core';
import { UserDto } from '../../dto/user.dto';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../providers/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public notValid: boolean = false;
  public singleUser: UserDto;
  public allUsers: UserDto[] = [];
  userForm = this.fb.group({

    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]

  });



  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.getUserInfo();

  }

  getUserInfo() {


    this.loginService.getUserInfo().then(data => {

      this.allUsers = data;
      console.log(this.allUsers);
    })



  }

  get username() {
    return this.userForm.get('username');
  }

  get email() {
    return this.userForm.get('email');
  }
  get password() {
    return this.userForm.get('password');
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.userForm.value);
    console.log(this.username.value);
    console.log(this.allUsers);

    this.singleUser = this.allUsers.find((user) => {
      if (this.username.value === user.username) {
        return true;
      }
      else {
        return false;
      }
    })

    console.log(`single user value is ${JSON.stringify(this.singleUser)}`);

    if (!this.singleUser || (this.singleUser.username !== this.username.value || this.singleUser.password !== this.password.value || this.singleUser.email !== this.email.value)) {
      console.log(`invalid credentials`);
      this.notValid = true;

    }
    else {
      this.notValid = false;
    }

  }

}

