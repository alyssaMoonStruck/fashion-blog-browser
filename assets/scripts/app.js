'use strict'

const authEvents = require('./auth/events')
const articleEvents = require('./article/events')

$(() => {
  $('#authenticated').hide()

  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

    // Article Listeners:
  $('#article-create').on('submit', articleEvents.onArticleCreate)
  $('#article-index').on('click', articleEvents.onArticleIndex)
  $('#article-delete').on('click', articleEvents.onArticleDelete)
  $('#edit-form').on('submit', articleEvents.onArticleEdit)
  articleEvents.addHandler()

  

})
