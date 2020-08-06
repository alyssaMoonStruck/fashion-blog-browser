const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onArticleCreate = function (event) {
    event.preventDefault()
const form = event.target
const formData = getFormFields(form)
api.articleCreate(formData)
    .then(ui.createArticleSuccess)
    .catch(ui.createArticleFailure)
}

const onArticleIndex = function (event) {
api.articleIndex()
    .then(ui.indexArticleSuccess)
    .catch(ui.indexArticleFailure)
}

const onArticleShow = function (event) {
event.preventDefault()

const form = event.target
const formData = getFormFields(form)
api.articleShow(formData.article.id)
    .then(ui.showarticleSuccess)
    .catch(ui.showarticleFailure)
}

const onArticleDelete = function(event) {
    event.preventDefault()

    const form = event.target
    const formData = getFormFields(form)
    api.articleDelete(formData.article.id)
        .then(ui.deleteArticleSuccess)
        .catch(ui.deleteArticleFailure)
}

module.exports = {
onArticleCreate,
onArticleShow,
onArticleIndex,
onArticleDelete
}
