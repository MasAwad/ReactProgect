import axios from 'axios'

export function getUsersFromBackEnd() {
    return axios.get('https://jsonplaceholder.typicode.com/users')
}

export function getUser(id){
    return axios.get('https://jsonplaceholder.typicode.com/users/'+id)
    // return axios.get(`https://jsonplaceholder.typicode.com/users/${id}/`)
}