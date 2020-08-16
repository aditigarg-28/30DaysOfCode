import React from 'react'
import Person from './Person'
function NameList()
{
  const persons=[
      {
          id:1,
          name:'aditi',
          age:30
      },
      {
          id:2,
          name:'mini',
          age:20
      }
  ]
  
const personList= persons.map(person=>
    <Person key={person.id} person={person}/>
    )
                
    return(
        <div>{personList}</div>
    )
}
export default NameList