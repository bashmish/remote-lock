import { Component, OnInit } from '@angular/core';
import { Door } from './door';
import { DoorService } from './door.service';
import { User } from '../users/user';
import { UserService } from '../users/user.service';

@Component({
  moduleId: module.id,
  templateUrl: 'doors.component.html',
  styleUrls: ['doors.component.css'],
})
export class DoorsComponent implements OnInit {

  doors: Door[] = [];
  users: User[] = [];
  newDoor: Door;

  constructor(private doorService: DoorService, private userService: UserService) {}

  ngOnInit() {
    this.loadDoorsAndUsers();
  }

  addNewDoor() {
    this.newDoor = Door.create();
  }

  cancelNewDoor() {
    this.newDoor = undefined;
  }

  isUserChecked(user: User): boolean {
    return this.newDoor.userIds.includes(user.id);
  }

  onUserCheck(user: User): void {
    if (this.isUserChecked(user)) {
      this.newDoor.userIds = this.newDoor.userIds.filter(id => id !== user.id);
    } else {
      this.newDoor.userIds.push(user.id);
    }
  }

  saveNewDoor() {
    this.doorService.saveDoor(this.newDoor).then(() => {
      this.newDoor = undefined;
      this.loadDoorsAndUsers();
    });
  }

  removeDoor(door: Door) {
    this.doorService.removeDoor(door).then(() => {
      this.loadDoorsAndUsers();
    });
  }

  loadDoorsAndUsers() {
    Promise.all([this.doorService.getDoors(), this.userService.getUsers()]).then(([doors, users]) => {
      this.doors = doors;
      this.users = users;
    });
    // this.doorService.getDoors().then(doors => {
    //   this.doors = doors;
    // });
    // this.userService.getUsers().then(users => {
    //   this.users = users;
    // });
  }

}
