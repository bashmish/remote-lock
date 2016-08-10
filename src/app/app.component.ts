import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';
import { AuthService } from './auth/auth.service';
import { UserService } from './users/user.service';
import { DoorService } from './doors/door.service';
import { User } from './users/user';

@Component({
  moduleId: module.id,
  selector: 'rl-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [DbService, AuthService, UserService, DoorService],
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.mockCurrentUser();
  }

  get currentUser(): User {
    return this.authService.currentUser;
  }

}
