import { Injectable } from '@angular/core';
import { User, IRawUser } from './user';
import { DbService } from '../db.service';

@Injectable()
export class UserService {

  constructor(private dbService: DbService) {}

  getUsers(): Promise<User[]> {
    return this.dbService.getCollection('user').then((rawUsers: IRawUser[]) => {
      return rawUsers.map(rawUser => new User(rawUser));
    });
  }

  getUser(id): Promise<User> {
    return this.dbService.get(id).then((rawUser: IRawUser) => {
      return new User(rawUser);
    });
  }

  saveUser(user: User): Promise<void> {
    return this.dbService.save(user);
  }

  removeUser(user: User): Promise<void> {
    return this.dbService.remove(user);
  }

}
