import axios from "axios"

const url = 'http://localhost:3001/persons'

export const getPersons = () =>{
    return axios.get(url)
}

export const createEntry = newPerson =>{
    return axios.post(url, newPerson)
}

export const updatePerson = (id, updatedPerson) =>{
    return axios.put(`${url}/${id}`, updatedPerson)
}

export const deletePerson = (id) => {
    return axios.delete(`${url}/${id}`);
}
