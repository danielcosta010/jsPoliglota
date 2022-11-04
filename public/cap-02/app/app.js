import { Person } from "./models/person.js";
import { Animal } from "./models/animal.js";
import { SessionFactory } from "./infra/sesstion-factory.js";

(async () => {
  const session = await new SessionFactory ({
    dbName: 'dm-db',
    dbVersion: 1, 
    mappers: [
      {
        clazz: Person,
        converter: data => new Person(data.name, data.surname)
      },
      {
        clazz: Animal,
        converter: data => new Animal(data.name)
      }
    ]
  })

  .openSession();

      const person = new Person('Daniel', 'Costa');
      const animal = new Animal('Coelho');

      await session.save(person);
      await session.save(animal);

      const people = await session.list(Person);
      people.forEach(person => console.log(person.getFullName()));
      const animals = await session.list(Animal);
      console.log(animals);

})().catch(e => console.log(e));