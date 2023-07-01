import DeletePerson from "./DeletePerson";

// This component handles the list display of all persons
const ListPerons = ({persons, setPersons}) => {
    return ( 
        <div>
            <ul>
                {persons.map(person => <li key={person.name}>
                    {person.name} {person.number}
                    <DeletePerson person={person} persons={persons} setPersons={setPersons}/>
                </li>)}
            </ul>
        </div>
     );
}
 
export default ListPerons;