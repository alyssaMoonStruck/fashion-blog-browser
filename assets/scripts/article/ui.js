
const limit = require('../../../lib/limit')

const createArticleSuccess = function (response) {
    $('#message').text('article created! Yay!')
    // response: { article: { ..., title: '' } }
    const oneArticle = (`
        <h3>${response.article.title}</h3>
        <h4>${response.article.text}</h4>
        <p>ID: ${response.article._id}</p>
        <p>Owner (User's ID): ${response.article.owner}</p>
    `)
    $('#content').html(oneArticle)
}
const createArticleFailure = function (error) {
    console.log(error)
    $('#message').text('article was not created :(')
}

const indexArticleSuccess = function (response) {
    let articleHtml = ''
    response.articles.forEach(article => {
    const oneArticle = (`
        <h3>${article.title}</h3>
        <p>${limit(article.text, 40)}</p>
        <p>ID: ${article._id}</p>
        <p>Owner (User's ID): ${article.owner}</p>
        `)

    articleHtml += oneArticle
    })


    $('#content').html(articleHtml)
}

const indexArticleFailure = function () {
    $('#message').text('Index articles failed :(')
}

const showArticleSuccess = function (response) {
    const oneArticle = (`
        <h3>${response.article.title}</h3>
        <h4>${response.article.text}</h4>
        <p>ID: ${response.article._id}</p>
        <p>Owner (User's ID): ${response.article.owner}</p>
    `)

    $('#content').html(oneArticle)
}

const showArticleFailure = function () {
    $('#message').text('Show article failed :(')
}



const deleteArticleSuccess = function (response) {
    const oneArticle = (`
        <h3>${response.article.title}</h3>
        <h4>${response.article.text}</h4>
        <p>ID: ${response.article._id}</p>
        <p>Owner (User's ID): ${response.article.owner}</p>
    `)

    $('#content').html(oneArticle)
}

const deleteArticleFailure = function () {
    $('#message').text('Show article failed :(')
}

module.exports = {
    createArticleSuccess,
    createArticleFailure,
    indexArticleSuccess,
    indexArticleFailure,
    showArticleFailure,
    showArticleSuccess,
    deleteArticleSuccess,
    deleteArticleFailure
}
