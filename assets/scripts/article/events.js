const getFormFields = require("../../../lib/get-form-fields");
const api = require("./api");
const ui = require("./ui");

const onArticleCreate = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = getFormFields(form);
    api.createArticle(formData)
        .then(onArticleIndex)
        .catch(ui.createArticleFailure);
};

const onArticleIndex = () => {
    api.getAllArticles()
        .then(ui.indexArticleSuccess)
        .catch(ui.indexArticleFailure);
};

const onArticleShow = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = getFormFields(form);
    api.getArticle(formData.article.id)
        .then(ui.showArticleSuccess)
        .catch(ui.showArticleFailure);
};

const onArticleEditGet = (event) => {
    const articleId = $(event.target).data("id");
    api.getArticle(articleId)
        .then(ui.setEditForm) 
        .catch((res) => console.error(res));
};

const onArticleEdit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = getFormFields(form);
    api.editArticle(formData)
        .then(() => {
            ui.editArticleSuccess();
            onArticleIndex();
        })
        .catch(ui.editArticleFailure);
};

const onArticleDelete = (event) => {
    const articleId = $(event.target).data("id");
    api.deleteArticle(articleId)
        .then(onArticleIndex)
        .catch(ui.deleteArticleFailure);
};

const onArticleSearch = (event) => {
    const searchTerm = event.target.value
    if ( searchTerm == '') {
        onArticleIndex()
    } else {
        api.getArticle(searchTerm)
        .then(ui.showArticleSuccess)
        .catch(ui.showArticleFailure)
    }

}

const onGetOneArticle = function (event) {
    api.getAllArticles(articles.id)
        .then()
        .catch()
    }

const addHandler = () => {
    $("#content").on("click", ".delete-article", onArticleDelete);
    $("#content").on("click", ".edit-article", onArticleEditGet);
    $("#content").on("change","#search-box", onArticleSearch);
};

module.exports = {
    onArticleCreate,
    onArticleShow,
    onArticleIndex,
    onArticleDelete,
    addHandler,
    onArticleEdit,
    onGetOneArticle
};
