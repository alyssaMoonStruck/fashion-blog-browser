const config = require('../config')
const store = require('../store')


const createArticle = function (formData) {
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
    headers: {
    Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/articles',
    

})
}

const getArticle = function (id) {
return $.ajax({
    headers: {
        Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/articles/' + id,
    method: 'GET',
})
}

const editArticle = function (formData) {
    const article = { 
        article: formData
    }
    return $.ajax({
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        url: config.apiUrl + '/articles/' + formData._id,
        method: 'PATCH',
        data: article
    })
}

const deleteArticle = function (id) {
    const token = store.user.token
    return $.ajax({
        headers: {
            Authorization: 'Bearer ' + token 
        },
        url: config.apiUrl + '/articles/' + id,
        method: 'DELETE'
    })
}



module.exports = {
    createArticle,
    getAllArticles,
    getArticle,
    deleteArticle,
    editArticle

}