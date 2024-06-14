import { DeleteButton } from "./Delete"

export const Persons = ({ persons , filter , deletePerson }) => {
    return (
      <div>
        {persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())).map((person , index)=>(
          <div key={person.name}>{person.name} {person.number} 
              <DeleteButton btnText="delete" onclick={()=> deletePerson(persom)}/>
        </div>
        ))}
      </div>
    )
  }
  