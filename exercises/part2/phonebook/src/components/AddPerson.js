import { useState } from "react"

const AddPerson = ({persons, setPersons}) => {
    // lift the persons' state up to the App ancestor
    // state to store the name
    const [newName, setName] = useState("")

    // state to store the number
    const [newNumber, setNumber] = useState("")

    // submission handler
    const addPerson = (event) => {
        event.preventDefault()
        // console.log('button clicked', event.target)

        // check for repeated names
        let hasRepetition = false
        for(let i = 0; i < persons.length; i++){
            if(persons[i].name.localeCompare(newName)===0){
                hasRepetition=true
            }
        }

        if(!hasRepetition){
            const person = {
                name: newName,
                number: newNumber
            }
            setPersons(persons.concat(person))
        } else{
            alert(`${newName} already exists.`)
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