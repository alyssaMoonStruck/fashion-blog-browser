const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onArticleCreate = (event)=> {
    event.preventDefault()
const form = event.target
const formData = getFormFields(form)
api.createArticle(formData)
    .then(ui.createArticleSuccess)
    .catch(ui.createArticleFailure)
}

const onArticleIndex =  (event)=> {
api.getAllArticles()
    .then(ui.indexArticleSuccess)
    .catch(ui.indexArticleFailure)
}

const onArticleShow =  (event) => {
event.preventDefault()

const form = event.target
const formData = getFormFields(form)
api.getArticle(formData.article.id)
    .then(ui.showArticleSuccess)
    .catch(ui.showArticleFailure)
}

const onArticleDelete = (event) => {
    event.preventDefault()

    const form = event.target
    const formData = getFormFields(form)
    api.deleteArticle(formData.article.id)
        .then(ui.deleteArticleSuccess)
        .catch(ui.deleteArticleFailure)
}

module.exports = {
onArticleCreate,
onArticleShow,
onArticleIndex,
onArticleDelete
}
