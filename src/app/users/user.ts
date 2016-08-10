import { Model } from '../model';

export interface IRawUser extends IRawObject {
  name: string;
  token: string;
}

const TYPE = 'user';

export class User extends Model {

  protected data: IRawUser;

  constructor(data: IRawUser) {
    super(data, TYPE);
  }

  static create(data = {}): User {
    const required = { _id: undefined, type: TYPE, name: '', token: '' };
    return new User(Object.assign(required, data));
  }

  get serializeFields(): string[] {
    return ['name', 'token'];
  }

  get name(): string {
    return this.data.name;
  }

  set name(name: string) {
    this.data.name = name;
  }

  get token(): string {
    return this.data.token;
  }

  set token(token: string) {
    this.data.token = token;
  }

}
