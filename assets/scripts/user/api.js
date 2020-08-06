'use strict'

const config = require('../config')

const get = () => {
    return $.ajax({ 
        url: config.apiUrl,
        method: 'GET'
    })
}
const post = () => {
    return $.ajax({ 
        url: config.apiUrl,
        method: 'POST'
    })
}

const patch = () => {
    return $.ajax({ 
        url: config.apiUrl,
        method: 'PATCH'
    })
}


module.exports = {
    get,
    post,
    patch,
}