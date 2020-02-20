import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public toastController: ToastController
  ) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    //initiliaze form
    this.userForm = this.formBuilder.group({
      username:['', Validators.required],
      password:['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    });
  }

  login () {
    if (this.userForm.valid) {
      let usernameIn = this.userForm.controls['username'].value;
      let passwordIn = this.userForm.controls['password'].value;

      console.log(this.userForm.valid);

      var dummyUser = "ashahir";
      var dummyPass = "123456";

      console.log(usernameIn + " " + passwordIn);

      if((usernameIn == dummyUser) && (passwordIn == dummyPass)) {
        this.router.navigateByUrl("/home");
      } else {
        this.presentToast("Username or password not match!");
      }
    } else {
      this.presentToast("Please fill username and password!");
    }
  }

  register() {
    this.router.navigateByUrl("/register");
  }

  landing() {
    this.router.navigateByUrl("/landing");
  }

  resetForm() {
    this.userForm.reset();
    this.userForm.patchValue({
      username:'',
      password:''
    });
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: 'warning'
    });
    toast.present();
  }
}
