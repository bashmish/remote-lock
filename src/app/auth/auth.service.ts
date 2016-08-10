import { Injectable } from '@angular/core';
import { User } from '../users/user';
import { UserService } from '../users/user.service';

@Injectable()
export class AuthService {

  currentUser: User;

  constructor(private userService: UserService) {}

  mockCurrentUser() {
    this.userService.getUsers().then(users => {
      this.currentUser = users[0];
    });
  }

}
