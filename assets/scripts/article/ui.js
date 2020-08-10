
const showArticleTemplate = require('../templates/article-listing.handlebars')


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
    $('form').trigger('reset')
}

const createArticleFailure = function (error) {
    console.log(error)
    $('#message').text('article was not created')
}

const indexArticleSuccess = function (response) {
    const showArticleHtml = showArticleTemplate({ articles: response.articles })
    $('#content').html(showArticleHtml)
}

const indexArticleFailure = function () {
    $('#message').text('Index articles failed')
}

const showArticleSuccess = function (response) {
    const showArticleHtml = showArticleTemplate({ articles: [response.article]})
    $('#content').html(showArticleHtml)
    $('#get-all').show()
}

const showArticleFailure = function () {
    $('#message').text('Show article failed')
}


const setEditForm = function (response) {
    console.log(response)
        $('#title').val(response.article.title)
        $('#text').val(response.article.text)
        $('#owner').val(response.article.owner)
        $('#_id').val(response.article._id)
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
    $('#message').text('Delete article failed')
}

const editArticleSuccess = function () {
    $('#message').text("Successfully edited article")
    $("#editModal").modal('hide');
    
}

const editArticleFailure = function () {
    $('#message').text("Edit article failed")
    $("#editModal").modal('hide');
}

module.exports = {
    createArticleSuccess,
    createArticleFailure,
    indexArticleSuccess,
    indexArticleFailure,
    showArticleFailure,
    showArticleSuccess,
    deleteArticleSuccess,
    deleteArticleFailure,
    setEditForm,
    editArticleSuccess,
    editArticleFailure
}
