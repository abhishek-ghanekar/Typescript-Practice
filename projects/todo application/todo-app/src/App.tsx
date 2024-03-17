import { useState } from 'react'


function App() {
  // const [count, setCount] = useState(0)
  function calculateSum(a:number,b:number) :number {
    return a + b;
  }
  // use interface
  // use types
  // use enums
  interface person {
    name : string,
    age :number,
    gender : gender
  }
  interface alien extends person {
    alienId : number
  }
  function greet(person : person) : string {
    return person.name + "this is an example file" + person.gender;
  }
  function greetAlien(alien : alien) : string {
    return alien.name + "lol" + alien.gender;
  }
  enum gender {
    male = "male",
    female = "female"
  }

 
  return (
    <>
    <h1>{calculateSum(2,3)}</h1>
    <h1>{greet({
      name : "abhi",
      age : 20,
      gender : gender.male
    })}</h1>
    <h1>{greetAlien({
         name : "dholu",
         age : 12,
         gender : gender.female,
         alienId : 987
      })}</h1>
    </>

  )
}

export default App
