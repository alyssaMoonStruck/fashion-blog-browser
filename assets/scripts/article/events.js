const getFormFields = require("../../../lib/get-form-fields");
const api = require("./api");
const ui = require("./ui");

const onArticleIndex = () => {
    api.getAllArticles()
        .then(ui.indexArticleSuccess)
        .catch(ui.indexArticleFailure);
};

const onArticleCreate = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = getFormFields(form);
    api.createArticle(formData)
        .then(()=>{
            api.getAllArticles()
                .then(ui.createArticleSuccess)
        })
        .catch(ui.createArticleFailure);
};  


const onArticleShow = () => {
    let searchTerm = $('#search-box').val()
    if ( searchTerm === '') {
        onArticleIndex()
    } else {
        api.getArticle(searchTerm)
            .then(ui.showArticleSuccess)
            .catch(ui.showArticleFailure);
    }

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
        .then(()=>{
            api.getAllArticles()
                .then(ui.editArticleSuccess)
        })
        .catch(ui.editArticleFailure);
};

const onArticleDelete = (event) => {
    const articleId = $(event.target).data("id");
    api.deleteArticle(articleId)
        .then(()=>{
            api.getAllArticles()
                .then(ui.deleteArticleSuccess)
        })
        .catch(ui.deleteArticleFailure);
};


const addHandler = () => {
    $("#content").on("click", ".delete-article", onArticleDelete);
    $("#content").on("click", ".edit-article", onArticleEditGet);
    $("#content").on("click", "#article-show", onArticleShow);

};

module.exports = {
    onArticleCreate,
    onArticleShow,
    onArticleIndex,
    onArticleDelete,
    addHandler,
    onArticleEdit,
};
