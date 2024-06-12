export const Persons = ({ persons , filter }) => {
    return (
      <div>
        {persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())).map((person , index)=>(
          <div key={person.name}>{person.name} {person.number} </div>
        ))}
      </div>
    )
  }
  