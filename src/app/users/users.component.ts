import { Component, OnInit } from '@angular/core';
import { User } from '../users/user';
import { UserService } from '../users/user.service';

@Component({
  moduleId: module.id,
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
})
export class UsersComponent implements OnInit {

  users: User[];
  newUser: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  addNewUser() {
    this.newUser = User.create();
  }

  cancelNewUser() {
    this.newUser = undefined;
  }

  saveNewUser() {
    this.userService.saveUser(this.newUser).then(() => {
      this.newUser = undefined;
      this.loadUsers();
    });
  }

  removeUser(user: User) {
    this.userService.removeUser(user).then(() => {
      this.loadUsers();
    });
  }

  loadUsers() {
    this.userService.getUsers().then(users => {
      this.users = users;
    });
  }

}
