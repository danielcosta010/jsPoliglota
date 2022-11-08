import { Person } from './models/person.js';

const method = Person.prototype.speak;
Person.prototype.speak = function(...args) {
  console.log(`Argumentos do método: ${args}`);
  console.time('speak');
  const result = method.bind(this)(...args);
  console.timeEnd('speak');
  return result;
}

const person = new Person('Daniel', 'Costa');
person.getFullName();
person.speak('tudo bem?')