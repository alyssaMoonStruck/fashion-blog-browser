'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGet = () => {
    api.get()
    .then(res => console.log(res))
    .catch(res => console.warn(res))
}
const onPost = () => {
    api.post()
    .then(res => console.log(res))
    .catch(res => console.warn(res))
}

const onPatch = () => {
    api.post()
    .then(res => console.log(res))
    .catch(res => console.warn(res))
}
module.exports = {
    onGet,
    onPost,
    onPatch
}