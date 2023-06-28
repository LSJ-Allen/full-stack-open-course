import {useState} from 'react'
import ListPerons from './components/ListPersons'
import AddPerson from './components/AddPerson'
import Filter from './components/Filter'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])

    const [filteredPersons, setFilteredPersons] = useState(persons)


    return(
        <div>
            <h2>Phonebook</h2>
            <Filter persons={persons} filteredPersons={filteredPersons} setFilteredPersons={setFilteredPersons}/>
            <AddPerson persons={persons} setPersons={setPersons}/>
            <h2>Numbers</h2>
            <ListPerons persons={filteredPersons}/>
        </div>
    )
}

export default App