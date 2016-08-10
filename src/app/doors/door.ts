import { Model } from '../model';

export interface IRawDoor extends IRawObject {
  name: string;
  isOpen: boolean;
  userIds: string[];
}

const TYPE = 'door';

export class Door extends Model {

  protected data: IRawDoor;

  constructor(data: IRawDoor) {
    super(data, TYPE);
  }

  static create(data = {}): Door {
    const required = { _id: undefined, type: TYPE, name: '', isOpen: false, userIds: [] };
    return new Door(Object.assign(required, data));
  }

  get serializeFields(): string[] {
    return ['name', 'isOpen', 'userIds'];
  }

  get name(): string {
    return this.data.name;
  }

  set name(name: string) {
    this.data.name = name;
  }

  get isOpen(): boolean {
    return this.data.isOpen;
  }

  set isOpen(isOpen: boolean) {
    this.data.isOpen = isOpen;
  }

  get userIds(): string[] {
    return this.data.userIds;
  }

  set userIds(userIds: string[]) {
    this.data.userIds = userIds;
  }

}
