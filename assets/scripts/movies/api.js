const config = require('../config')
const store = require('../store')


const createArticle = function (formData) {
console.log(store)
return $.ajax({
    headers: {
    Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/articles',
    method: 'POST',
    data: formData
})
}

const getAllArticles = function () {
return $.ajax({
    url: config.apiUrl + '/articles'
})
}

const getArticle = function (id) {
return $.ajax({
    url: config.apiUrl + '/articles' + id
})
}

const deleteArticle = function (id) {
    var token = store.user.token
    return $.ajax({
        url: config.apiUrl + '/articles' + id
    })
}

module.exports = {
    createArticle,
    getAllArticles,
    getArticle,
    deleteArticle

}