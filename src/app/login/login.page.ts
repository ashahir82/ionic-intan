import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    //initiliaze form
    this.userForm = this.formBuilder.group({
      username:'',
      password:''
    });
  }

  login () {
    var usernameIn = this.userForm.controls['username'].value;
    var passwordIn = this.userForm.controls['password'].value;

    console.log(usernameIn + " " + passwordIn);
  }

}
