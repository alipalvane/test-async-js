const axios = require('axios')

const fetchDate = ()=>{
    return axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.data)
}

exports.fetchDate = fetchDate