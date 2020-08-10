'use strict'
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const articleEvent = require('../article/events')
const articleApi = require('../article/api')

const onSignUp = function(event) {
    event.preventDefault()
    const form = event.target
    const formInfo = getFormFields(form)

    api.signUp(formInfo)
        .then(ui.signUpSuccess)
        .catch(ui.signUpFailure)
}

const onSignIn = function(event) {
    event.preventDefault()
    const form = event.target
    const formInfo = getFormFields(form)

    api.signIn(formInfo)
        .then((res) => {
            ui.signInSuccess(res)
            articleApi.getAllArticles()
            .then(articleEvent.onArticleIndex)
        })
        .catch(ui.signInFailure)
}

const onChangePassword = function(event) {
    console.log(event.target)
    event.preventDefault()
    const form = event.target
    const formInfo = getFormFields(form)

    api.changePassword(formInfo)
        .then(ui.changePasswordSuccess)
        .catch(ui.changePasswordFailure)
}

const onSignOut = function(event) {
    event.preventDefault()

    api.signOut()
        .then(ui.signOutSuccess)
        .catch(ui.signOutFailure)
        
}



module.exports = {
    onSignUp,
    onSignIn,
    onChangePassword,
    onSignOut

}