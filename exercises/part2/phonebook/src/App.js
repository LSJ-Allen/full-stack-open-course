import {useState, useEffect} from 'react'
import ListPerons from './components/ListPersons'
import AddPerson from './components/AddPerson'
import Filter from './components/Filter'
import personService from './services/backend'

const App = () => {
    const [persons, setPersons] = useState([])
    
    useEffect(() => {
        personService
            .getAll()
            .then(response => {
                setPersons(response)
            })
    }, [])

    const [filteredPersons, setFilteredPersons] = useState(persons)


    return(
        <div>
            <h2>Phonebook</h2>
            <Filter persons={persons} filteredPersons={filteredPersons} setFilteredPersons={setFilteredPersons}/>
            <AddPerson persons={persons} setPersons={setPersons}/>
            <h2>Numbers</h2>
            <ListPerons persons={persons} setPersons={setPersons}/>
        </div>
    )
}

export default App