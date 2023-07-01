import personService from "../services/backend";

const DeletePerson = ({person, persons, setPersons}) => {
    const handleDelete = () => {
        if(window.confirm(`Delete ${person.name}?`)){
            personService
                .deletePerson(person)
                .then((response) => {
                    // remove the person from display
                    setPersons(persons.filter(p => p.id !== person.id))
                    alert(`Successfully deleted ${person.name}`)
                })
                .catch(error => {
                    alert(`Information of ${person.name} does not exist.`)
                })
        }
    }
    return ( 
        <button onClick={handleDelete}>delete</button>
     );
}
 
export default DeletePerson;