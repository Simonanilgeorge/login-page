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

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.userForm.value);
  }

}

