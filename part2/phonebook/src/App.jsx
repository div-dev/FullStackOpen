import { useState } from 'react'
import { Persons } from './components/Persons'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filter, setFilter] = useState('')

  const addName = (event) =>{
    event.preventDefault()
    console.log('added value' , event.target)
    const nameObject = {
      name: newName,
      number: newNum,
    }
    const filterPerson = persons.filter(person =>(person.name === newName))
    const filterNumber = persons.filter(person =>(person.number === newNum))
    
    if(filterPerson.length>0){
      alert(` ${newName} already exists`)
    }else if(filterNumber.length>0){
      alert(` ${newNum} already exists`)
    }
    else{
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNum('')
    }
    
  }
  
  const handleNumChange = (event) =>{
    setNewNum(event.target.value)
  }

  const handleNameChange = (event) =>{
    setNewName(event.target.value)
  }

  const handleOnChange = (event) =>{
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleOnChange={handleOnChange}/>
      <h2>add a new</h2>
      <PersonForm 
          numNum={newNum} 
          newName={newName} 
          addName ={addName} 
          handleNameChange={handleNameChange} 
          handleNumChange={handleNumChange} 
      />
      <h2>Numbers</h2>
            <Persons persons={persons} filter={filter}/>
    </div>
  )
}

export default App