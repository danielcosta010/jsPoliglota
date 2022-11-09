import { Person } from './models/person.js';
import { logExecutionTime } from "./decorators/decorators.js";

decorate(
  Person,
  {
    speak: logExecutionTime,
    getFullName: logExecutionTime
  }
);

const person = new Person('Daniel', 'Costa');
person.getFullName();
person.speak('tudo bem?')