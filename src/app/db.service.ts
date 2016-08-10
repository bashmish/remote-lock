import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';
import { Model } from './model';

@Injectable()
export class DbService {
  db: any;

  constructor() {
    this.db = new PouchDB('remote-lock');
  }

  getCollection(type?: string): Promise<IRawObject[]> {
    return this.db.allDocs({ include_docs: true }).then(docs => {
      const rawObjects = docs.rows.map(value => value.doc) as IRawObject[];
      return type ? rawObjects.filter(row => row.type === type) : rawObjects;
    });
  }

  get(id): Promise<IRawObject> {
    return this.db.get(id);
  }

  save(object: Model): Promise<void> {
    return object.id ? this.put(object) : this.post(object);
  }

  remove(object: Model): Promise<void> {
    return this.db.remove(object.rawObject);
  }

  private post(object: Model): Promise<void> {
    return this.db.post(object.rawObject).then(result => {
      object.setIdAfterCreation(result.id);
    });
  }

  private put(object: Model): Promise<void> {
    return this.db.get(object.id).then(rawObject => {
      object.serializeFields.forEach(fieldName => {
        rawObject[fieldName] = object[fieldName];
      });
      return this.db.put(rawObject).then(() => {});
    });
  }

}
