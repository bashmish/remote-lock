import { Injectable } from '@angular/core';
import { Door, IRawDoor } from './door';
import { DbService } from '../db.service';

@Injectable()
export class DoorService {

  constructor(private dbService: DbService) {}

  getDoors(): Promise<Door[]> {
    return this.dbService.getCollection('door').then((rawDoors: IRawDoor[]) => {
      return rawDoors.map(rawDoor => new Door(rawDoor));
    });
  }

  getDoor(id): Promise<Door> {
    return this.dbService.get(id).then((rawDoor: IRawDoor) => {
      return new Door(rawDoor);
    });
  }

  saveDoor(door: Door): Promise<void> {
    return this.dbService.save(door);
  }

  removeDoor(door: Door): Promise<void> {
    return this.dbService.remove(door);
  }

}
