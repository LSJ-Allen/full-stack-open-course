import axios from "axios";

const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const deletePerson = (object) => {
    console.log(object)
    const request = axios.delete(`${baseUrl}/${object.id}`)
    console.log(request);
    return request.then(response => response.data)
}

const update = (object) => {
    const request = axios.put(`${baseUrl}/${object.id}`, object)
    return request.then(response => response.data)
}

const personService = {
    getAll,
    create,
    deletePerson,
    update
}
export default personService