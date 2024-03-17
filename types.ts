type personInterface = {
    name : string
    age : number
}
function greet(person : personInterface) : string {
    return "hey " + person.name + "ur " + person.age;
}
console.log(greet({
    name : "abhi",
    age : 20
}))