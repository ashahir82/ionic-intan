import { User } from './../model/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from './../services/user.service';

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
    private toastController: ToastController,
    private userSvr: UserService
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

      let newUser = new User();
      newUser.setName(nameIn);
      newUser.setEmail(emailIn);
      newUser.setPassword(passwordIn);

      this.userSvr.register(newUser).subscribe(
        berjaya=>{
          console.log(berjaya);
          this.router.navigateByUrl("/home");
        },
        gagal=>{
          this.presentToast("Unable to register user!");
        }
      )
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
