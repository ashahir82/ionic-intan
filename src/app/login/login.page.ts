import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      username:'',
      password:''
    });
  }

  login () {
    var usernameIn = this.userForm.controls['username'].value;
    var passwordIn = this.userForm.controls['password'].value;

    if((usernameIn == '') || (passwordIn == '')) {
      this.presentToast("Please fill username and password!");
    } else {
      var dummyUser = "ashahir";
      var dummyPass = "123456";

      console.log(usernameIn + " " + passwordIn);

      if((usernameIn == dummyUser) && (passwordIn == dummyPass)) {
        this.router.navigateByUrl("/home");
      } else {
        this.presentToast("Username or password not match!");
      }
    }
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
