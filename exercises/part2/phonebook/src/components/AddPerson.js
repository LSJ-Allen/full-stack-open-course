import { useState } from "react"
import personService from "../services/backend"
import Message from "./Message"

const AddPerson = ({persons, setPersons}) => {
    // lift the persons' state up to the App ancestor
    // state to store the name
    const [newName, setName] = useState("")

    // state to store the number
    const [newNumber, setNumber] = useState("")
    const [msg, setMsg] = useState(null)

    // submission handler
    const addPerson = (event) => {
        event.preventDefault()
        // console.log('button clicked', event.target)

        // check for repeated names
        let id = -1
        let hasRepetition = false
        for(let i = 0; i < persons.length; i++){
            if(persons[i].name.localeCompare(newName)===0){
                hasRepetition=true
                id = persons[i].id
            }
        }

        if(!hasRepetition){
            const person = {
                name: newName,
                number: newNumber
            }
            personService.create(person)
                .then(response => {
                    setPersons(persons.concat(response))
                    setName('')
                    setNumber('')
                    setMsg(`Added ${response.name}`)
                    setTimeout(() => {
                        setMsg(null)
                    }, 5000)
                })
                .catch(error => {
                    const errorMsg = error.response.data.error
                    console.log(errorMsg)
                    setMsg(errorMsg)
                    setTimeout(() => {
                        setMsg(null)
                    }, 5000)
                })

        } else{
            if(window.confirm(`${newName} already exists, replace the old number with a new one?`)){
                const originalPerson = persons.find(person => person.id === id)
                const updatedPerson = {...originalPerson, number: newNumber}
                personService.update(updatedPerson)
                    .then((response => {
                        console.log(response);
                        setPersons(persons.map(p => p.id !== id ? p : response))
                    }))
            }
        }
        
    }

    const handleNameChange = (event) => {
        //console.log(event.target)
        setName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNumber(event.target.value)
    }
    return ( 
        <>
            <Message msg={msg}/>
            <h2>add new</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName}
                        onChange={handleNameChange}/>
                </div>
                <div>number: 
                    <input 
                        type="text"
                        value={newNumber}
                        onChange={handleNumberChange}
                        />
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>
        </>
     );
}
 
export default AddPerson;