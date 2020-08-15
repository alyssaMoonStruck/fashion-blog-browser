
const showArticleTemplate = require('../templates/article-listing.handlebars')


//Index
const indexArticleSuccess = function (response) {
    const showArticleHtml = showArticleTemplate({ articles: response.articles })
    $('#content').html(showArticleHtml)
    $('#message').text('Found all Articles!')

}

const indexArticleFailure = function () {
    $('#authenticatedMess').text('Could not get all Articles')
}

//Create
const createArticleSuccess = function (response) {
    const showArticleHtml = showArticleTemplate({ articles: response.articles })
    $('#content').html(showArticleHtml)
    $("#article-create").trigger('reset')
    $('#authenticatedMess').text('Article Created!')
}

const createArticleFailure = function (error) {
    $('#authenticatedMess').text('Article was not Created')
}

//Get One
const showArticleSuccess = function (response) {
    const showArticleHtml = showArticleTemplate({ articles: [response.article]})
    $('#content').html(showArticleHtml)
    $('#authenticatedMess').text('Article Found!')

}

const showArticleFailure = function () {
    $('#authenticatedMess').text('Article was not Found')
}

//Edit Get
const setEditForm = function (response) {
    $('#title').val(response.article.title)
    $('#text').val(response.article.text)
    $('#ownerId').val(response.article.ownerId)
    $('#_id').val(response.article._id)
}

//Edit
const editArticleSuccess = function (response) {
    const showArticleHtml = showArticleTemplate({ articles: response.articles })
    $('#content').html(showArticleHtml)
    $('#authenticatedMess').text('Successfully Edited Article!')
    $("#editModal").modal('hide');
}

const editArticleFailure = function () {
    $('#authenticatedMess').text("Edit Article Failed")
    $("#editModal").modal('hide');
}

// Delete
const deleteArticleSuccess = function (response) {
    const showArticleHtml = showArticleTemplate({ articles: response.articles })
    $('#content').html(showArticleHtml)
    $('#authenticatedMess').text('Successfully Deleted Article!')
}

const deleteArticleFailure = function () {
    $('#authenticatedMess').text('Delete Article Failed')
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
