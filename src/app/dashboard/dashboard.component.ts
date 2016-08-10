import { Component, OnInit } from '@angular/core';
import { DoorService } from '../doors/door.service';
import { AuthService } from '../auth/auth.service';
import { Door } from '../doors/door';

@Component({
  moduleId: module.id,
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  doorInProgress: Door;
  doors: Door[];

  constructor(private doorService: DoorService, private authService: AuthService) {}

  ngOnInit() {
    this.doorService.getDoors().then(doors => {
      this.doors = doors;
    });
  }

  openDoor(door: Door): void {
    this.toogleDoor(door);
  }

  closeDoor(door: Door): void {
    this.toogleDoor(door);
  }

  toogleDoor(door: Door): void {
    door.isOpen = !door.isOpen;
    this.doorInProgress = door;
    setTimeout(() => {
      this.doorService.saveDoor(door).then(() => {
        this.doorInProgress = undefined;
      });
    }, 1000);
  }

  private canUseDoor(door: Door): boolean {
    return this.authService.currentUser && door.userIds.includes(this.authService.currentUser.id);
  }

}
