import { Component, OnInit } from '@angular/core';
import {UserDto } from '../../dto/user.dto';
import { FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  // public User:UserDto=new UserDto();
userForm=this.fb.group({

  username:['',Validators.required],
  email:['',Validators.required],
  password:['',Validators.required]

});
  


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  get username(){
    return this.userForm.get('username');
  }

  get email(){
    return this.userForm.get('email');
  }
  get password(){
    return this.userForm.get('password');
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.userForm.value);
  }

}

