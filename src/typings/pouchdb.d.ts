declare module 'pouchdb' {
  const plugin: PouchDB.Static;
  export = plugin;
}

interface IRawObject extends PouchDB.Core.IdMeta {
  type: string;
}

declare namespace PouchDB {
  namespace Core {
    interface Database<Content extends Core.Encodable> {

      remove(doc: Core.NewDocument<Content>,
             options: Core.PostOptions | void,
             callback: Core.Callback<Core.Error, Core.Response>): void;

      remove(id: Core.DocumentId | void,
             revision: Core.RevisionId | void,
             options: Core.PutOptions | void,
             callback: Core.Callback<Core.Error, Core.Response>): void;

    }
  }
}
