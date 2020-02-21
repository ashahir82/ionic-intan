import { User } from './../model/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  userList : User[] = Array<User>();

  constructor(
    private userSvr: UserService,
  ) { }

  ngOnInit() {
    this.userSvr.getUserListFromApi().subscribe(
      berjaya=> {
       this.userList = berjaya
      },
      gagal=> {
        console.log("gagal")
      }
    )
  }

}
