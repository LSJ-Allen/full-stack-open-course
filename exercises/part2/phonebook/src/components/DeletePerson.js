import personService from "../services/backend";

const DeletePerson = ({person, persons, setPersons}) => {
    const handleDelete = () => {
        if(window.confirm(`Delete ${person.name}?`)){
            personService
                .deletePerson(person)
                .then(
                    // remove the person from display
                    setPersons(persons.filter(p => p.id !== person.id))
                )
        }
    }
    return ( 
        <button onClick={handleDelete}>delete</button>
     );
}
 
export default DeletePerson;