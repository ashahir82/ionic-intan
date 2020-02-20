import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastController: ToastController
  ) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    //initiliaze form
    this.userForm = this.formBuilder.group({
      name:'',
      email:'',
      password:''
    });
  }

  register () {
    var nameIn = this.userForm.controls['name'].value;
    var emailIn = this.userForm.controls['email'].value;
    var passwordIn = this.userForm.controls['password'].value;

    if((nameIn == '') || (emailIn == '') || (passwordIn == '')) {
      this.presentToast("Please fill username, email and password!");
    } else {
      var dummyUser = "ashahir";
      var dummyPass = "123456";

      console.log(nameIn + " " + passwordIn);

      if((nameIn == dummyUser) && (passwordIn == dummyPass)) {
        this.router.navigateByUrl("/home");
      } else {
        this.presentToast("Username or password not match!");
      }
    }
  }

  login() {
    this.router.navigateByUrl("/login");
  }

  landing() {
    this.router.navigateByUrl("/landing");
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
