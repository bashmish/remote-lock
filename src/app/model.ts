import * as _ from 'lodash';

export class Model {

  serializeFields: string[];
  protected data: IRawObject;
  protected cachedData: IRawObject;

  constructor(data: IRawObject, type: string) {
    this.data = data;
    this.data.type = type;
    this.cachedData = _.clone(this.data);
  }

  get type(): string {
    return this.data.type;
  }

  get id(): string {
    return this.data._id;
  }

  get isChanged(): boolean {
    return _(this.serializeFields).map(name => this.data[name] !== this.cachedData[name]).some();
  }

  get rawObject(): IRawObject {
    return this.data;
  }

  setIdAfterCreation(id: string): void {
    this.data._id = id;
  }

}
