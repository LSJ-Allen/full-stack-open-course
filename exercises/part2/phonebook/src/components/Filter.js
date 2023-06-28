import { useState } from "react"

const Filter = ({persons, filteredPersons, setFilteredPersons}) => {
    const [newFilter, setFilter] = useState("")

    const handleFilter = (event) => {
        let search = event.target.value
        setFilter(search)
        console.log(search, search.localeCompare(""));
        if(search.localeCompare("")!==0){
            setFilteredPersons(persons.filter(person => person.name.includes(search)))
        } else {
            setFilteredPersons(persons)
        }
    }

    return (  
        <div>filter shown with 
            <input type="text" 
                value={newFilter}
                onChange={handleFilter}    
            />
        </div>
    );
}
 
export default Filter;