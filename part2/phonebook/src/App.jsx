import { useState , useEffect } from 'react'
import { Persons } from './components/Persons'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { createEntry, updatePerson , deletePerson, getPersons } from './service/apiCalls'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filter, setFilter] = useState('')
  const [userMessage, setUserMessage] = useState(null)


  const hook = () =>{
    console.log('effect')
    
      getPersons().then(response =>{
        setPersons(response.data)
      }).catch(error=>{
        console.log(`Getting data ERR: ${error}`)
  })

  useEffect(hook,[userMessage])

  const timer = () =>{
    setTimeout(()=>{
      setUserMessage(null)
    },5000)
  }

  const addName = (event) =>{
    event.preventDefault()
    console.log('added value' , event.target)    
    if(newName.length>0 && newNum.length>0){
      let existingPerson = person.find(person => person.name === newName)
      if(existingPerson){
        if(existingPerson.number !== newNum){
          if(wwindow.confirm(`${existingPerson.name} is already in the database, replace the old no. with a new one??`)){
            updatePerson(existingPerson.id, updatePerson).then(response=>{
              setPersons(prevPersons => prevPersons.map(person => person.id !== existingPerson.id ? person : response.data))
              setUserMessage(`${newName} has been succesfully updated with ne number ${newNum}`)
              timer()

            setNewName('')
            setNewNum('')
            }).catch(error => {
              console.log('updating error: ${error}')
            })
          
          }else{
            alert(`${newName} with the same no. has alredy stored int the database`)
          }
        }else{
          const newPersonObj = {
            name:newName,
            number: newNum,
          }
          createEntry(newPersonObj).then(response =>{
            setPersons(persons.concat(response.data))
            setNewName('')
            setNewNum('')
            setUserMessage(`added ${newName}`)
            timer()
          }).catch(error=>{
            alert(`${error}`)
          })
        }
      }
    }else{
      alert(`Name or number can not be empty`)
    }
}

  const deletePersonHandler = (person) =>{
    if (window.confirm(`Do you really want to delete ${person.name}?`)) {
      deletePerson(person.id)
          .then(() => {
              setPersons(persons.filter(p => p.id !== person.id));
          })
          .catch(error => {
              console.error(`Error deleting person with id ${person.id}:`, error);
              setUserMessage(`Entry has been already removed from phonebook`)
              activateTimer();
              setPersons(persons.filter(p => p.id !== person.id));
          });
    }
  }
  
  const handleNumChange = (event) =>{
    setNewNum(event.target.value)
  }

  const handleNameChange = (event) =>{
    setNewName(event.target.value)
  }

  const handleOnChange = (event) =>{
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
            <Persons persons={persons} filter={filter} deletePerson={deletePersonHandler}/>
    </div>
  )
}
}
export default App