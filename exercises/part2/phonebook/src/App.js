import {useState, useEffect} from 'react'
import ListPerons from './components/ListPersons'
import AddPerson from './components/AddPerson'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
    const [persons, setPersons] = useState([])
    
    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            })
    }, [])

    const [filteredPersons, setFilteredPersons] = useState(persons)


    return(
        <div>
            <h2>Phonebook</h2>
            <Filter persons={persons} filteredPersons={filteredPersons} setFilteredPersons={setFilteredPersons}/>
            <AddPerson persons={persons} setPersons={setPersons}/>
            <h2>Numbers</h2>
            <ListPerons persons={persons}/>
        </div>
    )
}

export default App