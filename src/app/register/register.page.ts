import { User } from './../model/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      sex:'m'
    });
  }

  register () {
    if (this.userForm.valid) {
      let nameIn = this.userForm.controls['name'].value;
      let emailIn = this.userForm.controls['email'].value;
      let passwordIn = this.userForm.controls['password'].value;
      let sexIn = this.userForm.controls['sex'].value;

      let user = new User();
      user.setName(nameIn);
      user.setEmail(emailIn);
      user.setPassword(passwordIn);
      user.setSex(sexIn);

      console.log(user);
    } else {
      this.presentToast("Please fill username, email and password!");
    }
  }

  login() {
    this.router.navigateByUrl("/login");
  }

  landing() {
    this.router.navigateByUrl("/landing");
  }

  resetForm() {
    this.userForm.reset();
    this.userForm.patchValue({
      name:'',
      email:'',
      password:'',
      sex:'m'
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
