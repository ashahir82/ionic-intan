import { User } from './../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  userList : User[] = Array<User>();

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      let userBaru = new User();
      userBaru.setName("User Name " + i);
      userBaru.setEmail("user@email.co"+i);
      this.userList.push(userBaru);
    }
    console.log(this.userList);
  }

}
