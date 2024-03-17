interface PersonInterface {
    name : string,
    age : number,
    greet() : string
}
class Person implements PersonInterface {
    name : string;
    age :number;
    constructor(name : string,age : number) {
       this.name = name;
       this.age = age;
    }
    greet(): string {
        return "hey there"
    }
}
new Person("abhishek",20) 