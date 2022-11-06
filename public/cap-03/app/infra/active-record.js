let connection = null;
const stores = new Map();

export class ActiveRecord {
  constructor (config) {
    this.dbName = config.dbName;
    this.dbVersion = config.dbVersion;
    config.mappers.forEach(mapper => {
      stores.set (
        mapper.clazz.name,
        mapper.converter
      );
      mapper.clazz.prototype.save = save;
    });
  }
  async init() {
    connection = await createConnection(
      this.dbName, 
      this.dbVersion, 
      stores
      
    );
  }
}

function save() {
  return new Promise((resolve, reject) => {
    const object = this;
    const storeName = object.constructor.name;
    const request = connection
      .transaction([storeName], 'readwrite')
      .objectStore(storeName)
      .add(object);
      request.onsuccess = e => resolve();
      request.onerror = e => {
        console.log(e.target.result);
        reject( `Não foi possível perscistir o objeto na store ${storeName}`);
      }
  })
}

function createConnection(dbName, dbVersion, stores) {

  return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, dbVersion);

      request.onupgradeneeded = e => {
          const transactionalConnection = e.target.result;
          for (let [key, value] of stores) {
              const store = key;
          
              if (transactionalConnection.objectStoreNames.contains(store)) {
                  transactionalConnection.deleteObjectStore(store);
              }   
              transactionalConnection.createObjectStore(store, { autoIncrement: true });
          }     
      };

      request.onsuccess = e => {
          const connection = e.target.result;
          resolve(connection);
      }

      request.onerror = e => {
          console.log(e.target.error);
          reject(`Não foi possível obter a conexão com o banco ${dbVersion}`);
      }
  });
}