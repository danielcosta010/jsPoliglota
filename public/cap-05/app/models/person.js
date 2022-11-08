export class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
        // console.time('getFullName');
        // console.timeEnd('getFullName')
        // return fullName;
    }

    speak(text) {
        return`${this.name} esta falando... ${text}`;
        // console.time('speak');
        // console.timeEnd('speak');
        // return phrase;
    }
}